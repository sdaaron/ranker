import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  FingerPrintIcon,
  LockClosedIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import screenshot from "../../public/screenshot.jpeg";
const features = [
  {
    name: "AI智能体筛选",
    description:
      "通过精心 Prompt Engineering 开发而来的信息筛选Agent，为你阅读全网文章，按照你的喜好筛选文章，替你免除阅读低质量文章之苦。",
    icon: CloudArrowUpIcon,
  },
  {
    name: "AI智能体翻译+摘要",
    description:
      "拥有完整新闻背景的AI翻译+摘要Agent，为你将外网优质内容整理成轻松阅读的中文简报形式，给英文阅读吃力的朋友省却苦读英文的烦恼。",
    icon: LockClosedIcon,
  },
  {
    name: "AI编排信息流",
    description:
      "AI智能体将每日筛选出的优质文章，按照特定分类、顺序，编排成清晰的信息流，再也不用去看那些没有信息量的热榜、热搜啦！",
    icon: ArrowPathIcon,
  },
  {
    name: "1万+信息源轻松阅尽",
    description:
      "我们的网页爬虫每天爬取1万+信息源，从各大网站、论坛、社交媒体等，优中选优择出当日最重要的内容，让你一站阅尽全网信息。",
    icon: FingerPrintIcon,
  },
];

export default function Example() {
  return (
    <div className="bg-white">
      <main className="isolate">
        {/* Hero section */}
        <div className="relative pt-14">
          <div
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            />
          </div>
          <div className="py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto max-w-2xl text-center">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                  Ranker 信息流规划助手
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  100 个 AI 智能体，每天帮你阅读 1万+
                  信息源，助你抹平信息差，逃出茧房，不再焦虑！
                </p>
              </div>
              <div className="mt-16 flow-root sm:mt-24">
                <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
                  <Image
                    src={screenshot}
                    alt="App screenshot"
                    width={2432}
                    height={1442}
                    // placeholder="blur"
                    // blurDataURL={screenshot}
                    className="rounded-md shadow-2xl ring-1 ring-gray-900/10"
                  />
                </div>
              </div>
            </div>
          </div>
          <div
            className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            />
          </div>
        </div>

        {/* Feature section */}
        <div className="mx-auto mb-96 mt-32 max-w-7xl px-6 sm:mt-56 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-indigo-600">
              一分钟读遍全网精华文章
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              你需要的唯一一个信息流产品
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              100 个 AI 智能体，每天帮你阅读 1万+
              信息源，助你抹平信息差，逃出茧房，不再焦虑！
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              {features.map((feature) => (
                <div key={feature.name} className="relative pl-16">
                  <dt className="text-base font-semibold leading-7 text-gray-900">
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                      <feature.icon
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                    </div>
                    {feature.name}
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-gray-600">
                    {feature.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </main>
    </div>
  );
}
