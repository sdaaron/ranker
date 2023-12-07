import { ChatBubbleLeftEllipsisIcon } from "@heroicons/react/20/solid";

const placeholder =
  "谷歌发布Gemini，一种原生多模态大模型，在32项基准测试中的30项上击败ChatGPT，部分测试上超过人类专家水平。";

const activity = [
  {
    id: 1,
    type: "article",
    person: { name: "《谷歌发布Gemini原生多模态大模型》", href: "#" },
    imageUrl:
      "https://images.unsplash.com/photo-1520785643438-5bf77931f493?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80",
    article: placeholder,
    date: "2023-12-07",
  },
  {
    id: 2,
    type: "article",
    person: { name: "《谷歌发布Gemini原生多模态大模型》", href: "#" },
    imageUrl:
      "https://images.unsplash.com/photo-1520785643438-5bf77931f493?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80",
    article: placeholder,
    date: "2023-12-07",
  },
  {
    id: 1,
    type: "article",
    person: { name: "《谷歌发布Gemini原生多模态大模型》", href: "#" },
    imageUrl:
      "https://images.unsplash.com/photo-1520785643438-5bf77931f493?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80",
    article: placeholder,
    date: "2023-12-07",
  },
  {
    id: 1,
    type: "article",
    person: { name: "《谷歌发布Gemini原生多模态大模型》", href: "#" },
    imageUrl:
      "https://images.unsplash.com/photo-1520785643438-5bf77931f493?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80",
    article: placeholder,
    date: "2023-12-07",
  },
  {
    id: 4,
    type: "article",
    person: { name: "《谷歌发布Gemini原生多模态大模型》", href: "#" },
    imageUrl:
      "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80",
    article: placeholder,
    date: "2023-12-07",
  },
  {
    id: 1,
    type: "article",
    person: { name: "《谷歌发布Gemini原生多模态大模型》", href: "#" },
    imageUrl:
      "https://images.unsplash.com/photo-1520785643438-5bf77931f493?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80",
    article: placeholder,
    date: "2023-12-07",
  },
  {
    id: 2,
    type: "article",
    person: { name: "《谷歌发布Gemini原生多模态大模型》", href: "#" },
    imageUrl:
      "https://images.unsplash.com/photo-1520785643438-5bf77931f493?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80",
    article: placeholder,
    date: "2023-12-07",
  },
  {
    id: 1,
    type: "article",
    person: { name: "《谷歌发布Gemini原生多模态大模型》", href: "#" },
    imageUrl:
      "https://images.unsplash.com/photo-1520785643438-5bf77931f493?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80",
    article: placeholder,
    date: "2023-12-07",
  },
  {
    id: 1,
    type: "article",
    person: { name: "《谷歌发布Gemini原生多模态大模型》", href: "#" },
    imageUrl:
      "https://images.unsplash.com/photo-1520785643438-5bf77931f493?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80",
    article: placeholder,
    date: "2023-12-07",
  },
  {
    id: 4,
    type: "article",
    person: { name: "《谷歌发布Gemini原生多模态大模型》", href: "#" },
    imageUrl:
      "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80",
    article: placeholder,
    date: "2023-12-07",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
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
