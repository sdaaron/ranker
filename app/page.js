import Banner from "./components/banner";
import Content from "./components/content";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-neutral-50">
      <Navbar />
      <Banner />
      <div className="body-section sm:px-3 sm:py-3 md:px-8 md:py-4">
        <Content created_date="2024-01-10" />
        <Content created_date="2024-01-09" />
        <Content created_date="2024-01-08" />
        {/* comment */}
      </div>
      <Footer />
    </main>
  );
}
