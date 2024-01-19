"use client";
import { SignInButton, UserButton, useUser } from "@clerk/nextjs";
import { Disclosure } from "@headlessui/react";
import { PlusIcon } from "@heroicons/react/20/solid";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { usePathname } from "next/navigation";

import Link from "next/link";

export default function Example() {
  const { isSignedIn } = useUser();
  const pathname = usePathname();

  const linkClass = (link) =>
    `inline-flex items-center px-1 pt-1 text-base border-b-2 ${
      pathname === link
        ? "border-indigo-500 text-gray-900"
        : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
    }`;

  const linkClassSmall = (link) => {
    return pathname === link
      ? "block border-l-4 border-indigo-500 bg-indigo-50 py-2 pl-3 pr-4 text-base font-medium text-indigo-700 sm:pl-5 sm:pr-6"
      : "block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700 sm:pl-5 sm:pr-6";
  };

  return (
    <Disclosure as="nav" className="z-50 bg-white shadow">
      {({ open }) => (
        <>
          <div className="mx-auto  px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 justify-between">
              <div className="flex">
                <div className="-ml-2 mr-2 flex items-center md:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">打开主菜单</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex flex-shrink-0 items-center">
                  <Link href="/">
                    <img
                      className="h-8 w-auto sm:px-2 md:px-3"
                      src="/logo.png"
                      alt="Ranker logo"
                    />
                  </Link>
                </div>
                <div className="ld:text-base hidden font-mono  sm:space-x-5  sm:text-sm md:flex md:space-x-2 lg:space-x-8">
                  <Link href="/" className={linkClass("/")}>
                    热榜
                  </Link>
                  <Link href="/feeds/ai" className={linkClass("/feeds/ai")}>
                    大模型
                  </Link>
                  <Link
                    href="/feeds/world"
                    className={linkClass("/feeds/world")}
                  >
                    时事
                  </Link>
                  <Link
                    href="/feeds/business"
                    className={linkClass("/feeds/business")}
                  >
                    财经
                  </Link>
                  <Link
                    href="/feeds/technology"
                    className={linkClass("/feeds/technology")}
                  >
                    科技
                  </Link>
                  <Link
                    href="/feeds/science"
                    className={linkClass("/feeds/science")}
                  >
                    科学
                  </Link>
                  <Link
                    href="/feeds/politics"
                    className={linkClass("/feeds/politics")}
                  >
                    时政
                  </Link>

                  <Link
                    href="/feeds/new_energy"
                    className={linkClass("/feeds/new_energy")}
                  >
                    能源
                  </Link>
                  <Link
                    href="/feeds/health"
                    className={linkClass("/feeds/health")}
                  >
                    健康
                  </Link>
                  <Link
                    href="/feeds/entertainment"
                    className={linkClass("/feeds/entertainment")}
                  >
                    娱乐
                  </Link>
                  <Link
                    href="/feeds/sport"
                    className={linkClass("/feeds/sport")}
                  >
                    运动
                  </Link>
                  <Link
                    href="/feeds/hacker_news_top"
                    className={linkClass("/feeds/hacker_news_top")}
                  >
                    HN热门
                  </Link>
                  <Link
                    href="/feeds/hacker_news_best"
                    className={linkClass("/feeds/hacker_news_best")}
                  >
                    HN最佳
                  </Link>
                </div>
              </div>
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <Link href="/create-agent">
                    <button
                      type="button"
                      className="relative flex w-full max-w-sm gap-x-1.5 rounded-full bg-gradient-to-r from-indigo-500 via-pink-500 to-yellow-500 px-4 py-2 text-base font-bold text-white shadow-sm hover:from-indigo-600 hover:via-pink-600 hover:to-red-600 focus:outline-none"
                    >
                      <PlusIcon
                        className="-ml-0.5 h-5 w-5"
                        aria-hidden="true"
                      />
                      创建
                    </button>
                  </Link>
                </div>
                <div className="ml-4 flex flex-shrink-0 items-center gap-4">
                  {/* Profile dropdown */}
                  <div className="">
                    <div className="header">
                      {isSignedIn ? (
                        <UserButton afterSignOutUrl="/" />
                      ) : (
                        <SignInButton>
                          <button
                            type="button"
                            className="mx-auto my-auto flex w-full max-w-sm rounded-full bg-gradient-to-r from-indigo-500 via-pink-500 to-yellow-500 px-4 py-2 text-base font-bold text-white shadow-sm hover:from-indigo-600 hover:via-pink-600 hover:to-red-600 focus:outline-none"
                          >
                            <div className="col-span-2">登录</div>
                          </button>
                        </SignInButton>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="md:hidden">
            <div className="space-y-1 pb-3 pt-2 font-mono">
              {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
              <Disclosure.Button
                as="a"
                href="/"
                className={linkClassSmall("/")}
              >
                热榜
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="/feeds/business"
                className={linkClassSmall("/feeds/ai")}
              >
                大模型
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="/feeds/business"
                className={linkClassSmall("/feeds/business")}
              >
                财经
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="/feeds/business"
                className={linkClassSmall("/feeds/technology")}
              >
                科技
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="/feeds/business"
                className={linkClassSmall("/feeds/science")}
              >
                科学
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="/feeds/business"
                className={linkClassSmall("/feeds/politics")}
              >
                时政
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="/feeds/business"
                className={linkClassSmall("/feeds/new_energy")}
              >
                能源
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="/feeds/business"
                className={linkClassSmall("/feeds/health")}
              >
                健康
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="/feeds/business"
                className={linkClassSmall("/feeds/entertainment")}
              >
                娱乐
              </Disclosure.Button>

              <Disclosure.Button
                as="a"
                href="/feeds/business"
                className={linkClassSmall("/feeds/sport")}
              >
                运动
              </Disclosure.Button>

              <Disclosure.Button
                as="a"
                href="/feeds/business"
                className={linkClassSmall("/feeds/hacker_news_top")}
              >
                HackerNews热门
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="/feeds/business"
                className={linkClassSmall("/feeds/hacker_news_best")}
              >
                HackerNews最佳
              </Disclosure.Button>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
