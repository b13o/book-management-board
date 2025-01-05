import { COLUMNS } from "../constants";
import { BookStatus } from "../types";

type BoardColumnProps = {
  status: BookStatus;
};

const BoardColumn = (props: BoardColumnProps) => {
  const columnData = COLUMNS.find((column) => column.status === props.status);
  const label = columnData?.label;
  const title = columnData?.title;

  return (
    <section className="flex-1 min-w-[300px] bg-white border-gray-300 border p-6 rounded-lg">
      <div className="border mb-6 border-gray-300 text-3xl h-16 w-16 rounded-full flex justify-center items-center">
        {label}
      </div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="font-bold text-xl">{title}</h2>
      </div>
      <div className="space-y-2">
        <p>A</p>
        <p>B</p>
      </div>
    </section>
  );
};

export default BoardColumn;
