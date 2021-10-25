import _ from 'lodash';
import { Dist3MealsENU, Dist5MealsENU, IMeal, IOneMeal } from '../../contracts/meal';
import { INutritional } from '../../contracts/nutritional';
import { getEDAMAMRecipeSE } from '../../service/edamame';
import User from '../user';

class Meal implements IMeal {
    public user: User;
    public nutritional: INutritional;

    constructor(user) {
        this.user = user;
        this.nutritional = this.user.getDailyNutritional();
    }

    public async getMeal(queryRecipe: string, mealType: string): Promise<IOneMeal> {
        return await getEDAMAMRecipeSE(queryRecipe, this.getDistributionMeal(mealType), mealType);
    }

    public getDistributionMeal(mealType: string): number {
        const numMeals = this.user.numMeals;
        const kcals = this.nutritional.Kcal;

        return numMeals === 3
            ? (kcals * Dist3MealsENU[mealType]) / 100
            : (kcals * Dist5MealsENU[mealType]) / 100 ;
    }
}

export default Meal;
