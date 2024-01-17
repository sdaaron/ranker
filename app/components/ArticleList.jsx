"use server";
import supabase from "../lib/SupabaseClient";
import ArticleCard from "./ArticleCard";
import LoadmoreArticle from "./LoadmoreArticle";
export default async function ContentList() {
  const category = "politics";
  const { data, error } = await supabase
    .from("feeds")
    .select()
    .order("publish_date", { ascending: false })
    .order("importance", { ascending: false })
    .limit(100);

  if (!data) {
    return <div>oops...没有找到新闻...</div>;
  }

  // 创建一个 Map 来跟踪每个不同 original_title 的最新项
  const uniqueItemsMap = new Map();

  // 遍历数据并更新 uniqueItemsMap
  data.forEach((item) => {
    const { original_title, publish_date } = item;

    if (
      !uniqueItemsMap.has(original_title) ||
      publish_date > uniqueItemsMap.get(original_title).publish_date
    ) {
      uniqueItemsMap.set(original_title, item);
    }
  });

  // 现在 uniqueItemsMap 包含了每个 original_title 的最新项
  const uniqueData = Array.from(uniqueItemsMap.values());

  // uniqueData 现在包含了唯一的、最新的项
  console.log(uniqueData);

  const topNews = uniqueData;

  return (
    <div className="mx-auto flex flex-col items-center bg-white  sm:col-span-12 sm:col-start-1 sm:p-2 md:col-span-8 md:col-start-3 md:col-start-3 md:px-10 md:py-10">
      {/* <div className="mx-auto">
        <h2 className="ml-10 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          精选推荐
        </h2>
      </div> */}

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

      <LoadmoreArticle />
    </div>
  );
}
