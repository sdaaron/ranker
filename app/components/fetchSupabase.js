import { createClient } from "@supabase/supabase-js";

export default async function fetchContent(created_date, category) {
  const supabaseURL = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabasePublickKey = process.env.NEXT_PUBLIC_SUPABASE_KEY;
  const supabase = createClient(supabaseURL, supabasePublickKey);
  const nextPage = pagesLoaded + 1;
  const { data, error } = await supabase
    .from("news")
    .select()
    .eq("created_date", created_date)
    .eq("category", category);

  if (data) {
    setContent(data);
    setPagesLoaded(nextPage);
  }
}
