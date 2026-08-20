import { createClient } from "@supabase/supabase-js";

const supabaseURL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabasePublishableKey = process.env.NEXT_PUBLIC_SUPABASE_KEY;

if (!supabaseURL || !supabasePublishableKey) {
  throw new Error(
    "Missing NEXT_PUBLIC_SUPABASE_URL or NEXT_PUBLIC_SUPABASE_KEY",
  );
}

const supabase = createClient(supabaseURL, supabasePublishableKey);
export default supabase;
