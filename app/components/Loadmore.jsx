"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import MoreContent from "./Content";
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

let date = new Date();
date = getPreviousDay(date);

export default function LoadMore() {
  const { ref, inView } = useInView({});
  const [data, setData] = useState([]);
  const stopDate = new Date("2024-01-08");

  useEffect(() => {
    if (inView && date > stopDate) {
      MoreContent(getFormattedDate(date)).then((res) => {
        setData([...data, res]);
        date = getPreviousDay(date);
      });
    }
  }, [inView]);

  return (
    <>
      {data}
      {date > stopDate ? (
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
