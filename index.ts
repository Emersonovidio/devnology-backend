import express  from "express";
import { StatusCodes } from 'http-status-codes';
import BuysRoutes from './routes/buys.routes';

const app = express();

app.use(express.json());

const PORT = 5000;

app.get('/', (_req, res) => {
    res.status(StatusCodes.OK).send('Welcome to Devnology Cars')
});

app.listen(PORT, () => {
    console.log( `Server ir running on ${PORT}`);
});
app.use(BuysRoutes);