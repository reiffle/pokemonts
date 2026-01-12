# pokemonTS
Pokedex Project written in Typescript
Node version 22.15.0

SETUP
* npm install
* .npmrc
  22.15.0
* npm init -y
* npm install -D typescript @types/node
* tsconfig.json
  {
  "compilerOptions": {
    "baseUrl": ".",
    "target": "esnext",
    "module": "esnext",
    "rootDir": "./src",
    "outDir": "./dist",
    "strict": true,
    "moduleResolution": "Node",
    "esModuleInterop": true,
    "skipLibCheck": true
    },
  "include": ["./src/**/*.ts"],
  "exclude": ["node_modules"]
  }
* edit package.json
  {
    ...
    "type": "module",
    "scripts": {
      "build": "npx tsc",
      "start": "node dist/main.js",
      "dev": "npx tsc && node dist/main.js"
    },
  ...
  }
