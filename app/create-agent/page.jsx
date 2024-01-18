"use client";
import Link from "next/link";
import { useState } from "react";
import supabase from "../lib/SupabaseClient";
import SubmitModal from "./SubmitModal";
export default function Example() {
  const [agentName, setAgentName] = useState("");
  const [agentPrompt, setAgentPrompt] = useState("");
  const [submissionMessage, setSubmissionMessage] = useState(""); // 新增状态
  const [open, setOpen] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      title: agentName,
      prompt: agentPrompt,
      // 添加其他必要的字段
    };
    try {
      const { data, error } = await supabase.from("request").insert([formData]);

      if (error) {
        throw new Error(error.message);
      }

      setSubmissionMessage("Agent 提交成功！"); // 设置提示消息
      setOpen(true);
      console.log("Agent created successfully");

      // 处理响应
      console.log("Agent created successfully");
    } catch (error) {
      setSubmissionMessage("提交Agent失败: " + error); // 设置错误提示
      console.error("Failed to create agent:", error);
    }
  };

  return (
    <div className="mt-20 min-h-screen p-20">
      <form onSubmit={handleSubmit} className="">
        <SubmitModal open={open} setOpen={setOpen} />
        <div className="flex flex-col items-center justify-evenly p-4 ">
          <div className="space-y-10">
            <div className="max-w-4xl space-y-10">
              <h2 className="text-2xl font-semibold  text-gray-900">
                Agent Prompt 提交
              </h2>
              {/* <p className="text-sm  text-gray-600">
                由于每个用户单独创建Agent开销过大，我们目前接受提交Agent申请。当同类请求达到一定数量时，我们会为您创建Agent。
              </p> */}
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
                  className="block h-96  w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
          </div>

          <div className="mt-20 flex items-center justify-evenly gap-x-20">
            <Link href="/">
              <button
                type="button"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                返回
              </button>
            </Link>
            <button
              type="submit"
              className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              提交
            </button>
          </div>
        </div>
      </form>
      {submissionMessage && (
        <div className="rounded-md bg-green-50 p-4">
          <div className="m-4 text-center text-lg text-green-700">
            <p>{submissionMessage}</p>
          </div>
        </div>
      )}
    </div>
  );
}
