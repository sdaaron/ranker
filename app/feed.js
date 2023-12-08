import { ChatBubbleLeftEllipsisIcon } from "@heroicons/react/20/solid";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
// test

export default async function Example() {
  async function getData() {
    const res = await fetch("https://feeds-api.shusida.com/news", {
      next: { revalidate: 10 },
    });

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    // 只调用一次res.json()并将结果存储在变量中
    const data = await res.json();
    // console.log(data);
    return data;
  }

  const data = await getData();
  const activity = data.content;
  return (
    <div className="flow-root bg-white shadow-sm rounded-3xl z-40">
      <div className="border-b border-gray-200 bg-white py-4 sm:px-6 rounded-t-3xl">
        <h3 className="font-semibold leading-6 text-gray-900 text-lg text-center">
          人工智能
        </h3>
      </div>

      <div className="feed-container p-12">
        <ul role="list" className="-mb-8">
          {activity.map((activityItem, activityItemIdx) => (
            <li key={activityItem.id}>
              <div className="relative pb-8">
                {activityItemIdx !== activity.length - 1 ? (
                  <span
                    className="absolute left-5 top-5 -ml-px h-full w-0.5 bg-gray-200"
                    aria-hidden="true"
                  />
                ) : null}
                <div className="relative flex items-start space-x-3">
                  {activityItem.type === "article" ? (
                    <>
                      <div className="relative">
                        <img
                          className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-400 ring-8 ring-white"
                          src={activityItem.imageUrl}
                          alt=""
                        />

                        <span className="absolute -bottom-0.5 -right-1 rounded-tl bg-white px-0.5 py-px">
                          <ChatBubbleLeftEllipsisIcon
                            className="h-5 w-5 text-gray-400"
                            aria-hidden="true"
                          />
                        </span>
                      </div>
                      <div className="min-w-0 flex-1">
                        <div>
                          <div className="text-sm">
                            <a
                              href={activityItem.person.href}
                              className="font-medium text-gray-900"
                            >
                              {activityItem.person.name}
                            </a>
                          </div>
                          <p className="mt-0.5 text-sm text-gray-500">
                            虎嗅新闻 发布于 {activityItem.date}
                          </p>
                        </div>
                        <div className="mt-2 text-sm text-gray-700">
                          <p>{activityItem.article}</p>
                        </div>
                      </div>
                    </>
                  ) : null}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
