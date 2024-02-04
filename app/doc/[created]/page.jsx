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
    ["product_hunt_ai", "产品"],
    ["github_trending_ai", "技术"],
    ["arxiv", "论文"],
  ];
  let filteredData = categoryList.map(([value, display]) => {
    let filteredData = data.filter((item) => item.category === value);
    filteredData.map((item) => (item.display = display));
    return filteredData;
  });

  function FormattedMarkdown({ data, index }) {
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
      </div>
    );
  }
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex max-w-7xl flex-col items-start justify-start gap-10 p-40">
        <h1 className="text-4xl font-bold">AI资讯</h1>
        {filteredData[0].map((data, index) => (
          <FormattedMarkdown data={data} key={index} index={index} />
        ))}
        <br /> <br />
        <h1 className="text-4xl font-bold">AI产品</h1>
        {filteredData[1].map((data, index) => (
          <FormattedMarkdown data={data} key={index} index={index} />
        ))}{" "}
        <br /> <br />
        <h1 className="text-4xl font-bold">AI开源项目</h1>
        {filteredData[2].map((data, index) => (
          <FormattedMarkdown data={data} key={index} index={index} />
        ))}{" "}
        <br /> <br />
        <h1 className="text-4xl font-bold">AI论文</h1>
        {filteredData[3].map((data, index) => (
          <FormattedMarkdown data={data} key={index} index={index} />
        ))}{" "}
        <br /> <br />
        <h1 className="text-2xl font-bold">
          资讯来源：大模型日报 https://ranker.cc
        </h1>
      </div>
    </div>
  );
}
