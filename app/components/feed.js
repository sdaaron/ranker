// "use client";
// import Draggable from "react-draggable";
export default async function Example(props) {
  async function getData() {
    const requestBody = {
      category: props.category ? props.category : "NULL",
    };
    const res = await fetch("https://api.ranker.cc/news", {
      // const res = await fetch("http://0.0.0.0:8000/news", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
      next: { revalidate: 5 },
    });

    if (!res.ok) {
      console.log(requestBody);
      throw new Error("Failed to fetch data");
    }

    const data = await res.json();
    console.log(data);
    return data;
  }

  const articles = await getData();
  return (
    <div className="flow-root bg-white  rounded-xl z-40 mb-4 hover:bg-gradient-to-br hover:from-white hover:to-zinc-50 hover:shadow-sm hover:ring-1 hover:ring-gray-200">
      <div className="py-3 sm:px-6 rounded-t-3xl border-b border-gray-100 flex flex-row items-center justify-center gap-4">
        <img src="/logo.png" className="h-4"></img>
        <h3 className="font-semibold leading-6 text-gray-900  text-center">
          {props.category ? props.category : "NULL"}
        </h3>
      </div>

      <div className="feed-container p-5 ">
        <ul role="list" className="">
          {articles.map((articleItem, articleItemIdx) => (
            <li key={articleItemIdx}>
              <div className="relative py-2">
                {articleItemIdx !== articles.length - 1 ? (
                  <span
                    className="absolute left-5 top-5 -ml-px h-full w-0.5 bg-gray-200"
                    aria-hidden="true"
                  />
                ) : null}
                <div className="relative flex items-start space-x-3">
                  {/* {articleItem.type === "article" ?  */}
                  <>
                    <div className="relative">
                      <img
                        className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-400 ring-8 ring-white"
                        src={articleItem.image_url}
                        alt=""
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div>
                        <div className="text-sm hover:underline ">
                          <a
                            href={articleItem.source_url}
                            className="font-medium text-sm hover:text-blue-800 text-blue-600  line-clamp-1 hover:line-clamp-none"
                          >
                            {articleItem.title}
                          </a>
                        </div>
                        <p className="mt-0.5 text-sm text-gray-500">
                          {articleItem.source_name} 发布于 {articleItem.date}
                        </p>
                      </div>
                      <div className="mt-2 text-xs text-gray-700 overflow-hidden transition-all hover:max-h-96 duration-300">
                        <a href={articleItem.source_url}>
                          <p className="line-clamp-2 hover:line-clamp-none hover:underline">
                            {articleItem.summary}
                          </p>
                        </a>
                      </div>

                      {/* <div className="mt-2 text-xs text-gray-700 hover:underline line-clamp-2">
                        <a href={articleItem.source_url}>
                          <p>{articleItem.summary}</p>
                        </a>
                      </div> */}
                    </div>
                  </>
                  {/* : null} */}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}