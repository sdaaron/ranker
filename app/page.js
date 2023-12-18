import Banner from "./banner";
// import Card from "./card";
import CardList from "./cardList";
import Feed from "./feed";
import Footer from "./footer";
import Nav from "./navigation";

export default async function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-zinc-50">
      <Nav />
      <Banner />
      <div className="body-section lg:px-10 lg:py-6 md:px-4 md:py-5 sm:px-3 sm:py-3">
        <div className="content-block">
          <header className="">
            <div className="max-w-full py-10">
              <h1 className="text-3xl font-bold leading-tight tracking-tight text-gray-900 text-center">
                今日 · 新闻总榜
              </h1>
            </div>
          </header>
          <main className="main-section  grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-3">
            <Feed category="时事" />
            <Feed category="经济" />
            <Feed category="科技" />
            <Feed category="社会" />
          </main>
        </div>

        <div className="content-block">
          <header className="">
            <div className="mx-auto my-auto max-w-full py-10">
              <h1 className="text-3xl font-bold leading-tight tracking-tight text-gray-900 text-center">
                今日 · 精选主题
              </h1>
            </div>
          </header>
          <main className="main-section  grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-3">
            <Feed category="人工智能" />
            <Feed category="互联网" />
            <Feed category="编程" />
            <Feed category="文化" />
            <Feed category="娱乐" />
            <Feed category="体育" />
            <Feed category="教育" />
            <Feed category="金融" />
          </main>
        </div>

        <div className="content-block">
          <header className="">
            <div className="mx-auto my-auto max-w-full py-10">
              <h1 className="text-3xl font-bold leading-tight tracking-tight text-gray-900 text-center">
                今日 · 新事物
              </h1>
            </div>
          </header>
          <main className="main-section  grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-3">
            <CardList category="产品" />
            <CardList category="技术" />
            <CardList category="网站" />
            <CardList category="课程" />
            <CardList category="论文" />
            <CardList category="研报" />
            <CardList category="游戏" />
            <CardList category="小说" />
            <CardList category="书籍" />
            <CardList category="电影" />
            <CardList category="电视" />
            <CardList category="音乐" />
          </main>
        </div>
      </div>
      <Footer />
    </main>
  );
}
