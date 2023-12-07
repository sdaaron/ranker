import Feed from "./feed";
import Footer from "./footer";
import Nav from "./nav";

export default async function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-zinc-50">
      <Nav />
      <div>{data.content.date}</div>
      <div className="body-section px-20 py-10">
        <header className="">
          <div className="mx-auto my-auto max-w-full pb-10">
            <h1 className="text-3xl font-bold leading-tight tracking-tight text-gray-900 text-center">
              今日新闻热榜
            </h1>
          </div>
        </header>
        {/* <Filter /> */}
        <main className="main-section  grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1  gap-10 pb-20">
          <Feed />
          <Feed />
          <Feed />
        </main>

        <header className="">
          <div className="mx-auto my-auto max-w-full pb-10">
            <h1 className="text-3xl font-bold leading-tight tracking-tight text-gray-900 text-center">
              更多时间线
            </h1>
          </div>
        </header>
        <main className="main-section  grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10 pb-20">
          <Feed />
          <Feed />
          <Feed />
          <Feed />
          <Feed />
          <Feed />
          <Feed />
          <Feed />
          <Feed />
        </main>
      </div>
      <Footer />
    </main>
  );
}
