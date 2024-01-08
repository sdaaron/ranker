import { SignInButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <SignInButton>
      <button
        type="button"
        className="flex max-w-sm w-full bg-gradient-to-r from-indigo-500 via-pink-500 to-yellow-500 hover:from-indigo-600 hover:via-pink-600 hover:to-red-600 focus:outline-none text-white text-base  shadow-md rounded-md mx-auto my-auto py-2 px-4"
      >
        <div className="col-span-2">登录</div>
      </button>
    </SignInButton>
  );
}
