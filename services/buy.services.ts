import connection from '../models/connection';
import Buy from '../interfaces/buys.interface';
import BuyModel from '../models/buy.model';

export default class Buyservice {
public model: BuyModel;

constructor() {
    this.model = new BuyModel(connection);
}

public async getAll(): Promise<Buy[]> {
  const buys = await this.model.getAll();
  return buys;    
}

public async getById(id: number): Promise<Buy> {
   
const buys = await this.model.getById(id);
return buys;    
}
public async create(buy: Buy): Promise<Buy> {
   
  return this.model.create(buy);
  
}

}    