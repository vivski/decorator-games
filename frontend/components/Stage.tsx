/** Empilha os SVGs devolvidos pelo backend (cada "camada" é o nome de um arquivo). */
export default function Stage({ pasta, camadas, z }: { pasta: string; camadas: string[]; z: string[] }) {
  const ordenadas = [...camadas].sort((a, b) => z.indexOf(a) - z.indexOf(b));
  return (
    <div className={`palco-img ${pasta}`}>
      {ordenadas.map((id) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img key={id} src={`/svg/${pasta}/${id}.svg`} alt="" onError={(e) => (e.currentTarget.style.display = 'none')} />
      ))}
    </div>
  );
}
