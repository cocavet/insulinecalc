export interface IUser {
    id: number;
    gender: GenderENU;
    age: number;
    height: number;
    weight: number;
    activity: ActivityENU;
    numMeals: NumMealsENU;

    setActivity(activity: ActivityENU): void;
    setWeight(weight: number): void;
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
