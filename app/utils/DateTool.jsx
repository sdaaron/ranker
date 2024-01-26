import moment from "moment-timezone";
moment.tz.setDefault("Asia/Shanghai");

export function getNowInBeijing() {
  let nowInBeijing = moment();
  return nowInBeijing;
}

export function getPreviousDate(date) {
  let previousDate = date.clone().subtract(1, "days");
  console.log(previousDate.format());
  return previousDate;
}
