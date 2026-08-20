"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { getPreviousDay } from "../utils/DateTool";
import FetchFeeds from "../utils/FetchFeeds";
export default function LoadmoreArticle({ today, category }) {
  const { ref, inView } = useInView({});
  const [data, setData] = useState([]);
  const yesterday = getPreviousDay(today);
  const [date, setDate] = useState(yesterday);
  const stopDate = "2024-01-15";

  useEffect(() => {
    if (inView && date >= stopDate) {
      FetchFeeds(date, category).then((res) => {
        setData((current) => [...current, res]);
        setDate((current) => getPreviousDay(current));
      }).catch((error) => {
        console.error("Failed to load historical category feeds", {
          date,
          category,
          error,
        });
        throw error;
      });
    }
  }, [inView, date, category]);

  return (
    <>
      {data}
      {date >= stopDate ? (
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
