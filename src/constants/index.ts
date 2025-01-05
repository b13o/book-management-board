import { Book, Column } from "@/types";

export const COLUMNS: Column[] = [
  { status: "want-to-read", title: "読みたい本", label: "🤩" },
  { status: "purchased", title: "購入済み", label: "🛒" },
  { status: "completed", title: "読了", label: "🎉" },
];

export const PREVIEW_DATA: Book[] = [
  {
    id: "1",
    title:
      "リーダブルコード ―より良いコードを書くためのシンプルで実践的なテクニック",
    author: "Dustin Boswell, Trevor Foucher",
    status: "want-to-read",
  },
  {
    id: "2",
    title:
      "体系的に学ぶ 安全なWebアプリケーションの作り方 第2版 脆弱性が生まれる原理と対策の実践",
    author: "徳丸 浩",
    status: "purchased",
  },
  {
    id: "3",
    title: "1冊ですべて身につくHTML & CSSとWebデザイン入門講座",
    author: "Mana",
    status: "completed",
  },
  {
    id: "4",
    title: "ハッカーと画家",
    author: "Paul Graham",
    status: "want-to-read",
  },
];
