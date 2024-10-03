import supabase from "../utils/SupabaseClient";
import { getNowInBeijing } from "../utils/DateTool";
let today = getNowInBeijing().format("YYYY-MM-DD");

const fs = require("fs");
const path = require("path");

const data = await supabase.from("feeds").select().eq("created_date", today);

data.forEach((item, index) => {
  const mdxContent = `---
标题: ${item.title}
---

${post.summary}
  `;

  fs.writeFileSync(
    path.join(__dirname, `posts/post${index + 1}.mdx`),
    mdxContent,
  );
});
