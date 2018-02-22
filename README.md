## Instalación

```bash
yarn add --dev eslint @zerointermittency/eslint-config-zi
# npm i --save-dev eslint @zerointermittency/eslint-config-zi
```

## Utilización

Crear el archivo `.eslintrc.js` y cambiar el valor de `extends` a `@zerointermittency/zi`

Ej:

```
'use strict';

module.exports = {
    env: {es6: true, node: true, mocha: true},
    extends: '@zerointermittency/zi',
    parserOptions: {sourceType: 'module'},
    rules: {}
};
```