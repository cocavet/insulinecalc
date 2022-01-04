import User from '../../model/user';

export interface IPredict {
    simulatedMeals: any[];
    insulineDoses: any[];
    userId: string;

    trainModel(): Promise<boolean>;
    getPredict(): Promise<number | boolean>;
}
