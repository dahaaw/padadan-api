import { Request, Response } from 'express';

class AuthController {

    register( req: Request, res: Response ) {
        res.json({mess: 'register'});
    }
    
    login(req: Request, res: Response) {
        res.json({mess:'login'});
    }

}

export default new AuthController();