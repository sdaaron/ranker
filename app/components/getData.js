import { createClient } from "@supabase/supabase-js";
// Create a single supabase client for interacting with your database
const supabase = createClient(
  "https://lwgmvausawqeydrcvvff.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx3Z212YXVzYXdxZXlkcmN2dmZmIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcwNDYxNTQ2MywiZXhwIjoyMDIwMTkxNDYzfQ.rlfd0ugJQ7PHkRzqahG4Gjh5H74d28rD40fDPWIdOeA"
);

const { data, error } = await supabase.from("news").select();
console.log(data, error);

export default data;

// async function getData() {
//   const requestBody = {
//     category: props.category ? props.category : "NULL",
//   };
//   const apiEndpoint = process.env.NEWS_API_ENDPOINT;
//   const res = await fetch(apiEndpoint, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(requestBody),
//     next: { revalidate: 1 },
//   });

//   if (!res.ok) {
//     console.log(requestBody);
//     throw new Error("Failed to fetch data");
//   }

//   const data = await res.json();
//   console.log(
//     `读取 ${requestBody.category} 数据,获取到${data.length}条数据.`
//   );
//   return data;
// }

// const articles = await getData();

// var currentDate = new Date();

// // 格式化年份为两位数
// var year = currentDate.getFullYear().toString().substr(-2);

// // 格式化月份，确保是两位数
// var month = (currentDate.getMonth() + 1).toString().padStart(2, "0");

// // 格式化日期，确保是两位数
// var day = currentDate.getDate().toString().padStart(2, "0");

// // 拼接字符串
// var formattedDate = year + "/" + month + "/" + day;

// console.log(formattedDate);
