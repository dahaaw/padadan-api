import express, { Application } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import compression from 'compression';
import helmet from 'helmet';
import morgan from 'morgan';
import Routes from './routes';

class App {
    public app: Application;

    constructor() {
        dotenv.config();
        this.app = express();
        this.plugins();
        this.routes();
    }

    protected plugins (): void {
        this.app.use(cors());
        this.app.use(helmet());
        this.app.use(compression());
        this.app.use(morgan('dev'));
    }

    protected routes (): void {
        new Routes(this.app);
    }
};

const app = new App().app;
const port: Number = Number(process.env.PORT);
app.listen(port, (): void => console.log(`app run in port ${port}`));
