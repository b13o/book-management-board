import { COLUMNS } from "../constants";
import { Book, BookStatus } from "../types";
import BookCard from "./BookCard";

type BoardColumnProps = {
  status: BookStatus;
  books: Book[];
  updateBook: ({
    id,
    newStatus,
  }: {
    id: string;
    newStatus: BookStatus;
  }) => void;
  deleteBook: (id: string) => void;
};

const BoardColumn = (props: BoardColumnProps) => {
  const columnData = COLUMNS.find((column) => column.status === props.status);
  const label = columnData?.label;
  const title = columnData?.title;

  const books = props.books.filter((book) => book.status === props.status);

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
          props.updateBook({ id: bookId, newStatus: props.status });
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
          <BookCard key={book.id} book={book} deleteBook={props.deleteBook} />
        ))}
      </div>
    </section>
  );
};

export default BoardColumn;
