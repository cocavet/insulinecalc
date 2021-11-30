import { IUser } from '../user';

export interface IController {
    app: any;
}

export interface IUserController {
    init();
    getUser(): void;
}
export interface IMealController {
    init();
    getMeal(): void;
}
export interface IPlanController {
    init();
    getPlan(): void;
}

export interface IPredictController {
    init();
    getPrediction(): void;
}

export enum MessagesENU {
    Error = 'Ups! this is an error',
}
