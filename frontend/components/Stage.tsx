/** Empilha os SVGs devolvidos pelo backend (cada "camada" é o nome de um arquivo). */
export default function Stage({ pasta, camadas, z }: { pasta: string; camadas: string[]; z: string[] }) {
  // camadas conhecidas seguem a ordem do z (de baixo para cima)
  const conhecidas = z.filter((id) => camadas.includes(id));
  // nomes que o backend devolveu mas o z não conhece: vão por cima (e não atrás da base) e geram aviso
  const desconhecidas = camadas.filter((id) => !z.includes(id));
  if (desconhecidas.length) console.warn('Camadas fora do z:', desconhecidas);
  const ordenadas = [...conhecidas, ...desconhecidas];

  return (
    <div className={`palco-img ${pasta}`}>
      {ordenadas.map((id) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          key={id}
          src={`/svg/${pasta}/${id}.svg`}
          alt=""
          onError={(e) => {
            console.warn('SVG não encontrado:', e.currentTarget.src);
            e.currentTarget.style.display = 'none';
          }}
        />
      ))}
    </div>
  );
}