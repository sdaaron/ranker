"use server";
import ArticleCard from "../components/ArticleCard";
import supabase from "./SupabaseClient";
export default async function Home(date, category) {
  let data, error;
  if (category == "all") {
    ({ data, error } = await supabase
      .from("feeds")
      .select("id,category,title,summary,image_url,source_name,source_url,publish_date,created_at,importance")
      .eq("created_date", date)
      .order("importance", { ascending: false })
      .limit(100));
  } else {
    ({ data, error } = await supabase
      .from("feeds")
      .select("id,category,title,summary,image_url,source_name,source_url,publish_date,created_at,importance")
      .eq("category", category)
      .eq("created_date", date)
      .order("importance", { ascending: false })
      .limit(10));
  }

  if (error) {
    console.error("Failed to fetch historical feeds", {
      date,
      category,
      code: error.code,
      message: error.message,
    });
    throw new Error(`Failed to fetch ${category} feeds for ${date}: ${error.message}`);
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
            display={item.category}
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
