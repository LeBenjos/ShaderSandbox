import express, { Application } from 'express';
import credentialValidationMiddleware from './middlewares/credentialValidationMiddleware.ts';
import idValidationMiddleware from './middlewares/idValidationMiddleware.ts';
import serverCheckMiddleware from './middlewares/serverCheckMiddleware.ts';
import router from './routes/route.ts';

const app: Application = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use(serverCheckMiddleware);

app.post('/shaders', credentialValidationMiddleware);
app.use('/shaders/:id', idValidationMiddleware);
app.put('/shaders/:id', credentialValidationMiddleware);
app.delete('/shaders/:id', credentialValidationMiddleware);
app.use(router);

app.listen(port, () => {
    console.log(`server listen port ${port}`);
});