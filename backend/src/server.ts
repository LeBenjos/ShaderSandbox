import bodyParser from 'body-parser';
import cors from "cors";
import 'dotenv/config';
import express, { Application } from 'express';
import credentialValidationMiddleware from './middlewares/credentialValidationMiddleware';
import idValidationMiddleware from './middlewares/idValidationMiddleware';
import serverCheckMiddleware from './middlewares/serverCheckMiddleware';
import router from './routes/route';

const app: Application = express();
const port = process.env.PORT || 3000;

// app.use(express.json());
app.use(bodyParser.json({ limit: '200mb' }));
app.use(bodyParser.urlencoded({ limit: '200mb', extended: true }));
app.use(cors({
    origin: process.env.CLIENT_ORIGIN
}));
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type,Authorization');
    next();
});

app.use(serverCheckMiddleware);

app.post('/shaders', credentialValidationMiddleware);
app.use('/shaders/:id', idValidationMiddleware);
app.put('/shaders/:id', credentialValidationMiddleware);
app.delete('/shaders/:id', credentialValidationMiddleware);
app.use(router);

app.listen(port, () => {
    console.log(`server listen port ${port}`);
});