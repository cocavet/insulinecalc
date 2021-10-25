import { IController, IUserController } from '../../contracts/Controller';

class Controller implements IController, IUserController {
    public app: any;

    constructor(app: any) {
        this.app = app;
    }

    public init() {
        this.getUser();
    }

    public getUser(): void {
        try {
            this.app.get(, );
        } catch (error) {

        }
    }

}

export default Controller;
