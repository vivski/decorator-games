const API = process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:8080';
export type Montagem = { descricao: string; camadas: string[] };

async function post<T>(caminho: string, corpo: unknown): Promise<T> {
  const r = await fetch(`${API}/api/${caminho}`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(corpo) });
  if (!r.ok) throw new Error(`Erro ${r.status}`);
  return r.json();
}
export const montar = (endpoint: string, itens: string[]) => post<Montagem>(endpoint, { itens });
export const salvar = (tipo: string, itens: string[]) => post<{ id: number; mensagem: string }>('salvar', { tipo, itens });
