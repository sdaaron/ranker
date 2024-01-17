"use server";
import Feed from "./NewFeed";
export default async function MoreContent({ data }) {
  const groupedData = data.reduce((groups, item) => {
    const group = groups[item.category] || [];
    group.push(item);
    groups[item.category] = group;
    return groups;
  }, {});
  const finalData = Object.values(groupedData).map((group) => {
    return group.slice(0, 10);
  });

  const twelfData = finalData.slice(0, 12);
  const created_date = data[0].created_date;
  return (
    <div className="content-block mb-5" key={created_date}>
      <header>
        <div className="relative mx-auto max-w-3xl py-5 text-center">
          <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl md:text-5xl lg:text-6xl ">
            <span className="bg-gradient-to-r from-sky-400 to-emerald-600 bg-clip-text text-transparent">
              Ranker
            </span>
            {" · "}
            大模型日报
            <p className="my-2 font-mono text-xl font-bold sm:my-3 sm:text-xl md:my-4 md:text-3xl lg:my-6 xl:my-8">
              {created_date}
            </p>
          </h1>
        </div>
      </header>
      <main className="main-section grid gap-16 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {twelfData.map((data, index) => (
          <Feed key={data.category} data={data} index={index} />
        ))}
      </main>
    </div>
  );
}
