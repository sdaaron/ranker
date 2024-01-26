import Banner from "./components/Banner";
import Content from "./components/Content";
import Loadmore from "./components/Loadmore";
export default async function Home() {
  function getFormattedDate() {
    let now = new Date();
    let hour = now.getHours();
    const moment = require("moment-timezone");
    let today = moment().tz("Asia/Shanghai").format("YYYY-MM-DD");
    console.log("today in page: ", today);
    return today;
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
