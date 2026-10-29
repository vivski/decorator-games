'use client';
import { notFound, useParams } from 'next/navigation';
import { JOGOS } from './jogos';

export function useJogo() {
  const { jogo } = useParams<{ jogo: string }>();
  const j = JOGOS[jogo];
  if (!j) notFound();
  return j;
}
