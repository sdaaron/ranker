"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { getNowInBeijing, getPreviousDate } from "../utils/DateTool";
// import Content from "../archive/Content";
import Content from "./Content";

export default function LoadMore() {
  let nowInBeijing = getNowInBeijing();
  // console.log("nowInBeijing: ", nowInBeijing);
  let previousDay = getPreviousDate(nowInBeijing);
  // console.log("previousDay: ", previousDay);
  const { ref, inView } = useInView({});
  const [data, setData] = useState([]);
  const stopDate = "2024-01-15";
  const [date, setDate] = useState(previousDay);
  useEffect(() => {
    if (inView && date.format("YYYY-MM-DD") >= stopDate) {
      // setDate((date) => getPreviousDate(date));
      Content(date.format("YYYY-MM-DD")).then((res) => {
        console.log("res: ", res);
        setData([...data, res]);
        setDate((date) => getPreviousDate(date));
      });
    }
  }, [inView]);

  return (
    <>
      {data}
      {date.format("YYYY-MM-DD") >= stopDate ? (
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
