import * as tf from '@tensorflow/tfjs-node';
import { plotData } from '../../../utils/common';

export async function trainingModel(simulatedMeals: any[], insulineDoses: any[]) {
    // Build and compile model.
    const model = tf.sequential();
    const optimizer = tf.train.adam(0.1);

    model.add(tf.layers.dense({ units: 1, inputShape: [1] }));
    model.compile(
        {
            optimizer,
            loss: 'meanSquaredError',
        }
    );

    // Generate some synthetic data for training.
    const xs = tf.tensor2d(simulatedMeals);
    const ys = tf.tensor2d(insulineDoses);

    // Train model with fit().
    const history = await model.fit(xs, ys, { epochs: 2000 });

    plotData(history.epoch, history.history.loss as number[]);

    // Run inference with predict().
    return model;
}

export async function doPredict(model: any) {
    return await (await (model.predict(tf.tensor2d([526.5727577062295, 18.2239482050927,
        16.56753680915607, 75.80509719962035, 257.76313418996716])) as tf.Tensor).data()).toString();
}
