import { IController } from '../../contracts/Controller';

class Controller implements IController {
    public app: any;

    constructor(app: any) {
        this.app = app;
    }
}

export default Controller;
