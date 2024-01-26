export function getBeijingDate() {
  const moment = require("moment-timezone");
  let today = moment().tz("Asia/Shanghai").format("YYYY-MM-DD");
  return today;
}

export function getFormattedDate(inputDate) {
  let date = new Date(inputDate);
  let formattedDate = date.toISOString().split("T")[0];
  return formattedDate;
}

console.log("getFormattedDate: ", getFormattedDate("2021-08-01T16:00:00.000Z"));
export function getPreviousDay(dateString) {
  let previousDay = new Date(dateString);
  previousDay.setDate(previousDay.getDate() - 1);
  return getFormattedDate(previousDay);
}
