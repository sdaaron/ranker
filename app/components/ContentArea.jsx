"use server";
import ItemsCard from "./ItemsCardStack";
import supabase from "@/utils/SupabaseClient";

async function getFeeds(date) {
  let { data } = await supabase
    .from("feeds")
    .select()
    .eq("created_date", date)
    .order("category", { ascending: true })
    .order("importance", { ascending: false });

  let dataList = [
    ["ai", "AI资讯"],
    ["product_hunt_ai", "AI产品"],
    ["github_trending_ai", "AI开源"],
    ["arxiv", "AI论文"],
    ["product_hunt", "产品"],
    ["github_trending", "技术"],
    ["hacker_news_best", "极客"],
  ];

  let newsListData = dataList.map(([value, display]) => {
    let filteredData = data.filter((item) => item.category === value);
    filteredData.map((item) => (item.display = display));
    return filteredData;
  });

  return newsListData;
}

export default async function Content(date) {
  const newsListData = await getFeeds(date);

  function GroupLayout({ newsListData }) {
    return (
      <>
        {newsListData.length > 0 && (
          <>
            <header>
              <div className="relative mx-auto max-w-3xl py-5 text-center">
                <h1 className="mb-4 text-3xl font-extrabold text-gray-900  sm:text-4xl md:text-5xl lg:text-6xl ">
                  <span className="bg-gradient-to-r from-sky-400 to-emerald-600 bg-clip-text text-transparent">
                    Euery
                  </span>
                  {" · "}
                  大模型日报
                </h1>
                <p className="my-2 font-mono text-xl font-bold sm:my-3 sm:text-xl md:my-4 md:text-3xl lg:my-6 xl:my-8">
                  {date}
                </p>
              </div>
            </header>
            <main className="main-section flex flex-col items-center justify-center">
              <div className="max-w-3xl space-y-20">
                {newsListData.map((data, index) => (
                  <ItemsCard index={index} data={data} key={index} />
                ))}
              </div>
            </main>
          </>
        )}
      </>
    );
  }

  return (
    <div className="content-block xs:mb-10  sm:mb-20">
      <GroupLayout newsListData={newsListData} />
    </div>
  );
}
