import * as tf from '@tensorflow/tfjs-node';
import fs from 'fs';
import path from 'path';
import { plotData } from '../../../utils/common';

export async function trainingModel(simulatedMeals: any[], insulineDoses: any[], userId: string) {
    try {
        // Build and compile model.
        const model = tf.sequential();
        const optimizer = tf.train.adam(0.1);

        model.add(tf.layers.dense({ units: 1, inputShape: [14] }));
        model.compile(
            {
                optimizer,
                loss: 'meanSquaredError',
            }
        );


        // Generate some synthetic data for training.

        console.log(simulatedMeals);
        console.log(insulineDoses);

        const xs = tf.tensor2d(simulatedMeals, [simulatedMeals.length, 14]);
        const ys = tf.tensor2d(insulineDoses, [insulineDoses.length, 1]);


        // Train model with fit().
        const history = await model.fit(xs, ys, { epochs: 1500 });

        plotData(history.epoch, history.history.loss as number[]);

        await model.save(`file://./src/data/${userId}`);
        // Run inference with predict();
        return model;
    } catch (error) {
        console.log(error);
    }
}

export async function doPredict(simulatedMeals: any[], userId: string) {

    console.log(simulatedMeals);

    try {
        const model = await tf.loadLayersModel(`file://./src/data/${userId}/model.json`);

        return (await (model.predict(tf.tensor2d([simulatedMeals]
        )) as tf.Tensor).data()).toString();
    } catch (error) {
        console.log(error);
    }
}
