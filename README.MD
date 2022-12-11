# Nextjs Boilerplate

Nextjs Boilerplate is a template that comes with the necessary preconfiguration for a profesional react project.

## What technologies does this project use?
|[<img width=190 src=https://cdn.rawgit.com/standard/standard/master/docs/logos/nodejs.png>](https://nodejs.org)|[<img width=190 src=https://cdn.rawgit.com/standard/standard/master/docs/logos/npm.png>](https://www.npmjs.com)|[<img width=190 src=https://user-images.githubusercontent.com/106139113/204472746-9231d0ff-40db-49a6-bf3b-f759ff206231.svg>](https://nextjs.org/)|[<img width=190 src=https://user-images.githubusercontent.com/106139113/204473760-13746fa1-c52e-4fda-ab41-ff3f8ec3e9db.svg>](https://reactjs.org/)
|---|---|---|---|

## How was this project created?

### 1. Add Git
```bash
git init
npx cli-gitignore
SELECT node
npm i -g gitmoji-cli
```

### 2. Initialize the proyect:
```bash
npm init -y
git add .
gitmoji -c
```

### 3. [Create README.MD](https://www.makeareadme.com/)
```bash
echo ""> README.MD
```

### 4. Add Next and React
```bash
yarn add next react react-dom
```
run these commands to add in scripts of package.json
```bash
npm pkg set scripts.dev="next"
npm pkg set scripts.build="next build"
npm pkg set scripts.start="next start"
```
create file index.tsx and create a first component to test that everything is OK
```bash
touch index.tsx && mkdir pages && mv index.tsx $_
```
