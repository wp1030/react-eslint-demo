/* eslint-disable */
module.exports = {
    "root": true,
    "env": {
        "browser": true,
        "es2021": true,
        "node": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "prefer-arrow"
    ],
    "settings": {
      "react": {
        "version": "detect"
      }
    },
    "rules": {
        "react/react-in-jsx-scope": "off",
        "indent": [
            "error",
            2
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ],
        "prefer-template": "error",
        "template-curly-spacing": [
            "error",
            "never"
        ],
        "comma-dangle": [
            "error",
            "always-multiline"
        ],
        "prefer-const": "error",
        "no-var": "error",
        "prefer-arrow/prefer-arrow-functions": [
            "error",
            {
              "disallowPrototype": true,
              "singleReturnOnly": true,
              "classPropertiesAllowed": false
            }
          ],
    }
}
