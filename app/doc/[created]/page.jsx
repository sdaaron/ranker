import supabase from "@/app/utils/SupabaseClient";

export default async function MarkdownContent({ params }) {
  const date = params.created;
  console.log("date: ", date); // 输出格式为YYYY-MM-DD的日期字符串

  let { data } = await supabase
    .from("feeds")
    .select()
    .eq("created_date", date)
    .order("importance", { ascending: false });
  console.log("data: ", data[0]);

  let categoryList;
  categoryList = [
    ["ai", "大模型"],
    ["product_hunt", "产品"],
    ["github_trending", "技术"],
    ["arxiv", "论文"],
    ["business", "财经"],
    ["technology", "科技"],
    ["world", "时事"],
    ["science", "科学"],
    ["new_energy", "能源"],
    ["health", "健康"],
    ["entertainment", "娱乐"],
    ["hacker_news_top", "HackerNews"],
    ["sport", "运动"],
  ];
  let filteredData = categoryList.map(([value, display]) => {
    let filteredData = data.filter((item) => item.category === value);
    filteredData.map((item) => (item.display = display));
    return filteredData;
  });

  function FormattedMarkdown({ data }) {
    return (
      <div>
        <h2>
          [{data.title}]({data.source_url})
        </h2>
        <p>
          *[{data.source_name}]({data.source_url}) 发布于 {data.created_date}*
        </p>
        <p>
          {"> "}
          {data.summary}
        </p>

        {/* <p>
          原文链接：[{data.source_url}]({data.source_url})
        </p> */}
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex max-w-7xl flex-col items-center justify-center gap-10 p-40">
        {filteredData[0].map((data, index) => (
          <FormattedMarkdown data={data} key={index} />
        ))}
      </div>
    </div>
  );
}
