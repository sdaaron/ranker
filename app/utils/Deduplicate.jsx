// if (!data) {
//   return <div>oops...没有找到新闻...</div>;
// }

// // 创建一个 Map 来跟踪每个不同 original_title 的最新项
// const uniqueItemsMap = new Map();

// // 遍历数据并更新 uniqueItemsMap
// data.forEach((item) => {
//   const { original_title, publish_date } = item;

//   if (
//     !uniqueItemsMap.has(original_title) ||
//     publish_date > uniqueItemsMap.get(original_title).publish_date
//   ) {
//     uniqueItemsMap.set(original_title, item);
//   }
// });

// // 现在 uniqueItemsMap 包含了每个 original_title 的最新项
// const uniqueData = Array.from(uniqueItemsMap.values());

// // uniqueData 现在包含了唯一的、最新的项
// console.log(uniqueData);

// const topNews = uniqueData;
