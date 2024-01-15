import ArticleList from "../components/ArticleList";
export default async function Home() {
  return (
    <div className="grid min-h-screen grid-cols-12 p-2">
      <ArticleList />
    </div>
  );
}
