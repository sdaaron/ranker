import { createClient } from "@supabase/supabase-js";

const supabaseURL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabasePublickKey = process.env.NEXT_PUBLIC_SUPABASE_KEY;
const supabase = createClient(supabaseURL, supabasePublickKey);

export default supabase;
