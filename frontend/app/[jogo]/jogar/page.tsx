'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useJogo } from '@/lib/useJogo';
import { montar, salvar, type Montagem } from '@/lib/api';
import Stage from '@/components/Stage';
import ConfirmModal from '@/components/ConfirmModal';

export default function Jogar() {
  const j = useJogo();
  const router = useRouter();
  const [itens, setItens] = useState<string[]>([]);   // ordem dos cliques = ordem dos decorators
  const [baseAtiva, setBaseAtiva] = useState(false);
  const [res, setRes] = useState<Montagem>({ descricao: j.baseNome, camadas: [j.baseLayer] });
  const [confirmar, setConfirmar] = useState(false);

  // a cada mudança o backend monta a cadeia de decorators e devolve descrição + camadas
  useEffect(() => { montar(j.endpoint, itens).then(setRes).catch(() => {}); }, [itens, j.endpoint]);

  const adicionar = (id: string) => { setBaseAtiva(false); setItens((p) => (p.includes(id) ? p : [...p, id])); };
  const remover = (id: string) => setItens((p) => p.filter((x) => x !== id));
  const limpar = () => { setItens([]); setBaseAtiva(false); };
  const finalizar = async () => {
    await salvar(j.slug === 'cafe' ? 'cafe' : 'avatar', itens).catch(() => {});
    router.push(`/${j.slug}/final?itens=${itens.join(',')}`);
  };

  const Tile = ({ id, nome, emoji, ativo, onClick, onX }: { id: string; nome: string; emoji: string; ativo: boolean; onClick: () => void; onX: () => void }) => (
    <div className={`tile ${ativo ? 'ativo' : ''}`} onClick={onClick} role="button" key={id}>
      {ativo && <button className="x" aria-label={`Remover ${nome}`} onClick={(e) => { e.stopPropagation(); onX(); }}>✕</button>}
      <span className="tile-emoji">{emoji}</span><span>{nome}</span>
    </div>
  );

  return (
    <main className={`jogo ${j.slug}`}>
      <button className="redondo voltar" onClick={() => setConfirmar(true)} aria-label="Voltar ao menu">←</button>

      <section className="palco">
        <Stage pasta={j.pasta} camadas={res.camadas} z={j.z} />
        <div className="chip">{res.descricao}</div>
      </section>

      <aside className="painel">
        <h2 className="titulo">{j.painel}</h2>
        <div className="grade" style={{ ['--cols' as string]: j.colunas }}>
          {j.baseItem && <Tile {...j.baseItem} ativo={baseAtiva} onClick={() => { setItens([]); setBaseAtiva(true); }} onX={() => setBaseAtiva(false)} />}
          {j.itens.map((i) => <Tile key={i.id} {...i} ativo={itens.includes(i.id)} onClick={() => adicionar(i.id)} onX={() => remover(i.id)} />)}
        </div>
        {j.slug === 'cafe' ? (
          <button className="btn verde cheio" onClick={finalizar}>{j.salvar}</button>
        ) : (
          <div className="acoes">
            <button className="btn verde" onClick={finalizar}>{j.salvar}</button>
            <button className="btn vermelho" onClick={limpar}>{j.reset}</button>
          </div>
        )}
      </aside>

      {j.slug === 'cafe' && <button className="btn vermelho reset-fixo" onClick={limpar}>{j.reset}</button>}
      {confirmar && <ConfirmModal onCancelar={() => setConfirmar(false)} onVoltar={() => router.push('/')} />}
    </main>
  );
}
