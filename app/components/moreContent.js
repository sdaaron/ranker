"use server";
import Feed from "./feed";
export default async function MoreContent(date) {
  const categoryList = [
    ["politics", "政治"],
    ["economy", "经济"],
    ["technology", "科技"],
    ["military", "军事"],
    ["finance", "金融"],
    ["culture", "文化"],
    ["ai", "人工智能"],
    ["computer", "计算机"],
    ["new_energy", "新能源"],
  ];

  return (
    <div className="content-block mb-20" key={date}>
      <header>
        <div className="pb-15 relative mx-auto max-w-3xl py-10 text-center">
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
      <main className="main-section grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
        {categoryList.map(([category, display], index) => (
          <Feed
            key={category}
            category={category}
            display={display}
            created_date={date}
            index={index}
          />
        ))}
      </main>
    </div>
  );
}
