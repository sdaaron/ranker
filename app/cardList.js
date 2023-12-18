export default async function CardList(props) {
  let items = await fetch("http://0.0.0.0:8000/static_news", {
    next: { revalidate: 10 },
  });
  items = await items.json();

  return (
    <div className="bg-white rounded-3xl my-2">
      <div className="bg-white shadow-sm rounded-2xl">
        <div className="border-b border-gray py-3 text-center font-semibold">
          {props.category ? props.category : "data"}
        </div>
        <ul role="list" className="divide-y divide-gray-100 py-4 px-8">
          {items.map((item) => (
            <li key={item.id} className="flex gap-x-4 py-2">
              <img
                className="h-10 w-10 flex-none rounded-full bg-gray-50"
                src={item.image_url}
                alt=""
              />
              <div className="flex-auto">
                <div className="flex items-baseline justify-between gap-x-4">
                  <p className="text-sm font-semibold leading-6 text-gray-900">
                    {item.title}
                  </p>
                  <p className="flex-none text-xs text-gray-600">
                    <time>{item.date}</time>
                  </p>
                </div>
                <p className="mt-1 line-clamp-2 text-sm leading-6 text-gray-600">
                  {item.summary}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* <header className="font-semibold border-gray-100 border-b py-4 text-center">
        {props.category ? props.category : "data"}
      </header>
      <main className="grid grid-cols-1 gap-2 px-10 py-5">
        <div className="bg-blue-200 p-4 py-6 rounded-2xl text-center">
          Test Data
        </div>
        <div className="bg-blue-200 p-4 py-6 rounded-2xl text-center">
          Test Data
        </div>
        <div className="bg-blue-200 p-4 py-6 rounded-2xl text-center">
          Test Data
        </div>
        <div className="bg-blue-200 p-4 py-6 rounded-2xl text-center">
          Test Data
        </div>
        <div className="bg-blue-200 p-4 py-6 rounded-2xl text-center">
          Test Data
        </div>
        <div className="bg-blue-200 p-4 py-6 rounded-2xl text-center">
          Test Data
        </div>
      </main> */}
    </div>
  );
}
