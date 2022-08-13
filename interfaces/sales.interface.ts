interface Sale {
    id?: number;
    nome: string;
    modelo: number;
    marca: string,
    ano: string;
    placa: string;
    cor: string;
    chassi: string;
    datavenda: Date;
    valorvenda: number;
}

export default Sale;