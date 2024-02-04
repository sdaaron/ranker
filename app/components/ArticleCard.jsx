import Image from "next/image";
import ImageWithFallback from "./ImageWithFallback";
export default function ArticleCard({
  id,
  title,
  summary,
  image_url,
  source_name,
  source_url,
  publish_date,
  created_at,
  display,
  index,
}) {
  console.log("index: ", index);
  return (
    <article
      key={id}
      className="flex w-full transform flex-col  items-start justify-center rounded-3xl transition duration-300 ease-in-out  hover:-translate-y-1 hover:scale-105 hover:shadow-2xl hover:shadow-gray-200 hover:ring-1 hover:ring-gray-200 xs:my-3 xs:px-4 xs:py-2 sm:my-6 md:my-6 md:px-10 md:py-5"
    >
      <div className="xxs:gap-2 flex items-center justify-start sm:gap-3 md:gap-10">
        <div className="md:min-h-24 relative rounded-lg xs:min-h-16 xs:min-w-16 sm:min-h-20 sm:min-w-20  md:min-w-24  lg:min-h-28 lg:min-w-28">
          <ImageWithFallback
            className="md:min-h-24 lg:min-w-2 rounded-lg bg-white xs:min-h-16 xs:min-w-16 sm:min-h-20 sm:min-w-20 md:min-w-24 lg:min-h-28"
            src={image_url.startsWith("http") ? image_url : "/placeholder.png"}
            fill={true}
            style={{ objectFit: "cover", objectPosition: "center" }}
            // width={96}
            // height={96}
            quality={25}
            placeholder="blur"
            blurDataURL={"/placeholder.png"}
            alt="news-thumbnail"
            fallbackSrc="/placeholder.png"
          />
          <div className="absolute -bottom-1 -right-1 z-50 rounded-full bg-white shadow-lg ring-1 ring-black ring-opacity-5">
            <Image
              src={`/int-${index + 1}.png`}
              width={24}
              height={24}
              className="rounded"
            />
          </div>
        </div>

        <div className="flex flex-col items-start justify-start">
          <div className="flex items-center gap-x-4 text-xs">
            <time dateTime={created_at} className="text-gray-500">
              {publish_date}
            </time>

            <a
              href={source_url}
              className="relative z-10 rounded-full bg-white px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
            >
              {display}
            </a>
          </div>
          <div className="group relative">
            <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-black">
              <a href={source_url}>
                <span className="absolute inset-0" />
                {title}
              </a>
            </h3>
            <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
              {summary}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}
