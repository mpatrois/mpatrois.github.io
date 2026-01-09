git clone -b main git@github.com:mpatrois/wasm-sequencer.git deps/mini-studio
cd ./deps/mini-studio/
git pull

npm install
npm run build -- --base=/projects/mini-studio
cd ../../
rm -rf projects/mini-studio
cp -R deps/mini-studio/dist projects/mini-studio

http-server .