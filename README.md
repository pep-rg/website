# PEP-RG.JP 公式サイト

立命館大学「プロジェクト発信型英語プログラム（PEP）」の公式サイトです。[Astro](https://astro.build/) で構築し、Vercel で公開しています。

## ページの編集

ほとんどのページは Markdown ファイルです。文章を直すだけなら該当ファイルを編集して main にプッシュすれば、自動で公開されます（プルリクエストを作ると、Vercel がプレビューURLを発行します）。

| ページ | 日本語 | 英語 |
|---|---|---|
| トップ（お知らせ含む） | `src/pages/index.astro` | `src/pages/en/index.astro` |
| PEPについて | `src/pages/about/index.md` | `src/pages/en/about/index.md` |
| 理念と歴史 | `src/pages/about/history/index.md` | `src/pages/en/about/history/index.md` |
| カリキュラム | `src/pages/about/curriculum/index.md` | `src/pages/en/about/curriculum/index.md` |
| 成果 | `src/pages/about/achievements/index.md` | `src/pages/en/about/achievements/index.md` |
| 研究活動 | `src/pages/research/index.astro` | `src/pages/en/research/index.astro` |
| 業績リスト（日英共通） | `src/content/publications.md`, `src/content/presentations.md` | 同左 |
| メンバー | `src/pages/members/index.md` | `src/pages/en/members/index.md` |
| 関連サイト | `src/pages/links/index.md` | `src/pages/en/links/index.md` |
| お問い合わせ・アクセス | `src/pages/contact/index.md` | `src/pages/en/contact/index.md` |

- お知らせは `src/pages/index.astro`（英語は `src/pages/en/index.astro`）の `news` 配列の先頭に追加します。
- メニュー項目やフッターは `src/i18n.ts` にあります。
- 画像は `public/images/` に置き、Markdown から `/images/ファイル名` で参照します。
- 旧WordPressサイトのURLからのリダイレクトは `vercel.json` で設定しています。

## ローカルで確認する

```sh
npm install
npm run dev     # http://localhost:4321 でプレビュー
npm run build   # dist/ に静的サイトを出力
```

## 注意

- このリポジトリは公開（Public）です。個人のメールアドレスや内部資料、WordPressのエクスポートXMLなどはコミットしないでください。
