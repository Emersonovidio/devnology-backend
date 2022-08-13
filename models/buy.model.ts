import { Pool, ResultSetHeader } from "mysql2/promise";
import Buy from "../interfaces/buys.interface";

export default class BuyModel {
    public connection: Pool;

    constructor(connection: Pool) {
      this.connection = connection;
    }

    public async getAll(): Promise<Buy[]> {
        const result = await this.connection
            .execute('SELECT * FROM buys');
        const [rows] = result;
        return rows as Buy[];    
    }

    public async create(buy: Buy): Promise<Buy> {
        const { nome, modelo, marca, ano, placa, cor, chassi, datacompra, valorcompra } = buy;
        const result = await this.connection.execute<ResultSetHeader>(
          'INSERT INTO buys (nome, modelo, marca, ano, placa, cor, chassi, datacompra, valorcompra) VALUES (?,?,?,?,?,?,?,?,?)',
          [nome, modelo, marca, ano, placa, cor, chassi, datacompra, valorcompra],
        );
        
        const [dataInserted] = result;
        const { insertId } = dataInserted;
        return { id: insertId,  ...buy };
    }
    public async getById(id: number): Promise<Buy> {
        const result = await this.connection
            .execute('SELECT * FROM buys WHERE id=?', [id]);
        const [rows] = result;;
        const [buy] = rows as Buy[]
        return buy;    
    }

}