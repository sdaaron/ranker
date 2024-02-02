import Banner from "./components/Banner";
import Loadmore from "./components/Loadmore";
import { getNowInBeijing } from "./utils/DateTool";
import FeedGroup from "./components/FeedGroup";
export default async function Home() {
  let today = getNowInBeijing().format("YYYY-MM-DD");
  let feedGroupData = await FeedGroup(today);

  return (
    <main className="bg-white-50 flex min-h-screen flex-col">
      <Banner />
      <div className="body-section sm:px-3 sm:py-3 md:px-10 md:py-4 xl:px-12 xl:py-6">
        {feedGroupData}
        <Loadmore today={today} />
      </div>
    </main>
  );
}
