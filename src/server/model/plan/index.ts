import _ from 'lodash';
import { IOneMeal, MealTypeENU } from '../../contracts/meal';
import { IPlan } from '../../contracts/plan';
import Meal from '../meal';
import User from '../user';

class Plan extends Meal implements IPlan  {
    public user: User;
    public planDays: number;

    constructor(user: User, planDays: number) {
        super(user);
        this.planDays = planDays;
    }

    public async getPlan(): Promise<IOneMeal[]> {
        const mealArray = [];
        const distribution = this.user.numMeals === 3
            ? this.get3Distribute()
            : this.get5Distribute();

        for await (const el of distribution) {
            mealArray.push( await this.getMeal('', el));
        }

        return mealArray;
    }

    protected get3Distribute() {
        return [ MealTypeENU.Breakfast,  MealTypeENU.Lunch,  MealTypeENU.Dinner];
    }

    protected get5Distribute() {
        return [ MealTypeENU.Breakfast,  MealTypeENU.Snack, MealTypeENU.Lunch,  MealTypeENU.Snack, MealTypeENU.Dinner];
    }
}

export default Plan;
