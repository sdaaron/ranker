import { createClient } from "@supabase/supabase-js";
import blurImage from "../../public/transparent_placeholder.png";
import ImageWithFallback from "./imageFallback";
import ModalButton from "./modal";
export default async function Example(props) {
  const created_date = props.created_date;
  console.log("created_date: ", created_date);
  const supabaseURL = process.env.SUPABASE_URL;
  const supabaseKey = process.env.SUPABASE_KEY;
  const supabase = createClient(supabaseURL, supabaseKey);
  console.log(props.category, created_date);
  const { data, error } = await supabase
    .from("news")
    .select()
    .eq("category", props.category)
    .eq("created_date", created_date);
  console.log("读取supabase数据，获取到： ", data, error);
  const news = data;
  if (!news || news.length === 0) return null;
  const articles = data.slice(-10);

  return (
    <>
      <div className="flow-root bg-white z-30 mb-4  hover:shadow-md hover:ring-1 hover:ring-gray-200 sm:rounded-none md:rounded-lg">
        {/* Feed卡片标题栏 */}
        <div className=" relative py-3 sm:px-6 rounded-t-3xl border-b border-gray-100 flex flex-row items-center justify-center">
          <img src="/logo.png" className="h-4 mr-1"></img>
          <h3 className="font-semibold leading-6 text-gray-900 text-center">
            {props.display}
          </h3>
          <ModalButton />
        </div>

        {/* Feed卡片内容栏 */}
        <div className="feed-container p-5 flex flex-col justify-evenly">
          <ul
            role="list"
            className="grid grid-rows-10 grid-auto-rows min-auto flex-grow"
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
                          className="flex  items-center justify-center rounded-lg ring-8 ring-white bg-white object-cover object-center"
                          src={
                            articleItem.image_url.startsWith("http")
                              ? articleItem.image_url
                              : blurImage
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
                              className="text-sm hover:text-blue-800 text-blue-600  line-clamp-none hover:line-clamp-none "
                            >
                              {articleItem.title}
                            </a>
                          </div>
                          <p className="mt-0.5 text-sm text-gray-500">
                            {articleItem.source_name} 发布于{" "}
                            {articleItem.publish_date}
                          </p>
                        </div>
                        <div className="mt-2 text-xs text-gray-700 overflow-hidden transition-all hover:max-h-96 duration-300">
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
    </>
  );
}
