"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { getNowInBeijing, getPreviousDate } from "../../utils/DateTool";
import FetchFeeds from "../../utils/FetchFeeds";
export default function LoadmoreArticle({ today, category }) {
  const { ref, inView } = useInView({});
  const [data, setData] = useState([]);
  let nowInBeijing = getNowInBeijing();
  const yesterday = getPreviousDate(nowInBeijing);
  console.log("today in loadmore: ", today);
  console.log("yesterday in loadmore: ", yesterday);
  const [date, setDate] = useState(yesterday);
  const stopDate = "2024-01-15";
  console.log("date: ", date);

  useEffect(() => {
    if (inView && date.format("YYYY-MM-DD") >= stopDate) {
      console.log("inView: ", inView);
      FetchFeeds(date.format("YYYY-MM-DD"), category).then((res) => {
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
          <div ref={ref} className="p-10">
            <Image
              src="/spinner.svg"
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
