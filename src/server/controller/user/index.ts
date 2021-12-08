import { IUserController, MessagesENU } from '../../contracts/Controller';
import { newUser } from '../../factory';
import Controller from '../../model/controller';
import { GET_NUTRITIONAL, GET_USER } from '../../router';

class UserCO extends Controller implements IUserController {
    public init() {
        this.getUser();
        this.getUserNutritional();
    }

    public getUser(): void {
        this.app.post(GET_USER, async (req, res) => {
            try {
                res.status(200).json(await newUser(req.body));
            } catch (error) {
                res.status(500).json(MessagesENU.Error);
            }
        });
    }

    public getUserNutritional(): void {
        this.app.post(GET_NUTRITIONAL, async (req, res) => {
            try {
                const user = await newUser(req.body);
                res.status(200).json(user.getDailyNutritional());
            } catch (error) {
                res.status(500).json(MessagesENU.Error);
            }
        });
    }
}

export default UserCO;
