"use client";
import { SignInButton, UserButton, useUser } from "@clerk/nextjs";
import { Disclosure } from "@headlessui/react";
export default function Example() {
  const { isSignedIn } = useUser();

  return (
    <Disclosure as="nav" className="bg-white shadow w-full">
      {({ open }) => (
        <>
          <div className="mx-auto  px-2 sm:px-4 lg:px-8">
            <div className="flex h-16 justify-between relative">
              <div className="flex px-2 lg:px-0 justify-between:space-between">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="h-10 w-auto px-5 pt-2"
                    src="/logo.png"
                    // src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                    alt="Ranker logo"
                  />
                </div>
                <div className="hidden lg:ml-6 lg:flex lg:space-x-8">
                  <a
                    href="/"
                    className="inline-flex items-center border-b-2 border-indigo-500 px-1 pt-1 text-base font-medium text-gray-900"
                  >
                    新闻热榜
                  </a>

                  <a
                    href="notfound"
                    className="pointer-events-none opacity-50 inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-base font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
                  >
                    网址导航
                  </a>
                  <a
                    href="notfound"
                    className="pointer-events-none opacity-50 inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-base font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
                  >
                    实用工具
                  </a>
                </div>
                <div className="flex items-center absolute right-1 top-1/2 transform translate-y-[-50%]">
                  <div className="header">
                    {/* 其他内容 */}
                    {isSignedIn ? (
                      <UserButton afterSignOutUrl="/" />
                    ) : (
                      <SignInButton className="rounded-full bg-indigo-600 px-3.5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </Disclosure>
  );
}
