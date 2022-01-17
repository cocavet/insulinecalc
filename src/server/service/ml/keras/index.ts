import * as tf from '@tensorflow/tfjs-node';
import _ from 'lodash';
import { IPrepareData } from '../../../contracts/predict';
import { plotData } from '../../../utils/common';

export async function trainingModel(simulatedMeals: any[], insulineDoses: any[], userId: string) {
    try {
        const model = tf.sequential();
        const optimizer = tf.train.adam(0.05);
        const mapedMeals = simulatedMeals.map((el, index) => _.concat(...el, insulineDoses[index]));
        const shuffleMeals = _.shuffle(mapedMeals);

        const {train, test} =
            prepareData(shuffleMeals);

        const trainMeal = train.map((el) => el.meal);
        const trainInsuline = train.map((el) => el.insuline);
        const testMeal = test.map((el) => el.meal);
        const testInsuline = test.map((el) => el.insuline);

        model.add(tf.layers.dense({ units: 1, inputShape: [14] }));
        model.compile(
            {
                optimizer,
                loss: 'meanSquaredError',
            }
        );


        const xs = tf.tensor2d(trainMeal, [trainMeal.length, 14]);
        const ys = tf.tensor2d(trainInsuline, [trainInsuline.length, 1]);
        const xsTest = tf.tensor2d(testMeal, [testMeal.length, 14]);
        const ysTest = tf.tensor2d(testInsuline, [testInsuline.length, 1]);

        const history = await model.fit(xs, ys, { epochs: 1500 });

        const evaluate = Number((await (model.evaluate(xsTest, ysTest) as tf.Tensor).data()).toString());

        plotData(history.epoch, history.history.loss as number[]);
        plotData([evaluate], [evaluate]);



        await model.save(`file://./src/data/${userId}`);

        return true;
    } catch (error) {
        return false;
    }
}

export async function doPredict(simulatedMeals: any[], userId: string) {
    try {
        const model = await tf.loadLayersModel(`file://./src/data/${userId}/model.json`);

        return Number((await (model.predict(tf.tensor2d([simulatedMeals]
        )) as tf.Tensor).data()).toString());
    } catch (error) {
        return false;
    }

}

function prepareData(shuffleMeals: any[]): IPrepareData {
    let arrayShuffled = [...shuffleMeals];
    const chunckedTrain = spliceXcentArray(arrayShuffled, 0, arrayShuffled.length * 0.8);

    arrayShuffled = [...shuffleMeals];

    const chunckedTest = spliceXcentArray(arrayShuffled, arrayShuffled.length * 0.8, shuffleMeals.length);

    return {
        train: chunckedTrain.map((el) => {
            return{
                meal: el.slice(0, -1),
                insuline: [el[el.length - 1]],
            };
        }),
        test: chunckedTest.map((el) => {
            return{
                insuline: [el[el.length - 1]],
                meal: el.slice(0, -1),
            };
        }),
    };
}

function spliceXcentArray(array: any[], begin: number, n: number) {
    return Object.assign([], array.splice(Math.round(begin), Math.round(array.length * n)));
}

