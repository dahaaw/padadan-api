import { Application } from 'express';
import AuthRoutes from './Auth';

class Routes {
    public app: Application;

    constructor(app: Application) {
        this.app = app;
        this.routes();
    }

    protected routes(): void {
        this.app.use('/auth', AuthRoutes);
    }

}

export default Routes;