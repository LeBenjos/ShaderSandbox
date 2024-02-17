import cors from 'cors';
import express, { Application } from 'express';
import router from './routes/route.ts';

const app: Application = express();
const port = process.env.PORT || 3001;

app.use(express.json());

app.use(cors());

app.use(router);

app.listen(port, () => {
    console.log(`server listen port ${port}`);
});