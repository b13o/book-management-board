import { Book, BookStatus } from "../types";

const API_URL = "http://localhost:3001";

export const fetchBooks = async (): Promise<Book[]> => {
  console.log("fetchが実行されました！"); // デバッグ用
  const response = await fetch(`${API_URL}/books`);
  if (!response.ok) {
    throw new Error("Failed to fetch books");
  }
  return response.json();
};

export const createBook = async (newBook: Book): Promise<Book> => {
  const response = await fetch(`${API_URL}/books`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newBook),
  });
  if (!response.ok) {
    throw new Error("Failed to create book");
  }
  return response.json();
};

export const deleteBook = async (id: string): Promise<void> => {
  const response = await fetch(`${API_URL}/books/${id}`, {
    method: "DELETE",
  });
  if (!response.ok) {
    throw new Error("Failed to delete book");
  }
};

// 追加
export const updateBook = async ({
  id,
  newStatus,
}: {
  id: string;
  newStatus: BookStatus;
}): Promise<Book> => {
  const response = await fetch(`${API_URL}/books/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ status: newStatus }),
  });
  if (!response.ok) {
    throw new Error("Failed to update book status");
  }
  return response.json();
};
