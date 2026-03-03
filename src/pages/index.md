# Docusaurus First App

このサイトは、Docusaurusを触ってみた手順などを書いています。

## 起動方法

結論、この手順通りにターミナルを打っていけばOK
```bash title="ターミナル"
npx create-docusaurus@latest my-website classic --typescript
cd my-website
npm start
```

オプションなどは[公式サイト](https://docusaurus.io/docs/api/misc/create-docusaurus)をご覧ください。

`Ok to proceed ? (y)`と聞かれたら、y を押した後にEnter を押す。

下記のような表示がされたらOK。

```bash title="ターミナル"
[INFO] Inside that directory, you can run several commands:

`npm start`
    Starts the development server.

  `npm run build`
    Bundles your website into static files for production.

  `npm run serve`
    Serves the built website locally.

  `npm run deploy`
    Publishes the website to GitHub pages.

We recommend that you begin by typing:

`cd my-website`
  `npm start`

Happy building awesome websites!
```

この状態で`npm start`をターミナルで打つと、コンパイルされてサイトが開きます。

## ファイル構成等について

### フォルダ構成

まず基本的なサイト構成がこちら（[参考サイト](https://zenn.dev/sunwood_ai_labs/articles/pteranodon-docusaurus-gh-pages-starter-guide)）


```
docusaurus-gh-pages-starter/
├── .github/workflows/gh_actions_deploy.yml  # GitHub Actions設定
├── docs/          #ここにドキュメントを追加。URLは〜/docs/
├── blog/          # ブログ記事用フォルダ。URLは〜/blog/
├── static/img/    # 画像ファイル
├── src/           #  Reactコンポーネント
└── docusaurus.config.ts  # メイン設定ファイル
```

基本的にフォルダ名の変更は不可。ただし、URLでアクセスするときの単語はdocusaurus.config.tsに追記することで変更可能。

〜/news/のように、新しくURLでセクション追加したい場合は、プラグインとしてdocusaurus.config.tsに下記追記する必要がある。（デフォルトでプラグインが入っているので、別途インストールは不要）


```typescript title="docusaurus.config.ts"
  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'learn',
        path: 'learn',
        routeBasePath: 'learn',
        sidebarPath: false,// falseにするとサイドバーが表示されなくなる。変更するときは要再読み込み
      },
    ],
  ],
```

### ページ構成
トップページは`src/pages/index.tsx`。

docs/ 配下：mdドキュメント専用の場所。サイドバーやパンくずリストが自動生成される。

src/pages/配下：ヘッダーとフッターだけが自動生成され、一応.mdのファイルも置けるが、基本的に.tsxファイルを置く場所。

blog/配下：Markdownファイルを置くだけで自動で一覧ページが生成される。ファイル名は 2026-03-03 - 記事タイトル.md のように日付から始める命名規則になっています。

:::tip[ポイント]
React.jsやTypesciptにこだわりがないならば、トップページの`src/pages/index.tsx`を`src/pages/index.md`に置き換えると、マークダウンだけでトップページの記述が可能になります。
:::

## 機能について
### ReactとMarkDownを併用して利用できる
Docusaurusではデフォルトで.md ファイルもMDX（MarkdownにJSXが書けるようにしたもの）が使えので、Reactを書いてもサイトに反映される。

export const Highlight = ({ children, color }) => (
  <span
    style={{
      backgroundColor: color,
      borderRadius: '20px',
      color: '#fff',
      padding: '10px',
      cursor: 'pointer',
    }}
    onClick={() => {
      alert(`You clicked the color ${color} with label ${children}`)
    }}>
    {children}
  </span>
);

例：
This is <Highlight color="#25c2a0">Docusaurus green</Highlight>!
This is <Highlight color="#1877F2">Facebook blue</Highlight>!

:::danger[注意]

エラーがすごく分かりにくく、どこの行でエラーがあるか表示されないことがしばしば。

普通にReact勉強するなら、Create React AppかViteで素のプロジェクトを作ることをおすすめする。

:::


### バージョン機能・翻訳機能もあるよ。
バージョン機能は
```bash title="ターミナル"
npm run docusaurus docs:version 1.0
```
を実行することでバージョンを登録できる。
docusaurus.config.tsに下記追記することで、バージョン戻れる機能がヘッダーに登録される。

```typescript title="docusaurus.config.ts"
export default {
  themeConfig: {
    navbar: {
      items: [
        {
          type: 'docsVersionDropdown',
        },
      ],
    },
  },
};
```
を指定するとバージョンが表示される。

:::danger[注意]

バージョン管理はデフォルトの docs/ 配下のみが対象です。

:::

他にも翻訳ページも作れるらしい。詳しくはチュートリアルの「Translate your site」に記載。

## GitHub Pages での公開方法

GitHub Pages で公開してみたので、その公開方法も併せて記載。

結論、メインブランチでコミット＆プッシュをした後に
```bash title="ターミナル"
GH_TOKEN = あなたのトークン GIT_USER = ayaoriko npm run deploy
```
を打つことで、サイトに反映される。

仕組みとしては、自動で作られたgh-pages ブランチにコンパイルされたファイルがコミットされるとのこと。

### 初期設定
GitHub Pages での公開するには初期設定が必要。

GitHub Actionを使う方法もあるが、今回は使わない方法で進める。

まず、docusaurus.config.tsを自分のものに置き換える

```typescript title="docusaurus.config.ts"
  // 自分のURLに変更する
  url: 'https://ayaoriko.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // リポジトリ名を / で囲む
  baseUrl: '/docusaurus-first-app/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'ayaoriko',// GitHubのID
  projectName: 'docusaurus-first-app', // リポジトリ名
```

そして、コミットとプッシュし、下記を実行することでデプロイされる。
```bash title="ターミナル"
GH_TOKEN = あなたのトークン GIT_USER = ayaoriko npm run deploy
```

次に、GitHubに移動して、各リポジトリのSettings＞（サイドメニューの）Pagesに移動。

Branchにgh-pagesブランチを指定することで表示される。

ごく稀にgh-pages ブランチが自動で作られない場合があるから、その時は自分で作る必要がある。

### トークンを覚えずに済む方法
もし、トークンなんて随時覚えられないよって場合、.envファイルに記述を逃すことも可能。

まずは.env.localファイルで定義。

```bash title=".env.local"
GH_TOKEN=ghp_xxxxxxxxxxxxxxxxx
GIT_USER=ayaoriko
```

package.jsonのdeploy箇所を下記に変更するだけで、デプロイと同時に実行される。

```json title="package.json"
"deploy": "export $(grep -v '^#' .env.local | xargs) && docusaurus deploy",
```

こうすることで`npm run deploy`を指定しただけで、デプロイ＆GitHub Pages への反映完了。