import CreateBookDialog from "./CreateBookDialog";

const Header = () => {
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
      <CreateBookDialog />
    </div>
  );
};

export default Header;
