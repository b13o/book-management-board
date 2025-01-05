import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import BoardColumn from "./components/BoardColumn";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { COLUMNS, PREVIEW_DATA } from "./constants";
import { useState } from "react";
import { Book, BookStatus } from "./types";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // デフォルトでコンポーネントにフォーカスが当たるとフェッチするのを無効化
      refetchOnWindowFocus: false,
      // 取得したデータが「古い」とみなされるまでの時間。デフォルトで 0。
      staleTime: Infinity,
    },
  },
});

const App = () => {
  const [books, setBooks] = useState<Book[]>(PREVIEW_DATA);

  const createBook = (newBook: Book) => {
    setBooks([...books, newBook]);
  };

  const updateBook = ({
    id,
    newStatus,
  }: {
    id: string;
    newStatus: BookStatus;
  }) => {
    setBooks(
      books.map((book) =>
        book.id === id ? { ...book, status: newStatus } : book
      )
    );
  };

  const deleteBook = (id: string) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen pt-16 pb-8 space-y-8 px-16 bg-gray-100">
        <Header createBook={createBook} />
        <div className="flex gap-6 overflow-x-auto pb-4">
          {COLUMNS.map((column) => (
            <BoardColumn
              key={column.status}
              status={column.status}
              books={books}
              updateBook={updateBook}
              deleteBook={deleteBook}
            />
          ))}
        </div>
        <Footer />
      </div>
    </QueryClientProvider>
  );
};

export default App;
