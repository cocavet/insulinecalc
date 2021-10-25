import User from '../../model/user';
import { INutritional } from '../nutritional';

export interface IMeal {
    user: User;
    nutritional: INutritional;

    getMeal(queryRecipe: string, mealType: string): Promise<IOneMeal>;
    getDistributionMeal(mealType: string): number;
}

export interface IOneMeal {
    Name: string;
    Kcal: number;
    Proteins: number;
    Fats: number;
    CHO: number;
}

export enum MealTypeENU {
    Breakfast = 'Breakfast',
    Snack  = 'Snack',
    Lunch = 'Lunch',
    Dinner = 'Dinner',
}

export enum Dist5MealsENU {
    Breakfast = 20,
    Snack = 10,
    Lunch = 30,
    Dinner = 30,
}

export enum Dist3MealsENU {
    Breakfast = 25,
    Lunch = 45,
    Dinner = 30,
}
