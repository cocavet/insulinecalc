import Meal from '../model/meal';
import Plan from '../model/plan';
import Predict from '../model/predict';
import User from '../model/user';

export function newUser(params: any) {
    const { id, gender, age, height, weight, activity,
        numMeals, sport, stress, bloodGlucose } = params;

    return new User(id, gender, age, height, weight, activity,
        numMeals, sport, stress, bloodGlucose);
}

export function newMeal(user: any) {
    return new Meal(user);
}

export function newPlan(user: User) {
    return new Plan(user);
}

export function newModel(simulatedMeals: any[], insulineDoses: any[]) {
    return new Predict(simulatedMeals, insulineDoses, null);
}

export function newPredict(model) {
    return new Predict([], [], model);
}
