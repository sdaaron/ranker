// import { createClient } from "@supabase/supabase-js";

// export default async function fetchData() {
//   const supabaseURL = process.env.NEXT_PUBLIC_SUPABASE_URL;
//   const supabasePublickKey = process.env.NEXT_PUBLIC_SUPABASE_KEY;
//   const supabase = createClient(supabaseURL, supabasePublickKey);

//   const { data, error } = await supabase
//     .from("news")
//     .select()
//     .eq("category", "politics");

//   if (data) {
//     // console.log(data);
//     // const latestDate = data[0].created_date;
//     // return latestDate;

//     let maxDateObject = data.reduce((max, obj) => {
//       return new Date(obj.created_date) > new Date(max.created_date)
//         ? obj
//         : max;
//     });
//     let latestDate = maxDateObject.created_date;
//     console.log("latestDate: ", latestDate);
//     return latestDate;
//   } else {
//     console.log(error);
//     console.log("Failed to fetch latestDate from Supabase");
//     return null;
//   }
// }

function updateDayBefore(date) {
  // 将 today 字符串转换为 Date 对象
  let todayDate = new Date(date);

  // 减去一天的时间 (1000 毫秒 * 60 秒 * 60 分钟 * 24 小时)
  let dayBeforeDate = new Date(todayDate.getTime() - 1000 * 60 * 60 * 24);

  // 将 Date 对象转换回 yyyy-mm-dd 格式的字符串
  let dayBefore = dayBeforeDate.toISOString().split("T")[0];

  return dayBefore;
}

// 使用函数
let today = "2024-01-10";
let dayBefore = updateDayBefore(date);
console.log(dayBefore); // 输出 "2024-01-09"
