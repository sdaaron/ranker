"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
export default function LoadmoreArticle() {
  const { ref, inView } = useInView({});
  const [data, setData] = useState([]);
  const [page, setPage] = useState(2);
  const stopDate = 5;

  useEffect(() => {
    if (inView && date >= stopDate) {
      console.log("inView: ", inView);
    }
  }, [inView]);
  return (
    <>
      {data}
      {page >= 5 ? (
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
