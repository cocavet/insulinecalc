import { IPlanController, MessagesENU } from '../../contracts/Controller';
import { newPlan, newUser } from '../../factory';
import Controller from '../../model/controller';
import { GET_PLAN } from '../../router';

class PlanCO extends Controller  implements IPlanController {
    public init() {
        this.getPlan();
    }

    public getPlan(): void {
        this.app.post(GET_PLAN, async (req, res) => {
            try {
                const user = newUser(req.body);
                const plan = newPlan(user, req.params.days);

                res.status(200).json({user, dailyNutritional: user.getDailyNutritional(), plan: await plan.getPlan()});
            } catch (error) {
                res.status(500).json(MessagesENU.Error);
            }
        });
    }
}

export default PlanCO;
