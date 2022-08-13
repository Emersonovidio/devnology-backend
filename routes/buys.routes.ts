import { Router } from 'express';
import BuysController from '../controllers/buys.controllers';

const router = Router();

const buysController = new BuysController();

router.get('/buys', buysController.getAll);
// router.get('/books/:id', booksController.getById);
router.post('/buys', buysController.create);

export default router;