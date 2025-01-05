import { Book } from "../types";

const API_URL = "http://localhost:3001";

export const fetchBooks = async (): Promise<Book[]> => {
  console.log("fetchが実行されました！"); // デバッグ用
  const response = await fetch(`${API_URL}/books`);
  if (!response.ok) {
    throw new Error("Failed to fetch books");
  }
  return response.json();
};
