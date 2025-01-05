import { useQuery } from "@tanstack/react-query";
import { COLUMNS } from "../constants";
import { BookStatus } from "../types";
import { fetchBooks } from "@/utils/api";

type BoardColumnProps = {
  status: BookStatus;
};

const BoardColumn = (props: BoardColumnProps) => {
  const columnData = COLUMNS.find((column) => column.status === props.status);
  const label = columnData?.label;
  const title = columnData?.title;

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
    <section className="flex-1 min-w-[300px] bg-white border-gray-300 border p-6 rounded-lg">
      <div className="border mb-6 border-gray-300 text-3xl h-16 w-16 rounded-full flex justify-center items-center">
        {label}
      </div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="font-bold text-xl">{title}</h2>
      </div>
      <div className="space-y-2">
        {/* 書き換え */}
        {books.map((book) => (
          <p key={book.id}>📚 {book.title}</p>
        ))}
      </div>
    </section>
  );
};

export default BoardColumn;
