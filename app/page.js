import Banner from "./components/banner";
import Content from "./components/content";
import Footer from "./components/footer";
import Loadmore from "./components/loadMore";
import Navbar from "./components/navbar";
// test
export default async function Home() {
  let today = new Date();
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
  return (
    <main className="flex min-h-screen flex-col bg-neutral-50">
      <Navbar />
      <Banner />
      <div className="body-section sm:px-3 sm:py-3 md:px-8 md:py-4">
        <Content created_date={getFormattedDate(today)} />
        <Loadmore />
      </div>
      <Footer />
    </main>
  );
}
