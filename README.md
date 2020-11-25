# practice-vanilla-javascript

## Goal

Test features and built-in functions in Javascript.

&nbsp;

### Memo

&nbsp;

#### Husky

If you use eslint with Husky like below, you should install eslint, eslint-cli in npm

```
npm -g i eslint-cli
npm install eslint --save-dev
npm eslint --init
```

package.json

```
"lint-staged": {
    "*.js": [
      "eslint . --fix",
      "prettier --write"
    ]
  },
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged"
    }
  }
```
