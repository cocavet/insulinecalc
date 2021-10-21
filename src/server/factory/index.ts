import Meal from '../model/meal';
import User from '../model/user';

export function newUser(params: any) {
    const { id, gender, age, height, weight, activity, numMeals} = params;

    return new User(id, gender, age, height, weight, activity, numMeals);
}

export function newMeal(user: any) {
    return new Meal(user);
}
