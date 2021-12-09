import Meal from '../model/meal';
import Plan from '../model/plan';
import Predict from '../model/predict';
import User from '../model/user';

export function newUser(params: any) {
    const { id, gender, age, height, weight, activity, numMeals, sport, stress, bloodGlucose } = params;

    return new User(id, gender, age, height, weight, activity, numMeals, sport, stress, bloodGlucose);
}

export function newMeal(user: any) {
    return new Meal(user);
}

export function newPlan(user: User) {
    return new Plan(user);
}

export function newPredict(tableMeals) {
    return new Predict(tableMeals);
}
