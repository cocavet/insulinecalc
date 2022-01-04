import { IPredict } from '../../contracts/predict';
import { doPredict, trainingModel } from '../../service/ml/keras';

class Predict implements IPredict {
    public simulatedMeals: any[];
    public insulineDoses: any[];
    public userId: string;

    constructor(simulatedMeals: any[], insulineDoses: any[], userId: string) {
        this.simulatedMeals = simulatedMeals;
        this.insulineDoses = insulineDoses;
        this.userId = userId;
    }

    public async trainModel(): Promise<boolean> {
        return await trainingModel(this.simulatedMeals, this.insulineDoses, this.userId);
    }

    public getPredict(): Promise<number | boolean> {
        return doPredict(this.simulatedMeals, this.userId);
    }
}

export default Predict;
