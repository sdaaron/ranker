function getFormattedDate(date) {
  let year = date.getFullYear();
  let month = date.getMonth() + 1; // 月份是从 0 开始的
  let day = date.getDate();

  let formattedDate =
    year +
    "-" +
    String(month).padStart(2, "0") +
    "-" +
    String(day).padStart(2, "0");

  return formattedDate;
}

function getPreviousDay(dateString) {
  let previousDay = new Date(dateString);

  previousDay.setDate(previousDay.getDate() - 1);
  return getFormattedDate(previousDay);
}
