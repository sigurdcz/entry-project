import express, {Request, Response} from 'express';

const defaultRouter = express.Router();

defaultRouter.get('/', (req: Request, res: Response)=>{
    res.send('NO RESULT')
});

export default defaultRouter;
