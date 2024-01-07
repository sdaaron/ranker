// import { useState } from "react";
import ImageWithFallback from "./imageFallback";
import ModalButton from "./modal";
export default async function Example(props) {
  async function getData() {
    const requestBody = {
      category: props.category ? props.category : "NULL",
    };
    // const res = await fetch("https://api.ranker.cc/news", {
    const res = await fetch("http://0.0.0.0:8000/news", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
      next: { revalidate: 1 },
    });

    if (!res.ok) {
      console.log(requestBody);
      throw new Error("Failed to fetch data");
    }

    const data = await res.json();
    console.log(
      `读取 ${requestBody.category} 数据,获取到${data.length}条数据.`
    );
    return data;
  }

  const articles = await getData();
  return (
    <>
      <div className="sm:m-1 md:m-0 lg:m-0 flow-root bg-white rounded-xl z-30 mb-4 hover:bg-gradient-to-br hover:from-white hover:to-zinc-50 hover:shadow-sm hover:ring-1 hover:ring-gray-200">
        <div className=" relative py-3 sm:px-6 rounded-t-3xl border-b border-gray-100 flex flex-row items-center justify-center">
          <img src="/logo.png" className="h-4 mr-1"></img>
          <h3 className="font-semibold leading-6 text-gray-900 text-center">
            {props.category ? props.category : "NULL"}
          </h3>
          <ModalButton />
        </div>

        <div className="feed-container p-5 ">
          <ul role="list" className="">
            {articles.map((articleItem, articleItemIdx) => (
              <li key={articleItemIdx}>
                <div className="relative py-2">
                  {articleItemIdx !== articles.length - 1 ? (
                    <span
                      className="absolute left-5 top-5 -ml-px h-full w-0.5 bg-gray-200"
                      aria-hidden="true"
                    />
                  ) : null}
                  <div className="relative flex items-start space-x-3">
                    {/* {articleItem.type === "article" ?  */}
                    <>
                      <div className="relative h-10 w-10">
                        <ImageWithFallback
                          className="flex  items-center justify-center rounded-lg ring-8 ring-white bg-white"
                          src={
                            articleItem.image_url.startsWith("http")
                              ? articleItem.image_url
                              : "/placeholder3.png"
                          }
                          layout="fill"
                          objectFit="cover" // 从中心裁剪以保持图像比例
                          placeholder="blur" // 使用模糊效果作为加载占位符
                          blurDataURL={"/placeholder3.png"} // 模糊效果的图像源
                          alt="news-thumbnail"
                          // fallbackSrc="/placeholder.jpeg"
                          fallbackSrc="/placeholder3.png"
                          objectPosition="left"
                        />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div>
                          <div className="text-sm hover:underline ">
                            <a
                              href={articleItem.source_url}
                              className="font-medium text-sm hover:text-blue-800 text-blue-600  line-clamp-none hover:line-clamp-none"
                            >
                              {articleItem.title}
                            </a>
                          </div>
                          <p className="mt-0.5 text-sm text-gray-500">
                            {articleItem.source_name} 发布于 {articleItem.date}
                          </p>
                        </div>
                        <div className="mt-2 text-xs text-gray-700 overflow-hidden transition-all hover:max-h-96 duration-300">
                          <a href={articleItem.source_url}>
                            <p className="line-clamp-none hover:line-clamp-none hover:underline">
                              {articleItem.summary}
                            </p>
                          </a>
                        </div>

                        {/* <div className="mt-2 text-xs text-gray-700 hover:underline line-clamp-2">
                        <a href={articleItem.source_url}>
                          <p>{articleItem.summary}</p>
                        </a>
                      </div> */}
                      </div>
                    </>
                    {/* : null} */}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
