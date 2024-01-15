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
}) {
  return (
    <article
      key={id}
      className="flex w-full transform flex-col items-start justify-between rounded-3xl  px-10 py-5 transition duration-300  ease-in-out hover:-translate-y-1 hover:scale-105 hover:shadow-2xl hover:shadow-gray-200 hover:ring-1 hover:ring-gray-200"
    >
      <div className="flex items-center justify-start gap-10">
        <div className="min-h-28 min-w-28 relative">
          <ImageWithFallback
            className="min-h-28 min-w-28 rounded-xl bg-white"
            src={image_url.startsWith("http") ? image_url : "/placeholder.png"}
            // fill={true}
            style={{ objectFit: "cover", objectPosition: "center" }}
            width={96}
            height={96}
            quality={25}
            placeholder="blur"
            blurDataURL={"/placeholder.png"}
            alt="news-thumbnail"
            fallbackSrc="/placeholder.png"
          />
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
