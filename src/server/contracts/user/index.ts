import { INutritional } from '../nutritional';

export interface IUser {
    id: number;
    gender: GenderENU;
    age: number;
    height: number;
    weight: number;
    activity: ActivityENU;
    numMeals: NumMealsENU;
    sport: number;
    stress: number;
    bloodGlucose: number;
    bloodGlucoseGoal: number;

    setActivity(activity: ActivityENU): void;
    setSport(sport: number): void;
    setStress(stress: number): void;
    setWeight(weight: number): void;
    setbloodGlucose(bloodGlucose: number): void;
    getDailyNutritional(): INutritional;
}

export enum ActivityENU {
    sedentary = 1.2,
    low = 1.375,
    moderate = 1.550,
    high = 1.725,
    veryHigh = 1.9,
}

export enum GenderENU {
    male = 0,
    female = 1,
}

export enum NumMealsENU {
    meals3 = 3,
    meals5 = 5,
}
