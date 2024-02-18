// import cors from 'cors';
import express, { Application } from 'express';
import serverCheckMiddleware from './middlewares/serverCheckMiddleware.ts';
import router from './routes/route.ts';

const app: Application = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// app.use(cors());
app.use(serverCheckMiddleware);

// app.use('/shaders/:id', idValidationMiddleware);
app.use(router);

app.listen(port, () => {
    console.log(`server listen port ${port}`);
});