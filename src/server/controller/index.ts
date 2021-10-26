import MealCO from './meal';
import PlanCO from './plan';
import UserCO from './user';

export function initControllers(app: any) {
    new UserCO(app).init();
    new MealCO(app).init();
    new PlanCO(app).init();
}
