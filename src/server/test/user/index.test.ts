import { ActivityENU, GenderENU } from '../../contracts/user';
import { newUser } from '../../factory';
import User from '../../model/user';

describe('USER TEST', () => {
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

    describe('New user', () => {
        test('User type', () => {
            expect(
                typeof user
            ).toBe('object');
        });
    });

    describe('Getters', () => {
        test('Get gender', () => {
            expect(user.gender).toBe(1);
        });

        test('Get age', () => {
            expect(user.age).toBe(35);
        });

        test('Get height', () => {
            expect(user.height).toBe(182);
        });

        test('Get weight', () => {
            expect(user.weight).toBe(80);
        });

        test('Get activity', () => {
            expect(user.activity).toBe(1.2);
        });
    });

    describe('Setters', () => {
        test('Set weight', () => {
            user.setWeight(84);
            expect(user.weight).toBe(84);
        });

        test('Set activity', () => {
            user.setActivity(ActivityENU.moderate);
            expect(user.activity).toBe(1.550);
        });
    });
});
