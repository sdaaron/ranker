"use server";
import Feed from "./Feed";
export default async function Content(created_date) {
  console.log("fetching created_date: ", created_date);
  let categoryList;
  categoryList = [
    ["ai", "大模型"],
    ["business", "财经"],
    ["technology", "科技"],
    ["world", "时事"],
    ["science", "科学"],
    ["new_energy", "能源"],
    ["health", "健康"],
    ["entertainment", "娱乐"],
    // ["sport", "运动"],
    ["product_hunt", "产品"],
    ["hacker_news_top", "HackerNews"],
    ["github_trending", "技术"],
    ["arxiv", "论文"],
  ];
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
            created_date={created_date}
            index={index}
          />
        ))}
      </main>
    </div>
  );
}
