export type Item = { id: string; nome: string; emoji: string };
export type Jogo = {
  slug: string; titulo: string; emoji: string; pasta: string; endpoint: string;
  baseLayer: string; baseNome: string; z: string[]; painel: string; colunas: number;
  itens: Item[]; baseItem?: Item; salvar: string; reset: string; again: string;
  finalTitulo?: string; finalMsg?: (nomes: string[]) => string;
};
const lista = (n: string[]) => (n.length < 2 ? n.join('') : n.slice(0, -1).join(', ') + ' e ' + n[n.length - 1]);

export const JOGOS: Record<string, Jogo> = {
  cafe: {
    slug: 'cafe', titulo: 'Café de BSI', emoji: '☕', pasta: 'cafe', endpoint: 'cafe/montar',
    baseLayer: 'cafe-base', baseNome: 'Café simples', painel: 'Ingredientes', colunas: 3,
    // ordem de empilhamento dos SVGs (de baixo para cima)
    z: ['cafe-base', 'cafe-com-leite', 'cafe-com-chocolate', 'cafe-com-creme-de-avela', 'cafe-com-chantilly', 'cafe-com-cacau'],
    baseItem: { id: 'base', nome: 'Café simples', emoji: '☕' },
    itens: [
      { id: 'leite', nome: 'Leite', emoji: '🥛' }, { id: 'chocolate', nome: 'Chocolate', emoji: '🍫' },
      { id: 'creme-de-avela', nome: 'Creme de avelã', emoji: '🌰' }, { id: 'chantilly', nome: 'Chantilly', emoji: '🍦' },
      { id: 'cacau', nome: 'Cacau', emoji: '✨' },
    ],
    salvar: 'Salvar café', reset: 'Remover alterações', again: 'Fazer outro',
    finalMsg: (n) => (n.length ? `Parabéns! Seu café com ${lista(n.map((x) => x.toLowerCase()))} foi feito! 🎉` : 'Parabéns! Seu café simples foi feito! 🎉'),
  },
  vestuario: {
    slug: 'vestuario', titulo: 'Vestuário Divas S.I', emoji: '👗', pasta: 'vestuario', endpoint: 'avatar/vestir',
    baseLayer: 'boneca-base', baseNome: 'Avatar', painel: 'Guarda-roupa', colunas: 3,
    z: ['boneca-base', 'boneca-com-vestido', 'boneca-com-calca', 'boneca-com-blusa', 'boneca-com-casaco', 'boneca-com-bone'],
    itens: [
      { id: 'vestido', nome: 'Vestido', emoji: '👗' }, { id: 'calca', nome: 'Calça', emoji: '👖' },
      { id: 'blusa', nome: 'Blusa', emoji: '👚' }, { id: 'casaco', nome: 'Casaco', emoji: '🧥' },
      { id: 'bone', nome: 'Boné', emoji: '🧢' },
    ],
    salvar: 'Salvar avatar', reset: 'Reset', again: 'Vestir de novo', finalTitulo: 'Look final ✨',
  },
};
