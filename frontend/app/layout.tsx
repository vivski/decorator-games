import './globals.css';
import type { ReactNode } from 'react';
import { Chewy, Fredoka } from 'next/font/google';
import { MusicButton, MusicProvider } from '@/components/MusicButton';

const titulo = Chewy({ weight: '400', subsets: ['latin'], variable: '--f-titulo' });
const corpo = Fredoka({ subsets: ['latin'], variable: '--f-corpo' });

export const metadata = { title: 'Decorator Games' };

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR" className={`${titulo.variable} ${corpo.variable}`}>
      <body>
        <MusicProvider>
          {children}
          <MusicButton />
        </MusicProvider>
      </body>
    </html>
  );
}
