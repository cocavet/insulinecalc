echo Installing Tensorflow...
npm i @tensorflow/tfjs-node@latest --ignore-scripts
npm i node-pre-gyp
mkdir node_modules/@tensorflow/tfjs-node/deps
cd node_modules/@tensorflow/tfjs-node/deps
curl -LO 'https://github.com/vodianyk/libtensorflow-cpu-darwin-arm64/raw/main/libtensorflow-cpu-darwin-arm64-2.8.0.tar.gz'
tar xvf *.tar.gz
rm *.tar.gz
cd ..
npx node-pre-gyp rebuild
cd ../../..
echo Installing other dependencies...
npm i
echo Running sever
npm start
echo Done ✅✅✅