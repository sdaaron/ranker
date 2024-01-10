import Feed from "./feed";
export default async function Content(props) {
  const categoryList = [
    ["politics", "政治"],
    ["economy", "经济"],
    ["technology", "科技"],
    ["military", "军事"],
    ["ai", "人工智能"],
    ["culture", "文化"],
    ["computer", "计算机"],
    ["finance", "金融"],
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
        <div className="max-w-full py-10 pb-15 relative">
          <h1 className="text-3xl font-mono leading-tight tracking-tight text-gray-900 text-center">
            精选新闻热榜
            <p className="text-base my-4 font-thin">{date}</p>
          </h1>
        </div>
      </header>
      <main className="main-section grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
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
