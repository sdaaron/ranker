"use server";
import SimpleFeed from "./Feed";
export default async function MoreContent(date) {
  const today = new Date().toISOString().slice(0, 10);
  let categoryList;
  if (date <= "2024-01-14") {
    categoryList = [
      ["politics", "政治"],
      ["economy", "经济"],
      ["technology", "科技"],
      ["military", "军事"],
      ["finance", "金融"],
      ["culture", "文化"],
      ["ai", "人工智能"],
      ["computer", "计算机"],
      ["new_energy", "能源"],
    ];
  } else if (date === "2024-01-15") {
    categoryList = [
      ["ai", "人工智能"],
      ["world", "时事"],
      ["business", "财经"],
      ["technology", "科技"],
      ["science", "科学"],
      ["new_energy", "能源"],
      ["health", "健康"],
      ["entertainment", "娱乐"],
      ["sport", "运动"],
    ];
  } else {
    categoryList = [
      ["world", "时事"],
      ["business", "财经"],
      ["ai", "大模型"],
      ["hacker_news_top", "HackerNews"],

      ["technology", "科技"],
      ["politics", "时政"],
      ["science", "科学"],
      ["new_energy", "能源"],

      ["economy", "经济"],
      ["health", "健康"],
      ["entertainment", "娱乐"],
      ["sport", "运动"],
    ];
  }

  let table_name;
  console.log("date: ", date);
  console.log(typeof date);
  if (date <= "2024-01-14") {
    table_name = "news";
  } else {
    table_name = "feeds";
  }

  return (
    <div className="content-block mb-5" key={date}>
      <header>
        <div className="relative mx-auto max-w-3xl py-5 text-center">
          <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl md:text-5xl lg:text-6xl ">
            <span className="bg-gradient-to-r from-sky-400 to-emerald-600 bg-clip-text text-transparent">
              精选
            </span>
            {" · "}
            新闻热榜
            <p className="my-2 font-mono text-xl font-bold sm:my-3 sm:text-xl md:my-4 md:text-3xl lg:my-6 xl:my-8">
              {date}
            </p>
          </h1>
        </div>
      </header>
      <main className="main-section grid gap-16 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {categoryList.map(([category, display], index) => (
          <SimpleFeed
            key={category}
            category={category}
            display={display}
            created_date={date}
            index={index}
            table_name={table_name}
          />
        ))}
      </main>
    </div>
  );
}
