export const EDAMAM_BASE_URL =
    // tslint:disable-next-line: max-line-length
    (query: string, kcal: number | string, mealType: string) => `https://api.edamam.com/api/recipes/v2?type=public&random=true&app_id=edddf518&app_key=ced2139c701fa9e4e3a4c3958063d76a&q=${query}&calories=${kcal}&diet=balanced&cuisineType=Mediterranean&mealType=${mealType}`;

export const GET_USER = '/get/user';
export const GET_PLAN = '/get/plan/:days';
export const GET_MEAL = '/get/meal/:query/:mealType';
export const GET_PREDICTION = '/get/prediction';
