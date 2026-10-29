'use client';
import Link from 'next/link';
import { useJogo } from '@/lib/useJogo';

export default function Intro() {
  const j = useJogo();
  return (
    <main className="centro">
      <div className="emoji-grande">{j.emoji}</div>
      <h1 className="titulo grande">{j.titulo}</h1>
      <div className="linha">
        <Link href={`/${j.slug}/jogar`} className="btn verde">▶ Jogar</Link>
        <Link href="/" className="btn branco">Voltar</Link>
      </div>
    </main>
  );
}
