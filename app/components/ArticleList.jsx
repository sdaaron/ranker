"use server";
import supabase from "../lib/SupabaseClient";
import ArticleCard from "./ArticleCard";
export default async function ContentList() {
  const category = "politics";
  const { data, error } = await supabase
    .from("news")
    .select()
    .order("created_at", { ascending: false })
    .limit(100);
  // .eq("category", "politics")
  // .eq("created_date", "2024-01-13");
  if (!data) {
    return <div>oops...没有找到新闻...</div>;
  }

  const topNews = data;

  return (
    <div className="col-span-8 col-start-3 mx-auto flex flex-col items-center  bg-white px-10 py-24 ">
      <div className="mx-auto">
        <h2 className="ml-10 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Ranker 精选推荐
        </h2>
        {/* <p className="ml-10 mt-2 text-lg leading-8 text-gray-600">
          1000 个 AI 智能体，每天帮你阅读 1万+ 信息源！
        </p> */}
      </div>

      <div className="mt-10 space-y-6  sm:mt-16">
        {topNews.map((item) => (
          <ArticleCard
            key={item.id}
            id={item.id}
            category={item.category}
            title={item.title}
            summary={item.summary}
            image_url={item.image_url}
            source_name={item.source_name}
            source_url={item.source_url}
            publish_date={item.publish_date}
            created_at={item.created_at}
            display={item.display}
          />
        ))}
      </div>
    </div>
  );
}
