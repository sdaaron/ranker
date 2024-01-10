import Banner from "./components/banner";
import Content from "./components/content";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
export default async function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-zinc-50">
      <Navbar />
      <Banner />
      <div className="body-section lg:py-6 md:px-8 md:py-4 sm:px-3 sm:py-3">
        <Content created_date="2024-01-10" />
        <Content created_date="2024-01-09" />
        <Content created_date="2024-01-08" />
      </div>
      <Footer />
    </main>
  );
}
