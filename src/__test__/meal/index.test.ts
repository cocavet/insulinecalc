import { MealTypeENU } from '../../server/contracts/meal';
import { ActivityENU, GenderENU } from '../../server/contracts/user';
import { newMeal, newUser } from '../../server/factory';

describe('MEAL TEST', () => {
    const user = newUser(
        {
            id: 1,
            gender: GenderENU.female,
            age: 35,
            height: 182,
            weight: 80,
            activity: ActivityENU.sedentary,
            numMeals: 3,
            sport: 120,
            stress: 65,
        }
    );
    const meal = newMeal(user);

    describe('New Meal', () => {
        test('Meal type', () => {
            expect(
                typeof meal
            ).toBe('object');
        });
    });

    describe('Getters', () => {
        test('Get Meal', async () => {
            const getMeal = await meal.getMeal('', MealTypeENU.Breakfast);

            expect(getMeal).toHaveProperty('Name');
            expect(getMeal).toHaveProperty('Kcal');
            expect(getMeal).toHaveProperty('Proteins');
            expect(getMeal).toHaveProperty('Fats');
            expect(getMeal).toHaveProperty('CHO');
            expect(getMeal).toHaveProperty('totalWeight');
        });
    });
});



