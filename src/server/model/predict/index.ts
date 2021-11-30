import { IPredict } from '../../contracts/predict';
import { doPredict } from '../../service/ml/keras';

class Predict implements IPredict {
    public tableMeals;

    constructor(tableMeals) {
        this.tableMeals = tableMeals;
    }

    public getPredict() {
        return doPredict();
    }
}

export default Predict;
