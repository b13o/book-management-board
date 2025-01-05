import { Book } from "@/types";
import CreateBookDialog from "./CreateBookDialog";

type HeaderProps = {
  createBook: (newBook: Book) => void;
};

const Header = ({ createBook }: HeaderProps) => {
  return (
    <div className="space-y-8">
      <h1 className="text-5xl font-bold">Book Management Board</h1>
      <p className="text-gray-700">
        読みたい本を追加。購入済みの本を可視化。
        <br />
        読了を記録。シンプルな読書管理アプリです！
      </p>
      {/* <Button
        onClick={() => {}}
        size={"lg"}
        className="bg-emerald-600 text-white hover:bg-emerald-700"
      >
        ダミーボタン
      </Button> */}
      <CreateBookDialog createBook={createBook} />
    </div>
  );
};

export default Header;
