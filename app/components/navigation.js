"use client";
import { Disclosure } from "@headlessui/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  return (
    <Disclosure as="nav" className="bg-white shadow w-full z-50">
      {({ open }) => (
        <>
          <div className="mx-auto  px-2 sm:px-4 lg:px-8">
            <div className="flex h-16 justify-between">
              <div className="flex px-2 lg:px-0">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="h-10 w-auto px-5 pt-2"
                    src="/logo.png"
                    // src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                    alt="GEMS logo"
                  />
                </div>
                <div className="hidden lg:ml-6 lg:flex lg:space-x-8">
                  <a
                    href="/"
                    className="inline-flex items-center border-b-2 border-indigo-500 px-1 pt-1 text-base font-medium text-gray-900"
                  >
                    新闻热榜
                  </a>
                  {/* <a
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
                  </a> */}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </Disclosure>
  );
}
