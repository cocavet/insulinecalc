import { ActivityENU, GenderENU } from '../../contracts/user';
import { newPredict, newUser } from '../../factory';

describe('PREDICT TEST', () => {
    const predict = newPredict([1, 2, 3]);

    describe('New Predict', () => {
        test('Predict type', () => {
            expect(
                typeof predict
            ).toBe('object');
        });
    });

    describe('Getters', () => {
        test('Get prediction', () => {
            console.log(predict.getPredict());
        });
    });
});
