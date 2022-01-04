import * as tf from '@tensorflow/tfjs-node';
import { plotData } from '../../../utils/common';

export async function trainingModel(simulatedMeals: any[], insulineDoses: any[], userId: string) {
    try {
        const model = tf.sequential();
        const optimizer = tf.train.adam(0.1);

        model.add(tf.layers.dense({ units: 1, inputShape: [14] }));
        model.compile(
            {
                optimizer,
                loss: 'meanSquaredError',
            }
        );

        const xs = tf.tensor2d(simulatedMeals, [simulatedMeals.length, 14]);
        const ys = tf.tensor2d(insulineDoses, [insulineDoses.length, 1]);

        const history = await model.fit(xs, ys, { epochs: 1500 });

        plotData(history.epoch, history.history.loss as number[]);

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
