import * as tf from '@tensorflow/tfjs-node';
import { plotData } from '../../../utils/common';

export async function doPredict() {
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
    const xs = tf.tensor1d([-40, -10, 8, 15, 22, 38]);
    const ys = tf.tensor1d([-40, 14, 46, 59, 72, 100]);

    // Train model with fit().
    const history = await model.fit(xs, ys, { epochs: 2000 });

    plotData(history.epoch, history.history.loss as number[]);

    // Run inference with predict().
    return await (await (model.predict(tf.tensor1d([100.0])) as tf.Tensor).data()).toString();
}
