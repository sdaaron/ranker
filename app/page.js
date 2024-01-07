import Banner from "./components/banner";
import Feed from "./components/feed";
import Footer from "./components/footer";
import Navbar from "./components/navbar";

export default async function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-zinc-50">
      {/* <Modal /> */}
      <Navbar />
      {/* <Nav /> */}
      <Banner />
      <div className="body-section lg:px-10 lg:py-6 md:px-4 md:py-5 sm:px-3 sm:py-3">
        <div className="content-block">
          <header>
            <div className="max-w-full py-10 pb-15">
              <h1 className="text-3xl font-bold leading-tight tracking-tight text-gray-900 text-center">
                今日 · 新闻热榜
              </h1>
            </div>
          </header>
          <main className="main-section grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Feed category="政治" />
            <Feed category="经济" />
            <Feed category="科技" />
            <Feed category="军事" />
            <Feed category="文化" />
            <Feed category="社会" />
          </main>
        </div>

        <div className="content-block">
          <header>
            <div className="max-w-full py-10 pb-15">
              <h1 className="text-3xl font-bold leading-tight tracking-tight text-gray-900 text-center">
                今日 · 主题热榜
              </h1>
            </div>
          </header>

          <main className="main-section  grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Feed category="人工智能" />
            <Feed category="计算机" />
            <Feed category="汽车" />
            <Feed category="电子" />
            <Feed category="工业" />
            <Feed category="金融" />
            <Feed category="娱乐" />
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
