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
