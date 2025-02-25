git clone -b add-audio-engine git@github.com:mpatrois/tha-mood-web.git deps/tha-mood-web

cd deps/tha-mood-web
npm install
npm run build -- --base=/projects/mood
cd ../..
mv deps/tha-mood-web/dist projects/mood