import _ from 'lodash';
import { IMacronutrients, INutritional } from '../../contracts/nutritional';

const KCAL_TO_GR = 0.129598;

export function calcDailyNutritional(params): INutritional {
    const dailyKcal = getDailyKcal(params);
    const macronutrients = calcRandomMacronutrients(dailyKcal);

    return {
        Kcal: dailyKcal,
        Proteins: (macronutrients.Proteins * KCAL_TO_GR),
        Fats: (macronutrients.Fats) * KCAL_TO_GR,
        CHO: macronutrients.CHO * KCAL_TO_GR,
    };
}

function getDailyKcal(params): number {
    const { gender, age, height, weight, activity } = params;

    return gender
        ? ((10 * weight) + (6.25 * height) - (5 * age) - 161) * activity
        : ((10 * weight) + (6.25 * height) - (5 * age) + 5) * activity;
}

function calcRandomMacronutrients(dailyKcal): IMacronutrients {
    const proteins = getDailyProteins(dailyKcal);
    const CHO = getDailyCHO(dailyKcal);
    const fats = getDailyFats(dailyKcal, proteins + CHO);

    return {
        Proteins: proteins,
        Fats: fats,
        CHO,
    };
}

function getDailyProteins(dailyKcal: number): number {
    return (dailyKcal * _.random(45, 65)) / 100;
}

function getDailyCHO(dailyKcal: number): number {
    return (dailyKcal * _.random(10, 35)) / 100;
}

function getDailyFats(dailyKcal: number, proteinsAndCHO: number): number {
    return dailyKcal - proteinsAndCHO;
}
