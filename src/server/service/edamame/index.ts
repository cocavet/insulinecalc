import axios from 'axios';
import _ from 'lodash';
import { IOneMeal } from '../../contracts/meal';
import { EDAMAM_BASE_URL } from '../../router';

const DISTRIBUTION_RANGE = 150;

export async function getEDAMAMRecipeSE(
    queryRecipe: string, distribution: number, mealType: string): Promise<IOneMeal> {
        const distributionRange = `${distribution - DISTRIBUTION_RANGE}-${distribution + DISTRIBUTION_RANGE}`;
        const meal = await axios.get(
        EDAMAM_BASE_URL(
            queryRecipe,
            distributionRange,
            mealType),
            {}
        );

        const randomMeal = meal?.data?.['hits']?.[_.random(meal.data['hits'].length)] ?? null;

        return randomMeal
        ? {
            Name: randomMeal.recipe.label,
            Kcal: randomMeal.recipe.calories / randomMeal.recipe.yield,
            Proteins: randomMeal.recipe.totalNutrients.PROCNT.quantity / randomMeal.recipe.yield,
            Fats: randomMeal.recipe.totalNutrients.FAT.quantity / randomMeal.recipe.yield,
            CHO: randomMeal.recipe.totalNutrients.CHOCDF.quantity / randomMeal.recipe.yield,
            totalWeight: randomMeal.recipe.totalWeight / randomMeal.recipe.yield,
        }
        : null;
}
