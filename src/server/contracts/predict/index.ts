import User from '../../model/user';

export interface IPredict {
    model: any;
    simulatedMeals: any[];
    insulineDoses: any[];
    userId: string;

    getPredict();
    trainModel();
}
