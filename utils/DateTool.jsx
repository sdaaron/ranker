import moment from "moment-timezone";
moment.tz.setDefault("Asia/Shanghai");

export function getNowInBeijing() {
  let nowInBeijing = moment();
  return nowInBeijing;
}

// export function getPreviousDate(date) {
//   let previousDate = date.clone().subtract(1, "days");
//   console.log(previousDate.format());
//   return previousDate;
// }

export function getPreviousDate(date) {
  let previousDate;

  if (date.format("YYYY-MM-DD") === "2024-07-17") {
    // 这里是因为 6 月 17 日到 7 月 16 日之前有一个月服务下线了没有更新数据，所以中间跳过一个月的数据
    previousDate = date.clone().subtract(32, "days");
  } else {
    previousDate = date.clone().subtract(1, "days");
  }

  console.log(previousDate.format());
  return previousDate;
}
