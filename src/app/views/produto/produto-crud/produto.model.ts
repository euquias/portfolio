export interface IProduto {
  id?: number;
  name: string;
  price: string;
}

export interface IPaginacaoProduto {
  paginaAtual: number;
  paginas: number;
  total: number;
  produtos: IProduto[];
}

export interface IFiltroProduto {
  limit: number; // Itens por páginas
  page: number;
}
