import Banner from "./components/banner";
import Content from "./components/content";
import Footer from "./components/footer";
import Loadmore from "./components/loadmore";
import Navbar from "./components/navbar";
export default async function Home() {
  let today = new Date();
  console.log("today: ", today);
  function getPreviousDay(date) {
    let previousDay = new Date(date);
    previousDay.setDate(date.getDate() - 1);
    return previousDay;
  }

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

  let yesterday = getPreviousDay(today);
  let dayBeforeYesterday = getPreviousDay(yesterday);

  return (
    <main className="flex min-h-screen flex-col bg-neutral-50">
      <Navbar />
      <Banner />
      <div className="body-section sm:px-3 sm:py-3 md:px-8 md:py-4">
        {/* <Content created_date={getFormattedDate(today)} />
        <Content created_date={getFormattedDate(yesterday)} />
        <Content created_date={getFormattedDate(dayBeforeYesterday)} /> */}
        <Content created_date="2024-01-10" />
        <Content created_date="2024-01-09" />
        <Content created_date="2024-01-08" />
        <Loadmore />
      </div>
      <Footer />
    </main>
  );
}
