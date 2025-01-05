export type BookStatus = "want-to-read" | "purchased" | "completed";

export interface Book {
  id: string;
  title: string;
  author: string;
  status: BookStatus;
}

export interface Column {
  status: BookStatus;
  title: string;
  label: string;
}
