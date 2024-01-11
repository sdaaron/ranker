"use client";
import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import MoreContent from "./moreContent";
import Spinner from "./spinner";

function getFormattedDate(date) {
  console.log("date: ", date);
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

function getPreviousDay(somedate) {
  somedate.setDate(somedate.getDate() - 1);
  return somedate;
}

export default function LoadMore() {
  const { ref, inView } = useInView({});
  const [data, setData] = useState([]);
  let date = new Date();
  console.log("intial_date: ", date);
  date = getPreviousDay(date);
  console.log("previousDate: ", date);
  const stopDate = new Date("2024-01-08"); // 停止加载的日期
  const currentDate = useRef(date); // 使用 useRef 来跟踪当前日期

  useEffect(() => {
    if (inView && currentDate.current > stopDate) {
      MoreContent(getFormattedDate(currentDate.current)).then((res) => {
        setData([...data, res]);
        currentDate.current = getPreviousDay(currentDate.current);
      });
    }
  }, [inView, data]);

  return (
    <>
      {data}
      {currentDate.current <= stopDate ? (
        <div className="font-monot flex items-center justify-center py-10 text-5xl sm:text-3xl md:text-5xl">
          <p>Oops...没有更早的新闻了</p>
        </div>
      ) : (
        <div className="flex items-center justify-center" ref={ref}>
          <Spinner />
        </div>
      )}
    </>
  );
}