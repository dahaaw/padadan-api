
import BaseRoutes from './Base';
import AuthController from '../controllers/Auth';

class AuthRoutes extends BaseRoutes {

    routes(): void {
        this.router.get('/register', AuthController.register)
        this.router.get('/login', AuthController.login)
    }

}

export default new AuthRoutes().router;
