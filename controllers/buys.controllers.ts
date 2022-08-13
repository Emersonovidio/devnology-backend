import { Request, Response } from 'express';
import { StatusCodes} from 'http-status-codes'
import BuyService from '../services/buy.services';


class BuysController {
constructor(
  private buyService = new BuyService()) { } 
 
public getAll = async (_req: Request, res: Response)=> {
  const buys = await this.buyService.getAll();
  res.status(StatusCodes.OK).json(buys);  
};

public getById = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const buy =  await this.buyService.getById(id);
  
  if(!buy) {
  return res.status(StatusCodes.NOT_FOUND)
    .json({ message: 'Buy not found!'});
}
  res.status(StatusCodes.OK).json(buy);
}

public create = async (req: Request, res: Response)=> {
  const buy = req.body;
  
  const createdBuy = await this.buyService.create(buy);

  res.status(StatusCodes.CREATED).json(createdBuy);
};
}    

export default BuysController;