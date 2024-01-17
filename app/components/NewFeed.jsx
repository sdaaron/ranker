import blurImage from "../../public/placeholder.png";
import ImageWithFallback from "./ImageWithFallback";
// import ModalButton from "./ModalButton";
import MotionDiv from "./MotionDiv";
// import TimelineButton from "./TimelineButton";
export default async function Example(data, index) {
  const articles = data.slice(-10);
  const display = data[0].category;
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
        className="relative z-30 mb-4 flow-root bg-white"
      >
        {/* Feed卡片标题栏 */}
        <div className="relative mb-3 ml-2 flex flex-row items-center justify-start rounded-t-3xl">
          <img src="/logo.png" className="mr-4 h-6"></img>
          <h3 className="text-left font-mono text-3xl font-semibold leading-6 text-gray-900">
            {display}
          </h3>
        </div>

        {/* Feed卡片内容栏 */}
        <div className="feed-container">
          <ul
            role="list"
            className="grid-rows-10 grid-auto-rows min-auto grid flex-grow gap-2  px-2 py-3 sm:px-4 md:px-0"
          >
            {articles.map((articleItem, articleItemIdx) => (
              <li key={articleItemIdx} className="row-span-1">
                <div className="group   relative z-30 flow-root">
                  {articleItemIdx !== articles.length - 1 ? (
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
                            articleItem.image_url.startsWith("http")
                              ? articleItem.image_url
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
                      </div>
                      <div className="min-w-0 flex-1">
                        <div>
                          <div className="text-sm">
                            <a
                              href={articleItem.source_url}
                              className="line-clamp-none text-base text-blue-600  hover:line-clamp-none hover:text-blue-700"
                            >
                              {articleItem.title}
                            </a>
                          </div>
                          <p className="text-xxs text-gray-500">
                            {articleItem.source_name} 发布于{" "}
                            {articleItem.publish_date}
                          </p>
                        </div>
                        <div className="mt-0.5 overflow-hidden text-sm text-gray-700 transition-all duration-300">
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
