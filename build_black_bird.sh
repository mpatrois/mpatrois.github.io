git clone -b feature/song-demo  git@github.com:mpatrois/blackbird.git deps/blackbird
cd ./deps/blackbird/
git pull

npm install
npm run build -- --base=/projects/blackbird
cd ../../
rm -rf projects/blackbird
cp -R deps/blackbird/dist projects/blackbird

http-server .