"use server";
import Feed from "./Feed";
import supabase from "../utils/SupabaseClient";

const categoryList = [
  ["ai", "大模型"],
  ["business", "财经"],
  ["technology", "科技"],
  ["science", "科学"],
  ["product_hunt", "产品"],
  ["hacker_news_top", "HackerNews"],
  ["github_trending", "技术"],
  ["arxiv", "论文"],
  ["new_energy", "能源"],
  ["health", "健康"],
  ["entertainment", "娱乐"],
  ["sport", "运动"],
];

export default async function Content(created_date) {
  const categories = categoryList.map(([category]) => category);
  const { data, error } = await supabase
    .from("feeds")
    .select(
      "id,category,title,summary,image_url,source_name,source_url,publish_date,importance",
    )
    .eq("created_date", created_date)
    .in("category", categories)
    .order("importance", { ascending: false });

  if (error) {
    console.error("Failed to fetch homepage feeds", {
      created_date,
      code: error.code,
      message: error.message,
    });
    throw new Error(`Failed to fetch feeds for ${created_date}: ${error.message}`);
  }

  const feedsByCategory = new Map(categories.map((category) => [category, []]));
  for (const item of data ?? []) {
    const items = feedsByCategory.get(item.category);
    if (items && items.length < 10) items.push(item);
  }
  return (
    <div className="content-block mb-5">
      <header>
        <div className="relative mx-auto max-w-3xl py-5 text-center">
          <h1 className="mb-4 text-3xl font-extrabold text-gray-900  sm:text-4xl md:text-5xl lg:text-6xl ">
            <span className="bg-gradient-to-r from-sky-400 to-emerald-600 bg-clip-text text-transparent">
              Ranker
            </span>
            {" · "}
            大模型日报
            <p className="my-2 font-mono text-xl font-bold sm:my-3 sm:text-xl md:my-4 md:text-3xl lg:my-6 xl:my-8">
              {created_date}
            </p>
          </h1>
        </div>
      </header>
      <main className="main-section grid gap-16 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {categoryList.map(([category, display], index) => (
          <Feed
            key={category}
            category={category}
            display={display}
            newsData={feedsByCategory.get(category) ?? []}
            index={index}
          />
        ))}
      </main>
    </div>
  );
}
