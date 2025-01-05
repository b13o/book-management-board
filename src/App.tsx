import BoardColumn from "./components/BoardColumn";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { COLUMNS } from "./constants";

const App = () => {
  return (
    <div className="min-h-screen pt-16 pb-8 space-y-8 px-16 bg-gray-100">
      <Header />
      <div className="flex gap-6 overflow-x-auto pb-4">
        {COLUMNS.map((column) => (
          <BoardColumn key={column.status} status={column.status} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default App;
