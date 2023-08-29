module.exports = {
  "$schema": "https://json.schemastore.org/eslintrc",

  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  plugins: [
    "tailwindcss",
    '@typescript-eslint/eslint-plugin'
  ],
  extends: [
    "prettier",
    "plugin:@angular-eslint/recommended",
    'plugin:@typescript-eslint/recommended',
    "plugin:tailwindcss/recommended",
    'plugin:prettier/recommended',
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js', 'index.html'],
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    "tailwindcss/no-custom-classname": "off",
    "tailwindcss/classnames-order": "error",
    "max-len": [
      "error",
      {
        "code": 120,
        "ignoreStrings": true,
        "ignoreTemplateLiterals": true,
        "ignoreComments": true
      }
    ]
  },


  "settings": {
    "tailwindcss": {
      "callees": [
        "cn"
      ],
      "config": "tailwind.config.js"
    },
    "next": {
      "rootDir": true
    }
  },
  "overrides": [
    {
      "files": [
        "*.ts",
        "*.tsx"
      ],
      "parser": "@typescript-eslint/parser"
    },
    {
      files: ["*.component.html"],
      parser: "@angular-eslint/template-parser",
      rules: {
        "@typescript-eslint/dot-notation": "off",
        "@typescript-eslint/no-implied-eval": "off",
        "@typescript-eslint/no-throw-literal": "off",
        "strict": "off",
        "import/first": "off",
        "lines-around-directive": "off",
        "max-len": "off",
      },
      plugins: ["@angular-eslint/template"],
    },
  ]
}
