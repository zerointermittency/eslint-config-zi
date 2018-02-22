'use strict';

module.exports = {
    rules: {
        'indent': ['error', 4],
        'no-cond-assign': 0,
        'no-irregular-whitespace': 'error',
        'no-unexpected-multiline': 'error',
        'curly': ['error', 'multi'],
        'guard-for-in': 'error',
        'no-caller': 'error',
        'no-extend-native': 'error',
        'no-extra-bind': 'error',
        'no-invalid-this': 'error',
        'no-multi-spaces': 'error',
        'no-multi-str': 'error',
        'no-new-wrappers': 'error',
        'no-throw-literal': 'error',
        'no-with': 'error',
        'no-unused-vars': ['error', {args: 'none'}],
        'array-bracket-newline': 0,
        'array-bracket-spacing': ['error', 'never'],
        'array-element-newline': 0,
        'block-spacing': ['error', 'never'],
        'brace-style': 'error',
        'camelcase': ['error', {properties: 'never'}],
        'comma-dangle': ['error', 'always-multiline'],
        'comma-spacing': 'error',
        'comma-style': 'error',
        'computed-property-spacing': 'error',
        'eol-last': 'error',
        'func-call-spacing': 'error',
        'key-spacing': 'error',
        'keyword-spacing': ['error', {
            'before': true,
            'after': true
        }],
        'linebreak-style': ['error', 'unix'],
        'max-len': ['error', {
            code: 100,
            tabWidth: 4,
        }],
        'no-array-constructor': 'error',
        'no-mixed-spaces-and-tabs': 'error',
        'no-multiple-empty-lines': ['error', {max: 2}],
        'no-new-object': 'error',
        'no-tabs': 'error',
        'no-trailing-spaces': 'error',
        'object-curly-spacing': 'error',
        'padded-blocks': ['error', 'never'],
        'quote-props': ['error', 'consistent'],
        'quotes': ['error', 'single', {allowTemplateLiterals: true}],
        'semi': ['error', 'always'],
        'semi-spacing': 'error',
        'space-before-blocks': 'error',
        'space-before-function-paren': ['error', {
            asyncArrow: 'never',
            anonymous: 'never',
            named: 'never',
        }],
        'spaced-comment': ['error', 'always'],
        'switch-colon-spacing': 'error',
        'arrow-parens': ['error', 'always'],
        'constructor-super': 'error',
        'generator-star-spacing': ['error', 'after'],
        'no-new-symbol': 'error',
        'no-this-before-super': 'error',
        'no-var': 'error',
        'prefer-rest-params': 'error',
        'prefer-spread': 'error',
        'rest-spread-spacing': 'error',
        'yield-star-spacing': ['error', 'after'],
    }
};