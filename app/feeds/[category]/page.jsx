import { getFormattedDate } from "@/app/utils/DateTool";
import ArticleCard from "../../components/ArticleCard";
import LoadmoreFeeds from "../../components/LoadmoreFeeds";
import supabase from "../../utils/SupabaseClient";
export default async function Home({ params }) {
  const category = params.category;

  let today = getFormattedDate();
  let query = supabase.from("feeds").select().eq("created_date", today);

  if (category !== "all") {
    query = query.eq("category", category);
  }

  const { data, error } = await query;

  const news = data.slice(0, 10);
  return (
    <div className="grid min-h-screen grid-cols-12 p-2">
      <div className="mx-auto flex flex-col items-center bg-white  sm:col-span-12 sm:col-start-1 sm:p-2 md:col-span-8 md:col-start-3  md:p-10 md:px-10">
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
        <div className="mt-10 space-y-6  sm:mt-16">
          {news.map((item) => (
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

        <LoadmoreFeeds today={today} category={category} />
      </div>
    </div>
  );
}
