# Docusaurus First App
このサイトは、Docusaurusを触ってみた手順などを書いています。

下記ページにて構築サイトを公開しています。
https://ayaoriko.github.io/docusaurus-first-app/
※2026年3月3日時点のURLです。

下記ブログで感想を書いています。
https://ayaoriko.com/coding/docusaurus/
※2026年3月3日時点では制作中

本来README.mdに書くべき内容は、サイトトップページ（src/pages/index.md）に書いています。

---
頻繁に使うコマンド

ローカルサイト起動

```bash title="ターミナル"
npm start
```

バージョン機能

```bash title="ターミナル"
npm run docusaurus docs:version 1.0
```

サイト公開

```bash title="ターミナル"
npm run deploy
```

---

デフォルトのREADME.md


# Website

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

## Installation

```bash
yarn
```

## Local Development

```bash
yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Build

```bash
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Deployment

Using SSH:

```bash
USE_SSH=true yarn deploy
```

Not using SSH:

```bash
GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
