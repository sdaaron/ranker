import { getFormattedDate } from "@/app/utils/DateTool";
import ArticleCard from "../../components/ArticleCard";
import LoadmoreFeeds from "../../components/LoadmoreFeeds";
import supabase from "../../utils/SupabaseClient";
export default async function Home({ params }) {
  const category = params.category;

  let today = getFormattedDate();
  let data, error;
  if (category == "all") {
    ({ data, error } = await supabase
      .from("feeds")
      .select()
      .eq("created_date", today));
  } else {
    ({ data, error } = await supabase
      .from("feeds")
      .select()
      .eq("category", category)
      .eq("created_date", today));
  }

  const news = data.slice(0, 10);
  console.log("category: ", category);
  console.log("news: ", news);
  return (
    <div className="grid min-h-screen grid-cols-12 p-2">
      {/* <div className="min-h-screen"> */}
      <div className="xs:col-span-12 xs:col-start-1 mx-auto flex flex-col  items-center bg-white sm:p-2 md:col-span-8 md:col-start-3  md:p-10 md:px-10">
        {/* <div className="mx-auto flex flex-col items-center  justify-center bg-white sm:p-2   md:p-10 md:px-20"> */}
        <header>
          <div className="relative mx-auto max-w-3xl py-5 text-center">
            <h1 className="mb-4 text-3xl font-extrabold text-gray-900  sm:text-4xl md:text-5xl lg:text-6xl ">
              <span className="bg-gradient-to-r from-sky-400 to-emerald-600 bg-clip-text text-transparent">
                Ranker
              </span>
              {" · "}
              大模型日报
            </h1>
          </div>
        </header>
        <div className="my-10">
          <div className="flex items-center justify-center p-10 font-mono text-3xl">
            {today}
          </div>

          {news.map((item, index) => (
            <ArticleCard
              key={item.id}
              id={item.id}
              index={index}
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

        <LoadmoreFeeds today={today} category={category} />
      </div>
    </div>
  );
}
