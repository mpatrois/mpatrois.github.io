# mood-web
git clone -b add-audio-engine git@github.com:mpatrois/tha-mood-web.git deps/tha-mood-web

cd deps/tha-mood-web
git pull
npm install
npm run build-only -- --base=/projects/mood
cd ../..
rm -rf projects/mood
cp -R deps/tha-mood-web/dist projects/mood

# mood-web v2
git clone -b review_fx_chain git@github.com:mpatrois/tha-mood.git deps/tha-mood

cd deps/tha-mood
git pull
git submodule update --init
cd mood_frontend
npm install
npm run build-web -- --base=/projects/mood-v2
cd ../../..
rm -rf projects/mood-v2
cp -R deps/tha-mood/mood_frontend/dist projects/mood-v2

# mood-web

git clone git@github.com:mpatrois/straight-outta-dungeon.git deps/straight-outta-dungeon
cd deps/straight-outta-dungeon
git pull
npm install
npm run build -- --base=/projects/straight-outta-dungeon
cd ../..
rm -rf projects/straight-outta-dungeon
cp -R deps/straight-outta-dungeon/dist projects/straight-outta-dungeon

# resume
cd resume
npm install
npm run build
cd ..
rm -rf assets
cp -r resume/dist/* .

http-server .