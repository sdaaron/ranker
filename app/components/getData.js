async function fetchData(props) {
  "use server";
  const supabaseURL = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabasePublickKey = process.env.NEXT_PUBLIC_SUPABASE_KEY;
  const supabase = createClient(supabaseURL, supabasePublickKey);

  const { data, error } = await supabase
    .from("news")
    .select()
    .eq("category", props.category)
    .eq("created_date", created_date);

  if (data) {
    setContent(data);
    setDataLoaded(true);
  }
}
