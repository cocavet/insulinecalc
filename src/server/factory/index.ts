import Meal from '../model/meal';
import Plan from '../model/plan';
import Predict from '../model/predict';
import User from '../model/user';

export function newUser(params: any) {
    const { id, gender, age, height, weight, activity, numMeals, sport, stress } = params;

    return new User(id, gender, age, height, weight, activity, numMeals, sport, stress);
}

export function newMeal(user: any) {
    return new Meal(user);
}

export function newPlan(user: User, days: number) {
    return new Plan(user, days);
}

export function newPredict(tableMeals) {
    return new Predict(tableMeals);
}
