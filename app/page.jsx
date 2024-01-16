import Banner from "./components/Banner";
// import Content from "./components/content";
import SimpleContent from "./components/SimpleContent";
import Loadmore from "./components/SimpleLoadmore";
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
  const data = await SimpleContent(getFormattedDate(today));
  // const data = await MoreContent("2024-01-13");
  return (
    <main className="bg-white-50 flex min-h-screen flex-col">
      <Banner />
      <div className="body-section sm:px-3 sm:py-3 md:px-20 md:py-4">
        {/* <MoreContent */}

        <div>{data}</div>
        {/* <Content created_date={getFormattedDate(today)} /> */}
        <Loadmore />
      </div>
    </main>
  );
}
