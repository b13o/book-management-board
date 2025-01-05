import { fetchBooks, updateBook } from "@/utils/api";
import { COLUMNS } from "../constants";
import { Book, BookStatus } from "../types";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import BookCard from "./BookCard";

type BoardColumnProps = {
  status: BookStatus;
};

const BoardColumn = (props: BoardColumnProps) => {
  const columnData = COLUMNS.find((column) => column.status === props.status);
  const label = columnData?.label;
  const title = columnData?.title;

  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    // データ更新のメイン処理
    mutationFn: updateBook,

    // mutation 開始前の処理
    onMutate: async ({ id, newStatus }) => {
      await queryClient.cancelQueries({ queryKey: ["books"] });
      const previousBooks = queryClient.getQueryData<Book[]>(["books"]) || [];
      const newBooks = previousBooks.map((book) =>
        book.id === id ? { ...book, status: newStatus } : book
      );
      queryClient.setQueryData<Book[]>(["books"], newBooks);
      return { previousBooks };
    },

    // エラー時に楽観的更新を巻き戻す処理
    onError: (err, variables, context) => {
      if (context?.previousBooks) {
        queryClient.setQueryData<Book[]>(["books"], context.previousBooks);
      }
    },

    // 成功/失敗に関わらず完了時の処理
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["books"] });
    },
  });

  // 追加
  const {
    data: books = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["books"],
    queryFn: fetchBooks,
    select: (data) => data.filter((book) => book.status === props.status),
  });

  console.log("データ取得"); // デバッグ用

  if (isLoading) {
    return (
      <div className="h-10 w-10 animate-spin rounded-full border-4 border-emerald-500 border-t-transparent" />
    );
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <section
      className="flex-1 min-w-[300px] bg-white border-gray-300 border p-6 rounded-lg"
      onDragOver={(e) => {
        // ドラッグ中、継続的に発火
        e.preventDefault();
      }}
      onDrop={(e) => {
        // ドロップ時に発火
        e.preventDefault();
        const bookId = e.dataTransfer.getData("bookId");
        if (bookId) {
          mutate({ id: bookId, newStatus: props.status });
        }
      }}
    >
      <div className="border mb-6 border-gray-300 text-3xl h-16 w-16 rounded-full flex justify-center items-center">
        {label}
      </div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="font-bold text-xl">{title}</h2>
      </div>
      <div className="space-y-2">
        {/* 書き換え */}
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </section>
  );
};

export default BoardColumn;
