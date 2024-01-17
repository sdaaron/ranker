"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import Content from "./Content";

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

export default function LoadMore({ today }) {
  let previousDay = getPreviousDay(today);
  console.log("loadmore previousDay: ", previousDay);
  const { ref, inView } = useInView({});
  const [data, setData] = useState([]);
  const stopDate = "2024-01-15";
  const [date, setDate] = useState(previousDay);

  useEffect(() => {
    if (inView && date >= stopDate) {
      console.log("inView: ", inView);
      Content(date).then((res) => {
        console.log("res: ", res);
        setData([...data, res]);
        setDate((date) => getPreviousDay(date));
      });
    }
  }, [inView]);

  console.log("previousDay: ", previousDay);
  console.log("stopDate: ", stopDate);
  console.log(date >= stopDate);

  return (
    <>
      {data}
      {date >= stopDate ? (
        <section className="flex w-full items-center justify-center">
          <div ref={ref}>
            <Image
              src="./spinner.svg"
              alt="spinner"
              width={56}
              height={56}
              className="object-contain"
            />
          </div>
        </section>
      ) : (
        <div className="font-monot mb-20 flex items-center justify-center py-10 text-xl sm:text-2xl md:text-3xl lg:text-5xl">
          <p>Oops...没有更早的新闻了</p>
        </div>
      )}
    </>
  );
}
