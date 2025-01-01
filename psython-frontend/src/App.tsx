import Test from "./components/editor/test";
import Layout from "./components/layout/Layout";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <Layout>
        <Test />
      </Layout>
    </div>
  );
}
