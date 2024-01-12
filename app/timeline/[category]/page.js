import ImageWithFallback from "../../components/ImageWithFallback";
import supabase from "../../components/supabaseClient";
export default async function Component({ params }) {
  console.log("params: ", params);
  const category = params.category;
  console.log("category: ", category);
  const { data, error } = await supabase
    .from("news")
    .select()
    .eq("category", category)
    .order("publish_date", { ascending: false });

  console.log("读取supabase数据，获取到： ", data, error);
  if (!data || data.length === 0) return null;

  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };
  const displayMap = new Map([
    ["politics", "政治"],
    ["economy", "经济"],
    ["technology", "科技"],
    ["military", "军事"],
    ["finance", "金融"],
    ["culture", "文化"],
    ["ai", "人工智能"],
    ["computer", "计算机"],
    ["new_energy", "新能源"],
  ]);

  return (
    <>
      <div className="relative z-30 flex justify-center">
        <div className="flex max-w-7xl flex-col items-center justify-start ">
          {/* Feed卡片标题栏 */}
          <div className="relative my-16 flex flex-row items-center justify-center gap-4 rounded-t-3xl border-b border-gray-100 py-3 sm:px-6">
            <img src="/logo.png" className="h-10"></img>
            <h3 className="text-center text-base font-semibold leading-6 text-gray-900 sm:text-lg md:text-2xl lg:text-5xl">
              {displayMap.get(category)}
            </h3>
            {/* <ModalButton category={category} /> */}
            {/* <TimelineButton category={category} /> */}
          </div>

          {/* Feed卡片内容栏 */}
          <div className="feed-container flex max-w-4xl flex-col justify-evenly px-2 pb-20 sm:px-4 md:px-20">
            <ul
              role="list"
              className="grid-rows-10 grid-auto-rows min-auto grid flex-grow gap-4"
            >
              {data.map((articleItem, articleItemIdx) => (
                <li key={articleItemIdx} className="row-span-1">
                  <div className="relative py-2">
                    {articleItemIdx !== data.length - 1 ? (
                      <span
                        className="absolute left-5 top-5 -ml-px h-full w-0.5 bg-gray-200"
                        aria-hidden="true"
                      />
                    ) : null}
                    <div className="relative flex items-start space-x-5">
                      <>
                        <div className="relative h-10 w-10">
                          <ImageWithFallback
                            className="flex  items-center justify-center rounded-lg bg-white object-cover object-center ring-8 ring-white"
                            src={
                              articleItem.image_url.startsWith("http")
                                ? articleItem.image_url
                                : "/transparent_placeholder.png"
                            }
                            fill={true}
                            quality={10}
                            placeholder="blur" // 使用模糊效果作为加载占位符
                            blurDataURL={"/transparent_placeholder.png"} // 模糊效果的图像源
                            alt="news-thumbnail"
                            fallbackSrc="/transparent_placeholder.png"
                            sizes="2.5rem"
                          />
                        </div>
                        <div className="min-w-0 flex-1">
                          <div>
                            <div className="text-sm hover:underline ">
                              <a
                                href={articleItem.source_url}
                                className="line-clamp-none text-xl text-blue-600  hover:line-clamp-none hover:text-blue-800 "
                              >
                                {articleItem.title}
                              </a>
                            </div>
                            <p className="mt-0.5 text-sm text-gray-500">
                              {articleItem.source_name} 发布于{" "}
                              {articleItem.publish_date}
                            </p>
                          </div>
                          <div className="mt-2 overflow-hidden text-base text-gray-700 transition-all duration-300 hover:max-h-96">
                            <a href={articleItem.source_url}>
                              <p className="line-clamp-none hover:line-clamp-none hover:underline ">
                                {articleItem.summary}
                              </p>
                            </a>
                          </div>
                        </div>
                      </>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
