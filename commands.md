# List of commands used to build the app 

npm init

npm install esbuild react react-dom @types/react @types/react-dom

mkdir www
mkdir www/js

- **create-file** app.tsx
- **create-file** www/index.html 

## start it up 

npx esbuild app.tsx --bundle --servedir=www/  --outdir=www/js --serve