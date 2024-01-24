import Image from "next/image";
import blurImage from "../../public/placeholder.png";
import supabase from "../utils/SupabaseClient";
import ImageWithFallback from "./ImageWithFallback";
import ModalButton from "./ModalButton";
import MotionDiv from "./MotionDiv";
// import TimelineButton from "./TimelineButton";
export default async function Example({
  // key,
  category,
  display,
  created_date,
  index,
}) {
  const { data, error } = await supabase
    .from("feeds")
    .select()
    .eq("category", category)
    .eq("created_date", created_date)
    .order("importance", { ascending: false });
  // .limit(10);
  console.log(`fetching category ${category} in ${created_date}`);
  if (!data || data.length === 0) {
    console.log("news: there is no news");
    return null;
  }
  console.log(`got ${data.length} news`);
  const newsData = data.slice(-10);
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
        className="relative z-30 my-5 flow-root bg-white"
      >
        {/* Feed卡片标题栏 */}
        <div className="relative mb-3 ml-2 flex flex-row items-center justify-start rounded-t-3xl">
          <img src="/logo.png" className="mr-4 h-6"></img>
          <h3 className="text-left font-mono text-3xl font-semibold leading-6 text-gray-900">
            {display}
          </h3>
          <ModalButton category={category} />
        </div>

        {/* Feed卡片内容栏 */}
        <div className="feed-container">
          <ul
            role="list"
            className="grid-rows-10 grid-auto-rows min-auto grid flex-grow gap-2  px-2 py-3 sm:px-4 md:px-0"
          >
            {newsData.map((item, itemIdx) => (
              <li key={itemIdx} className="row-span-1">
                <div className="group   relative z-30 flow-root">
                  {itemIdx !== newsData.length - 1 ? (
                    <span
                      className="absolute left-6 top-5 -ml-px h-full w-0.5 bg-gray-200"
                      aria-hidden="true"
                    />
                  ) : null}

                  <div className="relative flex transform items-start space-x-2 rounded-lg p-1 transition duration-300 ease-in-out hover:scale-105   ">
                    <>
                      <div className="relative h-10 w-10 transform transition duration-300 ease-in-out">
                        <ImageWithFallback
                          className="flex items-center justify-center  rounded-lg object-cover object-center ring-8 ring-white "
                          src={
                            item.image_url.startsWith("http")
                              ? item.image_url
                              : blurImage
                          }
                          fill={true}
                          quality={10}
                          placeholder="blur"
                          blurDataURL={"/placeholder.png"}
                          alt="news-thumbnail"
                          fallbackSrc="/placeholder.png"
                          sizes="2.5rem"
                        />
                        <div className="absolute -bottom-1 -right-1 z-50 rounded-full bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                          <Image
                            src={`/int-${itemIdx + 1}.png`}
                            width={24}
                            height={24}
                            className="rounded"
                          />
                        </div>
                      </div>
                      <div className="min-w-0 flex-1">
                        <div>
                          <div className="text-sm">
                            <a
                              target="_blank"
                              rel="noopener noreferrer"
                              href={item.source_url}
                              className="line-clamp-none text-base text-blue-600
                              hover:line-clamp-none hover:text-blue-700"
                            >
                              {item.title}
                            </a>
                          </div>
                          <p className="line-clamp-1 text-xxs text-gray-500">
                            {item.source_name} 发布于 {item.publish_date}
                          </p>
                        </div>
                        <div className="mt-0.5 overflow-hidden text-sm text-gray-700 transition-all duration-300">
                          <a href={item.source_url}>
                            <p className="line-clamp-3 hover:line-clamp-none hover:text-black ">
                              {item.summary}
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
