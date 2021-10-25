import { ActivityENU, GenderENU } from '../../contracts/user';
import {newPlan, newUser } from '../../factory';

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
        }
    );

    const plan =  newPlan(user, 7);

    describe('New Plan', () => {
        test('Plan type', () => {
            expect(
                typeof plan
            ).toBe('object');
        });
    });

    describe('Getters', () => {
        test('Get Plan', async () => {
            const getPlan = await plan.getPlan();
            expect(
                getPlan.length
            ).toBe(3);
        });
    });
});



