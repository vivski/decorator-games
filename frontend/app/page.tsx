import Link from 'next/link';

export default function Home() {
  return (
    <main className="centro">
      <h1 className="titulo grande">Trabalho para a disciplina de PROO</h1>
            <h2 className="titulo grande">Design Pattern Decorator</h2>

      <div className="linha">
        <Link href="/cafe" className="btn branco borda-rosa">☕ Café de BSI</Link>
        <Link href="/vestuario" className="btn branco borda-azul">👗 Vestuário Divas S.I</Link>
      </div>
      <p className="creditos">Feito por Bárbara, Kalline, Samyra e Vivian 💖</p>
    </main>
  );
}
