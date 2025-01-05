import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import BoardColumn from "./components/BoardColumn";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { COLUMNS } from "./constants";

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
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen pt-16 pb-8 space-y-8 px-16 bg-gray-100">
        <Header />
        <div className="flex gap-6 overflow-x-auto pb-4">
          {COLUMNS.map((column) => (
            <BoardColumn key={column.status} status={column.status} />
          ))}
        </div>
        <Footer />
      </div>
    </QueryClientProvider>
  );
};

export default App;
