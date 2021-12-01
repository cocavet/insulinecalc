const path = require('path');
const PATH_VIEWS = './src/client/pages/';
const PATH_ASSETS = './public/assets/';

module.exports = {
    entry: {
        bundle: `${PATH_VIEWS}user/index.ts`
    },
    output: {
        path: path.resolve(__dirname, PATH_ASSETS),
        filename: 'js/[name].js'
    },
    resolve: {
        extensions: ['.ts', '.js']
    }
};