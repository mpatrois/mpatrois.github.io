git clone -b add-audio-engine git@github.com:mpatrois/tha-mood-web.git deps/tha-mood-web

cd deps/tha-mood-web
git pull
npm install
npm run build-only -- --base=/projects/mood
cd ../..
rm -rf projects/mood
cp -R deps/tha-mood-web/dist projects/mood