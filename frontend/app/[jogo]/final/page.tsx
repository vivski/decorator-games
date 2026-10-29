'use client';
import { Suspense, useEffect, useState } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useJogo } from '@/lib/useJogo';
import { montar, type Montagem } from '@/lib/api';
import Stage from '@/components/Stage';

function Conteudo() {
  const j = useJogo();
  const params = useSearchParams();
  const itens = (params.get('itens') ?? '').split(',').filter(Boolean);
  const [res, setRes] = useState<Montagem>({ descricao: '', camadas: [j.baseLayer] });
  useEffect(() => { montar(j.endpoint, itens).then(setRes).catch(() => {}); }, [j.endpoint, params]); // eslint-disable-line react-hooks/exhaustive-deps
  const nomes = itens.map((id) => j.itens.find((i) => i.id === id)?.nome ?? id);

  return (
    <main className="centro final">
      {j.finalTitulo && <h1 className="titulo grande">{j.finalTitulo}</h1>}
      <Stage pasta={j.pasta} camadas={res.camadas} z={j.z} />
      {j.finalMsg && <h1 className="titulo medio">{j.finalMsg(nomes)}</h1>}
      <div className="linha">
        <Link href={`/${j.slug}/jogar`} className="btn roxo">{j.again}</Link>
        <Link href="/" className="btn branco">Menu</Link>
      </div>
    </main>
  );
}

export default function Final() { return <Suspense><Conteudo /></Suspense>; }
