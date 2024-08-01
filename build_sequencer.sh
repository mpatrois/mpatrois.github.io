git clone -b main  git@github.com:mpatrois/wasm-sequencer.git deps/sequencer
cd ./deps/sequencer/
git pull

npm install
npm run build -- --base=/projects/sequencer
cd ../../
rm -rf projects/sequencer
cp -R deps/sequencer/dist projects/sequencer

http-server .