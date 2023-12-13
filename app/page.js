import Banner from "./banner";
// import Card from "./card";
import Feed from "./feed";
import Footer from "./footer";
import Nav from "./navigation";
// import Newsletter from "./newsletter";
export default async function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-zinc-50">
      <Nav />
      <Banner />
      <div className="body-section lg:px-20 lg:py-10 md:px-10 md:py-5 sm:px-6 sm:py-3">
        <header className="">
          <div className="mx-auto my-auto max-w-full pb-10">
            <h1 className="text-3xl font-bold leading-tight tracking-tight text-gray-900 text-center">
              今日新闻热榜
            </h1>
          </div>
        </header>
        <main className="main-section  grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1  gap-10 pb-20">
          <Feed category="财经" />
          <Feed category="科技" />
          <Feed category="文化" />
        </main>

        {/* <header className="">
          <div className="mx-auto my-auto max-w-full pb-10">
            <h1 className="text-3xl font-bold leading-tight tracking-tight text-gray-900 text-center">
              今日文章精选
            </h1>
          </div>
        </header>
        <main className="main-section  grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10 pb-20">
          <Feed />
          <Feed />
          <Feed />
        </main> */}

        <header className="">
          <div className="mx-auto my-auto max-w-full pb-10">
            <h1 className="text-3xl font-bold leading-tight tracking-tight text-gray-900 text-center">
              今日话题精选
            </h1>
          </div>
        </header>
        <main className="main-section  grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1  gap-10 pb-20">
          <Feed category="人工智能" />
          <Feed category="自我提升" />
          <Feed category="编程开发" />
          <Feed category="半导体" />
          <Feed category="娱乐" />
          <Feed category="健康" />
        </main>
      </div>
      {/* <Newsletter /> */}
      <Footer />
    </main>
  );
}
