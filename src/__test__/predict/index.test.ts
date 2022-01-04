import { newPredict } from '../../server/factory';

describe('PREDICT TEST', () => {
    const predict = newPredict(
        [
                    1, 36,
                182, 84,
                1.2, 3,
                120, 85,
                250,  447.6259988760093,
        15.76362695994036, 20.196729748216633,
        51.926736510435894,  178.1607996353831,
        ],
        'kxzyxt2nkxzyxt2okxzyxt2pkxzyxt2q');


    describe('New Predict', () => {
        test('Predict type', () => {
            expect(
                typeof predict
            ).toBe('object');
        });
    });

    describe('Getters', () => {
        test('Get prediction', async () => {
            const prediction = await predict.getPredict();
            expect(prediction).toBeGreaterThanOrEqual(8);
            expect(prediction).toBeLessThan(11);
        });
    });
});
