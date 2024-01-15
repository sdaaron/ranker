import blurImage from "../../public/placeholder.png";
import supabase from "../lib/SupabaseClient";
import ImageWithFallback from "./ImageWithFallback";
import ModalButton from "./modalButton";
import MotionDiv from "./motionDiv";
import TimelineButton from "./timelineButton";
export default async function Example({
  // key,
  category,
  display,
  created_date,
  index,
}) {
  const { data, error } = await supabase
    .from("news")
    .select()
    .eq("category", category)
    .eq("created_date", created_date);
  // .order("publish_date", { ascending: false });
  const news = data;
  if (!news || news.length === 0) return null;
  const articles = data.slice(-10);
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <>
      <MotionDiv
        variants={variants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 1, delay: index * 0.25, ease: "easeInOut" }}
        className="relative z-30 mb-4 flow-root bg-white hover:shadow-2xl hover:shadow-gray-200 hover:ring-1 hover:ring-gray-200  sm:rounded-none md:rounded-3xl"
      >
        {/* Feed卡片标题栏 */}
        <div className=" relative flex flex-row items-center justify-center rounded-t-3xl border-b border-gray-100 py-3 sm:px-6">
          <img src="/logo.png" className="mr-1 h-4"></img>
          <h3 className="text-center font-semibold leading-6 text-gray-900">
            {display}
          </h3>
          <ModalButton category={category} />
          <TimelineButton category={category} />
        </div>

        {/* Feed卡片内容栏 */}
        <div className="feed-container flex flex-col justify-evenly p-8">
          <ul
            role="list"
            className="grid-rows-10 grid-auto-rows min-auto grid flex-grow"
          >
            {articles.map((articleItem, articleItemIdx) => (
              <li key={articleItemIdx} className="row-span-1">
                <div className="relative py-2">
                  {articleItemIdx !== articles.length - 1 ? (
                    <span
                      className="absolute left-5 top-5 -ml-px h-full w-0.5 bg-gray-200"
                      aria-hidden="true"
                    />
                  ) : null}
                  <div className="relative flex items-start space-x-3">
                    <>
                      <div className="relative h-10 w-10">
                        <ImageWithFallback
                          className="flex  items-center justify-center rounded-lg bg-white object-cover object-center ring-8 ring-white"
                          src={
                            articleItem.image_url.startsWith("http")
                              ? articleItem.image_url
                              : blurImage
                          }
                          fill={true}
                          quality={10}
                          placeholder="blur" // 使用模糊效果作为加载占位符
                          blurDataURL={"/placeholder.png"} // 模糊效果的图像源
                          alt="news-thumbnail"
                          fallbackSrc="/placeholder.png"
                          sizes="2.5rem"
                        />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div>
                          <div className="text-sm hover:underline ">
                            <a
                              href={articleItem.source_url}
                              className="line-clamp-none text-sm text-blue-600  hover:line-clamp-none hover:text-blue-700 "
                            >
                              {articleItem.title}
                            </a>
                          </div>
                          <p className="mt-0.5 text-sm text-gray-500">
                            {articleItem.source_name} 发布于{" "}
                            {articleItem.publish_date}
                          </p>
                        </div>
                        <div className="mt-2 overflow-hidden text-xs text-gray-700 transition-all duration-300 hover:max-h-96">
                          <a href={articleItem.source_url}>
                            <p className="line-clamp-none hover:line-clamp-none hover:text-black ">
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
      </MotionDiv>
    </>
  );
}