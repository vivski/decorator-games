'use client';
import { createContext, useContext, useRef, useState, type ReactNode } from 'react';

const Ctx = createContext({ on: false, toggle: () => {} });

/** Um único <audio> no layout: a música continua entre as telas. */
export function MusicProvider({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLAudioElement>(null);
  const [on, setOn] = useState(false);
  const toggle = () => {
    const a = ref.current;
    if (!a) return;
    if (on) a.pause(); else a.play().catch(() => {});
    setOn(!on);
  };
  return (
    <Ctx.Provider value={{ on, toggle }}>
      <audio ref={ref} src="/audio/musica.mp3" loop />
      {children}
    </Ctx.Provider>
  );
}

export function MusicButton() {
  const { on, toggle } = useContext(Ctx);
  return <button className="redondo musica" onClick={toggle} aria-label={on ? 'Desativar música' : 'Ativar música'}>{on ? '🔊' : '🔇'}</button>;
}
