import { IPredictController, MessagesENU } from '../../contracts/Controller';
import { newModel, newPredict } from '../../factory';
import Controller from '../../model/controller';
import { GET_MODEL, GET_PREDICTION } from '../../router';

class PredictCO extends Controller implements IPredictController {
    public init() {
        this.getPrediction();
        this.getModel();
    }

    public getModel(): void {
        this.app.post(GET_MODEL, async (req, res) => {
            try {
                res.status(200).json(await newModel(req.body.simulatedMeals, req.body.insulineDoses).trainModel());
            } catch (error) {
                res.status(500).json(MessagesENU.Error);
            }
        });
    }

    public getPrediction(): void {
        this.app.post(GET_PREDICTION, async (req, res) => {
            try {
                res.status(200).json(await newPredict(req.body).getPredict());
            } catch (error) {
                res.status(500).json(MessagesENU.Error);
            }
        });
    }
}

export default PredictCO;
