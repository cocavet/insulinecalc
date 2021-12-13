import { IPredict } from '../../contracts/predict';
import { doPredict, trainingModel } from '../../service/ml/keras';

class Predict implements IPredict {
    public simulatedMeals: any[];
    public insulineDoses: any[];
    public model: any;
    public userId: string;

    constructor(simulatedMeals: any[], insulineDoses: any[], model: any, userId: string) {
        this.model = model;
        this.simulatedMeals = simulatedMeals;
        this.insulineDoses = insulineDoses;
        this.userId = userId;
    }

    public async trainModel() {
        return await trainingModel(this.simulatedMeals, this.insulineDoses, this.userId);
    }

    public getPredict() {
        return doPredict(this.simulatedMeals, this.userId);
    }
}

export default Predict;
