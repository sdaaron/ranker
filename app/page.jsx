import Banner from "./components/banner";
// import Content from "./components/content";
import Loadmore from "./components/loadmore";
import MoreContent from "./components/moreContent";
export default async function Home() {
  let today = new Date();
  // let options = { timeZone: "Asia/Shanghai" };
  // today = today.toLocaleString("zh-CN", options);

  console.log("today: ", today);
  function getFormattedDate(date) {
    let year = date.getFullYear();
    let month = date.getMonth() + 1; // 月份是从 0 开始的
    let day = date.getDate();

    let formattedDate =
      year +
      "-" +
      String(month).padStart(2, "0") +
      "-" +
      String(day).padStart(2, "0");

    return formattedDate;
  }
  const data = await MoreContent(getFormattedDate(today));
  // const data = await MoreContent("2024-01-13");
  return (
    <main className="flex min-h-screen flex-col bg-neutral-50">
      <Banner />
      <div className="body-section sm:px-3 sm:py-3 md:px-8 md:py-4">
        {/* <MoreContent */}

        <div>{data}</div>
        {/* <Content created_date={getFormattedDate(today)} /> */}
        <Loadmore />
      </div>
    </main>
  );
}
