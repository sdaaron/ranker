import Banner from "./components/Banner";
import Content from "./components/Content";
import Loadmore from "./components/Loadmore";
export default async function Home() {
  function getFormattedDate() {
    let now = new Date();
    let hour = now.getHours();
    // test;
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

  const contentData = await Content(today);
  return (
    <main className="bg-white-50 flex min-h-screen flex-col">
      <Banner />
      <div className="body-section sm:px-3 sm:py-3 md:px-10 md:py-4 xl:px-12 xl:py-6">
        <div>{contentData}</div>
        {/* <NewContent data={data} /> */}
        <Loadmore today={today} />
      </div>
    </main>
  );
}
