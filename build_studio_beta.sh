git clone -b beta git@github.com:mpatrois/wasm-sequencer.git deps/mini-studio-beta
cd ./deps/mini-studio-beta/
git pull

npm install
npm run build -- --base=/projects/mini-studio-beta
cd ../../
rm -rf projects/mini-studio-beta
cp -R deps/mini-studio-beta/dist projects/mini-studio-beta

http-server .