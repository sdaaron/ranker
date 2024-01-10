"use client";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

export default function Example() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 rounded-lg  px-2 py-1  mx-4 text-xs font-semibold text-indigo-600 bg-indigo-50 hover:bg-indigo-100"
      >
        Prompt
      </button>

      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-zinc-50 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full max-w-7xl sm:p-6">
                  <div>
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full">
                      {/* <CheckIcon
                      className="h-6 w-6 text-green-600"
                      aria-hidden="true"
                    /> */}
                      <img src="/logo.png" alt="feeds-logo"></img>
                    </div>
                    <div className="mt-3 text-center sm:mt-5">
                      <Dialog.Title
                        as="h3"
                        className="text-2xl font-semibold leading-6 text-gray-900 mb-5"
                      >
                        Agent Prompt
                      </Dialog.Title>
                      <div className="mt-2 lg:p-10 ug:px-20 lg:px-16 md:p-10 md:px-20  sm:px-4 sm:py-8">
                        <p className="text-xs font-semibold text-left text-gray-500">
                          你是一个AI新闻编辑员，你的职责是为中国读者编辑今日的重要新闻。
                          <br />
                          你需要从以上3条今日新闻中，按照优先级筛选选出5条今日优先级最高的新闻。
                          <br />
                          优先级由5个维度的打分加总得到，这5个维度分别是：{" "}
                          <br />
                          <br />
                          1.【重要性】
                          <br />
                          影响力的评价标准是：对于技术进步的影响、对于全人类生活的影响。（1-10分）
                          <br />
                          打分标准：
                          <br />
                          1.
                          毫无重要性（1分）：完全没有新闻价值，对任何群体或个人都无影响。
                          <br />
                          2.
                          极低重要性（2分）：仅对极小范围的个人或特定小群体有轻微影响。
                          <br />
                          3.
                          低重要性（3分）：对一小群人有一定影响，但对大多数人无关紧要。
                          <br />
                          4.
                          一定重要性（4分）：对特定群体有显著影响，但影响范围有限。
                          <br />
                          5.
                          中等重要性（5分）：对较广群体有一定影响，涉及普通新闻事件。
                          <br />
                          6.
                          较高重要性（6分）：涉及较广群体，对公众有明显关注度，有一定社会影响。
                          <br />
                          7.
                          重要（7分）：对大多数人有显著影响，可能成为焦点新闻。
                          <br />
                          8.
                          非常重要（8分）：可能改变行业、地区或社会大群体，广泛关注。
                          <br />
                          9.
                          极其重要（9分）：对国家或多个国家有深远影响，几乎所有人都会关注。
                          <br />
                          10.
                          至关重要（10分）：对全人类或整个地球有重大长远影响，是历史性事件。
                          <br />
                          <br />
                          2.【实际性】
                          <br />
                          事件实际性的评价标准是事件是否近期真实发生。
                          <br />
                          (1-5分) 打分标准：
                          <br />
                          1.
                          1分：仅仅是未来可能发生的、当前还在研究/观察/猜测/怀疑中的、或者过去已经发生了很久的事件、捕风捉影式的揣测、现实中大概率不会发生的事件、宣传推广类的文章、说空话的官方锦绣文章、观点、评论、回顾、赞美、批评、呼吁、提倡、倡议、反对等等性质的文章。
                          <br />
                          2. 5分：近期实际发生的事件
                          <br />
                          <br />
                          3.【相关性】
                          <br />
                          请记住，你面向的是中国读者，请优选选择那些能让中国读者理解并产生共鸣的新闻事件，一些仅仅与美国或其他国家社会相关的新闻可以直接忽略。
                          <br />
                          打分标准：
                          <br />
                          1.
                          -5分：只有美国观众会感兴趣的内容，例如LGBTQ、美国某选区政治、美国原住民保护区、美国枪击案、美国明星私人生活等新闻事件。
                          <br />
                          2. 5分：中国观众会感兴趣的内容。
                          <br />
                          4. 合规性：请不要列出不符合中国法规的内容。 <br />
                          打分标准：
                          <br />
                          1.-5分：违反中国互联网法规和媒体相关法规的事件，无法在中国互联网和媒体上公开发表的文章，例如涉及中国领导人、批评中国政治的文章。
                          <br />
                          2. 5分：可以在中国互联网和媒体上公开发表的文章。
                          <br />
                          <br />
                          你的任务： <br />
                          1.
                          根据新闻标题和摘要，对重要性、实际性、相关性、合规性分别进行打分。
                          <br />
                          2. 加总这4项打分，得到该新闻总分。
                          <br /> 3.
                          以JSON形式返回给我这项新闻的各项打分，形式例子如下：
                          <br />
                          {"{"}
                          <br />
                          {'"importance": "6",'}
                          <br />
                          {'"actuality": "5",'}
                          <br />
                          {'"relevance": "5",'}
                          <br />
                          {'"legality": "5",'}
                          <br />
                          {'"final_score": "21"'}
                          <br />
                          {"}"}
                          <br />
                          <br />
                          <p>你需要评估的新闻如下：</p>
                          <p>Title: {"{news.title}"}</p>
                          <p>Summary: {"{news.summary}"}</p>
                          <p>你的JSON打分:</p>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-5 sm:mt-6">
                    <button
                      type="button"
                      className="inline-flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                      onClick={() => setOpen(false)}
                    >
                      返回首页
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
}
