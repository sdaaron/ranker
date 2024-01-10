import Feed from "./feed";
export default async function Content(props) {
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
    // ["society", "社会"],
    // ["entertainment", "娱乐"],
    // ["industry", "工业"],
    // ["sports", "体育"],
    // ["education", "教育"],
    // ["health", "健康"],
  ];

  const date = props.created_date;
  console.log("content_date: ", date);
  return (
    <div className="content-block mb-20">
      <header>
        <div className="pb-15 relative mx-auto max-w-3xl py-10 text-center">
          {/* <h1 className="bg-gradient-to-r from-black via-blue-800 to-emerale-900 bg-clip-text text-3xl font-extrabold text-transparent">
            精选新闻热榜
            <p className="text-lg my-4 font-bold">{date}</p>
          </h1> */}
          <h1 class="mb-4 font-extrabold text-gray-900 dark:text-white sm:text-3xl md:text-5xl lg:text-6xl ">
            <span class="bg-gradient-to-r from-sky-400 to-emerald-600 bg-clip-text text-transparent">
              精选
            </span>
            {" · "}
            新闻热榜
            <p className="my-4 font-bold sm:text-xl md:text-2xl">{date}</p>
          </h1>
        </div>
      </header>
      <main className="main-section grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
        {categoryList.map(([category, display]) => (
          <Feed
            key={category}
            category={category}
            display={display}
            created_date={date}
          />
        ))}
      </main>
    </div>
  );
}
