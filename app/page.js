import Banner from "./components/banner";
// import Card from "./card";
import Feed from "./components/feed";
import Footer from "./components/footer";
import Nav from "./components/navigation";

export default async function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-zinc-50">
      <Nav />
      <Banner />
      <div className="body-section lg:px-10 lg:py-6 md:px-4 md:py-5 sm:px-3 sm:py-3">
        <div className="content-block">
          <header>
            <div className="max-w-full py-8">
              <h1 className="text-3xl font-bold leading-tight tracking-tight text-gray-900 text-center">
                今日 · 新闻总榜
              </h1>
            </div>
          </header>
          <main className="main-section  grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-5">
            <Feed category="政治" />
            <Feed category="经济" />
            <Feed category="科技" />
            <Feed category="文化" />
          </main>
        </div>

        <div className="content-block">
          <header>
            <div className="max-w-full py-7">
              <h1 className="text-3xl font-bold leading-tight tracking-tight text-gray-900 text-center">
                本周 · 新闻精选
              </h1>
            </div>
          </header>
          {/* "经济",
        "政治",
        "科技",
        "文化",
        "工业",
        "金融",
        "军事",
        "社会",
        "人工智能",
        "体育",
        "娱乐",
        "教育",
        "汽车",
        "电子",
        "健康",
        "计算机", */}
          <main className="main-section  grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-5">
            <Feed category="人工智能" />
            <Feed category="计算机" />
            <Feed category="汽车" />
            <Feed category="电子" />

            <Feed category="工业" />
            <Feed category="金融" />
            <Feed category="军事" />
            <Feed category="社会" />

            <Feed category="娱乐" />
            <Feed category="体育" />
            <Feed category="教育" />
            <Feed category="健康" />
          </main>
        </div>

        {/* <div className="content-block">
          <header className="">
            <div className="mx-auto my-auto max-w-full py-10">
              <h1 className="text-3xl font-bold leading-tight tracking-tight text-gray-900 text-center">
                今日 · 新事物
              </h1>
            </div>
          </header>
          <main className="main-section  grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-3">
            <Feed category="产品" />
            <Feed category="技术" />
            <Feed category="网站" />
            <Feed category="课程" />
            <Feed category="论文" />
            <Feed category="研报" />
            <Feed category="游戏" />
            <Feed category="小说" />
            <Feed category="书籍" />
            <Feed category="电影" />
            <Feed category="电视" />
            <Feed category="音乐" />
          </main>
        </div> */}
      </div>
      <Footer />
    </main>
  );
}
