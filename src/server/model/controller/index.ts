import { IController, IUserController } from '../../contracts/Controller';
import { newUser } from '../../factory';
import { GET_USER } from '../../router';

class Controller implements IController {
    public app: any;

    constructor(app: any) {
        this.app = app;
    }
}

export default Controller;
