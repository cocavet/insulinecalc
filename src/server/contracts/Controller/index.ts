import { IUser } from '../user';

export interface IController {
    app: any;

    init();
}

export interface IUserController {
    getUser(): void;
}
