# List of commands used to build the app 

npm init

npm install esbuild react react-dom @types/react @types/react-dom

mkdir www
mkdir www/js

- **create-file** app.tsx
- **create-file** www/index.html 

## start it up 

npx esbuild app.tsx --bundle --servedir=www/  --outdir=www/js --serve



## build it 

- **added into package.json** under scripts:  "build": "esbuild app.tsx --bundle --minify --outdir=www/js"

npm run build 

## Improve it by 

mkdir 
mv app.tsx src/app.tsx

npx esbuild src/app.tsx --bundle --servedir=www/  --outdir=www/js --serve

- **added into package.json** under scripts:  
  "build": "esbuild src/app.tsx --bundle --minify --outdir=www/js",
  "dev": "esbuild src/app.tsx --bundle --minify --outdir=www/js --servedir=www/ --serve"

## Added Profile.jsx

remember to import React at the beginning at every Profile.jsx 

import React from 'react';


## reminder - to return to last git state

git reset --hard HEAD
git clean -fxd

