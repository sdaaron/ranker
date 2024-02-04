"use server";
import Feed from "./Feed";
import supabase from "../utils/SupabaseClient";

export default async function Content(date) {
  let { data } = await supabase
    .from("feeds")
    .select()
    .eq("created_date", date)
    .order("importance", { ascending: false });

  let aiList = [
    ["ai", "AI资讯"],
    ["product_hunt_ai", "AI产品"],
    ["github_trending_ai", "AI开源"],
    ["arxiv", "AI论文"],
  ];

  let infoList = [
    ["business", "财经"],
    ["technology", "科技"],
    ["world", "时事"],
    // ["politics", "政治"],
    ["science", "科学"],
    ["new_energy", "能源"],
    ["health", "健康"],
    ["entertainment", "娱乐"],
    ["sport", "运动"],
  ];

  let internetList = [
    ["product_hunt", "产品"],
    ["github_trending", "技术"],
    ["hacker_news_top", "极客"],
  ];

  let aiData = aiList.map(([value, display]) => {
    let filteredData = data.filter((item) => item.category === value);
    filteredData.map((item) => (item.display = display));
    return filteredData;
  });

  let infoData = infoList.map(([value, display]) => {
    let filteredData = data.filter((item) => item.category === value);
    filteredData.map((item) => (item.display = display));
    return filteredData;
  });

  let internetData = internetList.map(([value, display]) => {
    let filteredData = data.filter((item) => item.category === value);
    filteredData.map((item) => (item.display = display));
    return filteredData;
  });

  function GroupLayout({ dataList, name }) {
    return (
      <>
        <header>
          <div className="relative mx-auto max-w-3xl py-5 text-center">
            <h1 className="mb-4 text-3xl font-extrabold text-gray-900  sm:text-4xl md:text-5xl lg:text-6xl ">
              <span className="bg-gradient-to-r from-sky-400 to-emerald-600 bg-clip-text text-transparent">
                Ranker
              </span>
              {" · "}
              {name}日报
            </h1>
            <p className="my-2 font-mono text-xl font-bold sm:my-3 sm:text-xl md:my-4 md:text-3xl lg:my-6 xl:my-8">
              {date}
            </p>
          </div>
        </header>
        <main className="main-section grid gap-16 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {dataList.map((data, index) => (
            <Feed index={index} data={data} key={index} />
          ))}
        </main>
      </>
    );
  }

  return (
    <div className="content-block xs:mb-10  sm:mb-20">
      <GroupLayout dataList={infoData} name="资讯" />
      <GroupLayout dataList={aiData} name="大模型" />
      <GroupLayout dataList={internetData} name="互联网" />
    </div>
  );
}
