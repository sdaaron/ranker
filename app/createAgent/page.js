"use client";
import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
export default function Example() {
  const [agentName, setAgentName] = useState("");
  const [agentPrompt, setAgentPrompt] = useState("");

  // const api = process.env.AGENT_REQUEST_ENDPOINT;
  // console.log("apiendpoint is :" + api);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      title: agentName,
      prompt: agentPrompt,
      // 添加其他必要的字段
    };
    try {
      const response = await fetch("https://api.ranker.cc/agent_request", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      // 处理响应
      console.log("Agent created successfully");
    } catch (error) {
      console.error("Failed to create agent:", error);
    }
  };

  return (
    <div className="h-screen">
      <form onSubmit={handleSubmit} className="">
        <div className="h-screen flex flex-col justify-evenly items-center">
          <div className="space-y-10">
            <div className="space-y-10 ">
              <h2 className="text-2xl font-semibold  text-gray-900">
                Agent 申请
              </h2>
              <p className="text-sm  text-gray-600">
                由于每个用户单独创建Agent开销过大，我们目前接受提交Agent申请。
                <br></br>
                当同类请求达到一定数量时，我们会为您创建Agent。
              </p>
            </div>

            <div className="">
              <label
                htmlFor="website"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Agent 名称
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    type="text"
                    name="website"
                    id="website"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder=" 您的Agent名称 "
                    value={agentName}
                    onChange={(e) => setAgentName(e.target.value)}
                  />
                </div>
              </div>
            </div>

            <div className="col-span-full">
              <label
                htmlFor="about"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Agent Prompt
              </label>
              <div className="mt-2">
                <textarea
                  id="about"
                  name="about"
                  rows={3}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  // defaultValue={""}
                  value={agentPrompt}
                  onChange={(e) => setAgentPrompt(e.target.value)}
                />
              </div>
              <p className="mt-3 text-sm leading-6 text-gray-600">
                请在此处填写Agent
                Prompt，可以写多段Prompt，每段Prompt以空行分隔。
              </p>
            </div>

            <div className="col-span-full">
              <label
                htmlFor="photo"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Agent 头像
              </label>
              <div className="mt-2 flex items-center gap-x-3">
                <UserCircleIcon
                  className="h-12 w-12 text-gray-300"
                  aria-hidden="true"
                />
                <button
                  type="button"
                  className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                >
                  上传
                </button>
              </div>
            </div>

            <div className="col-span-full">
              <label
                htmlFor="cover-photo"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Agent 封面图片
              </label>
              <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                <div className="text-center">
                  <PhotoIcon
                    className="mx-auto h-12 w-12 text-gray-300"
                    aria-hidden="true"
                  />
                  <div className="mt-4 flex text-sm leading-6 text-gray-600">
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                    >
                      <span>上传图片</span>
                      <input
                        id="file-upload"
                        name="file-upload"
                        type="file"
                        className="sr-only"
                      />
                    </label>
                    <p className="pl-1">或者将图片拖拽至此</p>
                  </div>
                  <p className="text-xs leading-5 text-gray-600">
                    PNG, JPG, GIF 最高10MB，非必须
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-evenly  gap-x-10">
            <button
              type="button"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              取消
            </button>
            <button
              type="submit"
              className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              提交
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
