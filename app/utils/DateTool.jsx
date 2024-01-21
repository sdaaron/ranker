export function getFormattedDate(dateObj) {
  let now = dateObj ? new Date(dateObj) : new Date();
  let year = now.getFullYear();
  let month = (now.getMonth() + 1).toString().padStart(2, "0");
  let day = now.getDate().toString().padStart(2, "0");
  return `${year}-${month}-${day}`;
}

export function getPreviousDay(dateString) {
  let previousDay = new Date(dateString);

  previousDay.setDate(previousDay.getDate() - 1);
  return getFormattedDate(previousDay);
}
// import moment from "moment-timezone";

// export function getFormattedDate(dateObj) {
//   // 使用 moment-timezone 处理日期，确保时区为东八区
//   let now = dateObj
//     ? moment.tz(dateObj, "Asia/Shanghai")
//     : moment.tz("Asia/Shanghai");
//   return now.format("YYYY-MM-DD");
// }

// export function getPreviousDay(dateString) {
//   // 使用 moment-timezone 解析并处理日期
//   let previousDay = moment.tz(dateString, "Asia/Shanghai").subtract(1, "days");
//   return previousDay.format("YYYY-MM-DD");
// }

// function getFormattedDate(date) {
//   let year = date.getFullYear();
//   let month = date.getMonth() + 1; // 月份是从 0 开始的
//   let day = date.getDate();

//   let formattedDate =
//     year +
//     "-" +
//     String(month).padStart(2, "0") +
//     "-" +
//     String(day).padStart(2, "0");

//   return formattedDate;
// }

// function getPreviousDay(dateString) {
//   let previousDay = new Date(dateString);

//   previousDay.setDate(previousDay.getDate() - 1);
//   return getFormattedDate(previousDay);
// }
