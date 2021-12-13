import { IMealController, MessagesENU } from '../../contracts/Controller';
import { newMeal } from '../../factory';
import Controller from '../../model/controller';
import { GET_MEAL } from '../../router';

class MealCO extends Controller implements IMealController {
    public init() {
        this.getMeal();
    }

    public getMeal(): void {
        this.app.post(GET_MEAL, async (req, res) => {
            try {
                const meal = newMeal(req.body.user, true);

                res.status(200).json(await meal.getMeal(req.params.query,
                    req.params.mealType, req.params.ownDistribution));
            } catch (error) {
                res.status(500).json(MessagesENU.Error);
            }
        });
    }
}

export default MealCO;
