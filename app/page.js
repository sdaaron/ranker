import Banner from "./components/banner";
import Feed from "./components/feed";
import Footer from "./components/footer";
import Navbar from "./components/navbar";

export default async function Home() {
  var currentDate = new Date();

  // 格式化年份为两位数
  var year = currentDate.getFullYear().toString().substr(-2);

  // 格式化月份，确保是两位数
  var month = (currentDate.getMonth() + 1).toString().padStart(2, "0");

  // 格式化日期，确保是两位数
  var day = currentDate.getDate().toString().padStart(2, "0");

  // 拼接字符串
  var formattedDate = year + "/" + month + "/" + day;

  console.log(formattedDate);
  return (
    <main className="flex flex-col min-h-screen bg-zinc-50">
      {/* <Modal /> */}
      <Navbar />
      {/* <Nav /> */}
      <Banner />
      <div className="body-section xl:px-20 lg:py-6 md:px-8 md:py-4 sm:px-3 sm:py-3">
        <div className="content-block">
          <header>
            <div className="max-w-full py-10 pb-15 relative">
              <h1 className="text-3xl font-mono leading-tight tracking-tight text-gray-900 text-center">
                今日 · 新闻热榜
                <p className="text-base my-4 font-thin">{formattedDate}</p>
              </h1>
            </div>
          </header>
          <main className="main-section grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            <Feed category="政治" />
            <Feed category="经济" />
            <Feed category="科技" />
            <Feed category="军事" />
            <Feed category="文化" />
            <Feed category="社会" />
            <Feed category="人工智能" />
            <Feed category="计算机" />
            <Feed category="汽车" />
            <Feed category="娱乐" />
            <Feed category="金融" />
            <Feed category="工业" />
            <Feed category="体育" />
            <Feed category="教育" />
            <Feed category="健康" />
          </main>
        </div>
      </div>
      <Footer />
    </main>
  );
}
