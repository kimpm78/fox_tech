# デジタル商品のレビューブログ

パソコンに関しているものを紹介する目標でプロジェクトを始めました。

# Fox_tech

このプロジェクトはパソコンに関している商品を紹介するブログになります。
ローカル上に実行ができるように実装を想定して進んでいます。

## 起動

- https://kimpm78.github.io/fox_tech/

## logIn（ローカル）

- ID: dev01@gmail.com
- PASSWORD: 123456

## 技術

### 言語 / フレームワーク

- JavaScript
- typeScript @5.2.2
- react @18.2.0
- bootstrap @5.3.3
- react-bootstrap @2.10.2
- sass @1.72.0

### ライブラリ

- eslint @8.57.0
- jQuery
- react-router-dom @6.22.3
- react-scroll @1.9.0
- react-icons
- prettier @3.2.5
- Popper.js

### 開発環境

- vite @5.2.2

### 本番環境

- GitHub Pages

### バージョン管理

- GitHub

### 進捗管理

- google spread sheet

### 画面設計

- Figma

## 参考サイト

1. 環境構築

- [vite](https://ja.vitejs.dev/guide/)

- [bootstrap 5](https://getbootstrap.jp/docs/5.3/getting-started/introduction/)

- [React Bootstrap](https://react-bootstrap.netlify.app/docs/components/accordion)

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## 実行コマンド

### Bun run dev

- 開発サーバーをカレントディレクトリーで起動する。

### Bun run build

- プロダクション用にビルドする。

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
};
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

現在はREADMEの内容は準備はしておりません。
