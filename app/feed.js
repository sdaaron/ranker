export default async function Example() {
  async function getData() {
    // const res = await fetch("https://feeds-api.shusida.com/news",
    const res = await fetch("http://0.0.0.0:8000/static_news", {
      next: { revalidate: 10 },
    });

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    const data = await res.json();
    // console.log(data);
    return data;
  }

  const activity = await getData();
  return (
    <div className="flow-root bg-white shadow-sm rounded-3xl z-40">
      <div className="  py-4 sm:px-6 rounded-t-3xl bg-zinc-100 shadow-sm">
        <h3 className="font-semibold leading-6 text-gray-900  text-center ">
          人工智能
        </h3>
      </div>

      <div className="feed-container p-10">
        <ul role="list" className="-mb-8 ">
          {activity.map((activityItem, activityItemIdx) => (
            <li key={activityItemIdx}>
              <div className="relative pb-8">
                {activityItemIdx !== activity.length - 1 ? (
                  <span
                    className="absolute left-5 top-5 -ml-px h-full w-0.5 bg-gray-200"
                    aria-hidden="true"
                  />
                ) : null}
                <div className="relative flex items-start space-x-3">
                  {/* {activityItem.type === "article" ?  */}
                  <>
                    <div className="relative">
                      <img
                        className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-400 ring-8 ring-white"
                        src={activityItem.image_url}
                        alt=""
                      />

                      {/* <span className="absolute -bottom-0.5 -right-1 rounded-tl bg-white px-0.5 py-px">
                        <ChatBubbleLeftEllipsisIcon
                          className="h-5 w-5 text-gray-400"
                          aria-hidden="true"
                        />
                      </span> */}
                    </div>
                    <div className="min-w-0 flex-1">
                      <div>
                        <div className="text-sm hover:text-base">
                          <a
                            href={activityItem.source_url}
                            className="font-medium text-gray-900"
                          >
                            {activityItem.title}
                          </a>
                        </div>
                        <p className="mt-0.5 text-sm text-gray-500">
                          {activityItem.source_name} 发布于 {activityItem.date}
                        </p>
                      </div>
                      <div className="mt-2 text-sm text-gray-700">
                        <p>{activityItem.summary}</p>
                      </div>
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
  );
}
