# mood-web

git clone -b add-audio-engine git@github.com:mpatrois/tha-mood-web.git deps/tha-mood-web

cd deps/tha-mood-web
git pull
npm install
npm run build-only -- --base=/projects/mood
cd ../..
rm -rf projects/mood
cp -R deps/tha-mood-web/dist projects/mood

# mood-web

git clone git@github.com:mpatrois/straight-outta-dungeon.git deps/straight-outta-dungeon
cd deps/straight-outta-dungeon
git pull
npm install
npm run build -- --base=/projects/straight-outta-dungeon
cd ../..
rm -rf projects/straight-outta-dungeon
cp -R deps/straight-outta-dungeon/dist projects/straight-outta-dungeon