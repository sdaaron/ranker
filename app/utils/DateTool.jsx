export function getFormattedDate(dateObj) {
  const date = dateObj ? new Date(dateObj) : new Date();
  if (Number.isNaN(date.getTime())) {
    throw new Error(`Invalid date: ${dateObj}`);
  }

  return new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Shanghai",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(date);
}

export function getPreviousDay(dateString) {
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(dateString);
  if (!match) {
    throw new Error(`Invalid ISO date: ${dateString}`);
  }

  const previousDay = new Date(
    Date.UTC(Number(match[1]), Number(match[2]) - 1, Number(match[3]) - 1),
  );
  return previousDay.toISOString().slice(0, 10);
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
