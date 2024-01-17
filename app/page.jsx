import Banner from "./components/Banner";
import Content from "./components/Content";
import Loadmore from "./components/Loadmore";
import supabase from "./lib/SupabaseClient";

export default async function Home() {
  // const { data, error } = await supabase
  //   .from("feeds")
  //   .select("created_date")
  //   .order("created_date", { ascending: false })
  //   .limit(1);
  const { data, error } = await supabase
    .from("feeds")
    .select("created_date")
    .order("created_date", { ascending: false })
    .limit(10);

  console.log("page date: ", data);
  let today = data[0].created_date;

  console.log("today: ", today);
  console.log("today: ", typeof today);

  const contentData = await Content(today);
  return (
    <main className="bg-white-50 flex min-h-screen flex-col">
      <Banner />
      <div className="body-section sm:px-3 sm:py-3 md:px-10 md:py-4 xl:px-12 xl:py-6">
        <div>{contentData}</div>
        <Loadmore today={today} />
      </div>
    </main>
  );
}
