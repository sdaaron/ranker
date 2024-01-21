"use server";
import ArticleCard from "../components/ArticleCard";
import supabase from "./SupabaseClient";
export default async function Home(date, category) {
  console.log("date in FetchFeeds!!: ", date);
  let data, error;
  if (category == "all") {
    ({ data, error } = await supabase
      .from("feeds")
      .select()
      .eq("created_date", date));
  } else {
    ({ data, error } = await supabase
      .from("feeds")
      .select()
      .eq("category", category)
      .eq("created_date", date));
  }

  return (
    <>
      <div className="flex items-center justify-center p-10 font-mono text-3xl">
        {date}
      </div>
      {data ? (
        data.map((item, index) => (
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
            index={index}
          />
        ))
      ) : (
        <p>没有数据</p>
      )}
      {}
    </>
  );
}
