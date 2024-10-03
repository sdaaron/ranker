"use server";
import ArticleCard from "../app/components/ArticleCard";
import LoadmoreArticle from "../app/components/LoadmoreFeeds";
import supabase from "./SupabaseClient";
export default async function ContentList() {
  const category = "politics";
  const { data, error } = await supabase
    .from("feeds")
    .select()
    .order("publish_date", { ascending: false })
    // .order("importance", { ascending: false })
    .limit(100);

  function getFormattedDate() {
    let now = new Date();
    let hour = now.getHours();

    // 如果当前时间早于早上8点，调整日期为昨天
    if (hour < 2) {
      now.setDate(now.getDate() - 1);
    }

    // 将日期格式化为YYYY-MM-DD格式
    let year = now.getFullYear();
    let month = (now.getMonth() + 1).toString().padStart(2, "0"); // 月份从0开始，所以加1
    let day = now.getDate().toString().padStart(2, "0");

    return `${year}-${month}-${day}`;
  }

  // 使用函数
  let today = getFormattedDate();
  console.log(today); // 输出格式为YYYY-MM-DD的日期字符串

  return (
    <div className="mx-auto flex flex-col items-center bg-white  sm:col-span-12 sm:col-start-1 sm:p-2 md:col-span-8 md:col-start-3 md:px-10 md:py-10">
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
