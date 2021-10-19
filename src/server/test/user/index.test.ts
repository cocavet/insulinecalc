import { GenderENU, ActivityENU } from "../../contracts/user";
import User from "../../model/user";

describe('USER TEST', () => {
    const user = new User(1, GenderENU.female, 35, 182, 80, ActivityENU.sedentary);

    describe('New user', () => {
        test('User type', () => {
            expect(
                typeof user
            ).toBe('object');
        });
    })

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
            user.setWeight(84)
            expect(user.weight).toBe(84);
        });

        test('Set activity', () => {
            user.setActivity(ActivityENU.moderate)
            expect(user.activity).toBe(1.550);
        });
    });
});