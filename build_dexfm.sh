git clone git@github.com:mpatrois/dex-fm.git deps/dex-fm
cd deps/dex-fm
git checkout main
git pull
git submodule update --init
cd ui
npm install
npm run build-web -- --base=/projects/dex-fm
cd ../../..
rm -rf projects/dex-fm
cp -R deps/dex-fm/ui/dist projects/dex-fm