<img width="1440" alt="スクリーンショット 2024-10-25 19 08 15" src="https://github.com/user-attachments/assets/93e1c5ff-245a-414e-90f0-b469c7a00161" />

# 書籍管理アプリ

## 概要

このプロジェクトでは、Trello 風の書籍管理アプリを構築します。
本を「欲しい本」「購入した本」「読み終えた本」の 3 つのステータスで管理し、
ドラッグ&ドロップで本の状態を更新できます。

## 学習目標

TanStack Query（React Query）を使用した、サーバーデータの管理について学習します。

API との通信、データのキャッシュ管理、楽観的更新などの実装を確認してください。

### 推奨技術

このプロジェクトの難易度と趣旨を踏まえて、以下の使用をお勧めします。

- vite を用いた React 環境構築
- TypeScript による型チェック
- TanStack Query を用いたサーバーの状態管理
- JSON Server を用いたモック API
- Drag and Drop API の活用

---

## 🎯 お題

- 「ユーザーストーリー」を全て満たすアプリを構築してください。
- 必要に応じて、スクリーンショットやデモサイトの URL を参照してください。
- スタイルは、あなた自身で独自にカスタマイズすることが可能です。

### 必須機能

1. **本の一覧表示**：
   - ステータス（欲しい本、購入した本、読み終えた本）ごとに本を表示する
2. **本の追加**：
   - タイトルと著者を入力して、新しい本を追加する
3. **本のステータス管理**：
   - ドラッグ&ドロップで本のステータスを更新する
4. **本の削除**：
   - 不要な本を一覧から削除する

## ユーザーストーリー

- [ ] ユーザーがサイトにアクセスすると、3 列のボードレイアウト（欲しい本、購入した本、読み終えた本）が表示されている
- [ ] タイトルと著者名を入力して、新しい本を「欲しい本」リストに追加できる
- [ ] 追加した本が、適切なステータスの列に表示される
- [ ] 本のカードをドラッグ&ドロップで異なるステータスの列に移動できる
- [ ] 本のステータスが更新されると、即座に UI が更新される
- [ ] 本のカードに削除ボタンがあり、クリックすると一覧から削除できる
- [ ] データの読み込み中は適切なローディング表示がされる
- [ ] エラーが発生した場合は、適切なエラーメッセージが表示される
