"use client";
import { Dialog, Transition } from "@headlessui/react";
import Link from "next/link";
import { Fragment, useState } from "react";
import PromptMap from "./PromptMap";
export default function Example({ category }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="absolute right-0 top-1/2 mx-4 -translate-y-1/2 transform  rounded bg-indigo-50 px-2 py-1  text-xs font-semibold text-indigo-600 hover:bg-indigo-100"
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
            <div className="fixed inset-0 bg-zinc-50 bg-opacity-20 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-10  text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative max-w-3xl transform overflow-hidden rounded-lg bg-white  p-10 text-left  shadow-xl transition-all sm:my-8 sm:w-full sm:p-6">
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
                        className="mb-5 text-2xl font-semibold leading-6 text-gray-900"
                      >
                        Agent Prompt
                      </Dialog.Title>
                      <div className="ug:px-20 mt-2 sm:px-4 sm:py-8 md:p-10 md:px-20  lg:p-10 lg:px-16">
                        <PromptMap category={category} />
                      </div>
                    </div>
                  </div>
                  <Link
                    className="mt-5 flex justify-center sm:mt-6"
                    href="/create-agent"
                  >
                    <button
                      type="button"
                      className="inline-flex  w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                      onClick={() => setOpen(false)}
                    >
                      提交新的Prompt
                    </button>
                  </Link>

                  <div className="mt-5  flex justify-center sm:mt-6">
                    <button
                      type="button"
                      className=" inline-flex w-full  justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
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
