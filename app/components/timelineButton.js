import Link from "next/link";
export default function timelineButton({ category }) {
  return (
    <>
      <Link href={`/timeline/${category}`}>
        <button
          type="button"
          className="absolute left-0 top-1/2 mx-4 -translate-y-1/2 transform  rounded-lg bg-indigo-50  px-2 py-1 text-xs font-semibold text-indigo-600 hover:bg-indigo-100"
        >
          查看更多
        </button>
      </Link>
    </>
  );
}
