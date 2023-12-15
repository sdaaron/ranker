export default async function Example(props) {
  async function getData() {
    const requestBody = {
      category: props.category ? props.category : "人工智能",
    };
    const res = await fetch("https://feeds-api.shusida.com/news", {
      // const res = await fetch("http://0.0.0.0:8000/news", {
      method: "POST", // 设置请求方法为 POST
      headers: {
        "Content-Type": "application/json", // 设置请求头，告诉服务器发送的是 JSON 数据
      },
      body: JSON.stringify(requestBody), // 将 JavaScript 对象转换为 JSON 字符串
      next: { revalidate: 10 },
    });

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    const data = await res.json();
    console.log(data);
    return data;
  }

  const articles = await getData();
  return (
    <div className="flow-root bg-white shadow-sm rounded-3xl z-40">
      <div className="  py-4 sm:px-6 rounded-t-3xl bg-white border-b border-gray-100">
        <h3 className="font-semibold leading-6 text-gray-900  text-center">
          {props.category ? props.category : "人工智能"}
        </h3>
      </div>

      <div className="feed-container p-10">
        <ul role="list" className="-mb-8 ">
          {articles.map((articleItem, articleItemIdx) => (
            <li key={articleItemIdx}>
              <div className="relative pb-8">
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
                        className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-400 ring-8 ring-white"
                        src={articleItem.image_url}
                        alt=""
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div>
                        <div className="text-sm hover:underline ">
                          <a
                            href={articleItem.source_url}
                            className="font-medium text-base hover:text-blue-800 text-blue-600"
                          >
                            {articleItem.title}
                          </a>
                        </div>
                        <p className="mt-0.5 text-sm text-gray-500">
                          {articleItem.source_name} 发布于 {articleItem.date}
                        </p>
                      </div>
                      <div className="mt-2 text-sm text-gray-700 hover:underline">
                        <a href={articleItem.source_url}>
                          <p>{articleItem.summary}</p>
                        </a>
                      </div>
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
