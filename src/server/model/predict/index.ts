import { IPredict } from '../../contracts/predict';
import { doPredict, trainingModel } from '../../service/ml/keras';

class Predict implements IPredict {
    public simulatedMeals: any[];
    public insulineDoses: any[];
    public model: any;

    constructor(simulatedMeals: any[], insulineDoses: any[], model: any) {
        this.model = model;
        this.simulatedMeals = simulatedMeals;
        this.insulineDoses = insulineDoses;
    }

    public trainModel() {
        return trainingModel(this.simulatedMeals, this.insulineDoses);
    }

    public getPredict() {
        return doPredict(this.model);
    }
}

export default Predict;
