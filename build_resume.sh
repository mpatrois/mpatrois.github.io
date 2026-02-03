cd resume
npm install
npm run build
cd ..
rm -rf assets
cp -r resume/dist/* .