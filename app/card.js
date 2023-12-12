const items = [
  {
    id: 1,
    title: "Leslie Alexander",
    image_url:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    summary:
      "Explicabo nihil laborum. Saepe facilis consequuntur in eaque. Consequatur perspiciatis quam. Sed est illo quia. Culpa vitae placeat vitae. Repudiandae sunt exercitationem nihil nisi facilis placeat minima eveniet.",
    date: "1d ago",
    dateTime: "2023-03-04T15:54Z",
  },
  {
    id: 2,
    title: "Michael Foster",
    image_url:
      "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    summary:
      "Laudantium quidem non et saepe vel sequi accusamus consequatur et. Saepe inventore veniam incidunt cumque et laborum nemo blanditiis rerum. A unde et molestiae autem ad. Architecto dolor ex accusantium maxime cumque laudantium itaque aut perferendis.",
    date: "2d ago",
    dateTime: "2023-03-03T14:02Z",
  },
  {
    id: 3,
    title: "Dries Vincent",
    image_url:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    summary:
      "Quia animi harum in quis quidem sint. Ipsum dolorem molestias veritatis quis eveniet commodi assumenda temporibus. Dicta ut modi alias nisi. Veniam quia velit et ut. Id quas ducimus reprehenderit veniam fugit amet fugiat ipsum eius. Voluptas nobis earum in in vel corporis nisi.",
    date: "2d ago",
    dateTime: "2023-03-03T13:23Z",
  },
  {
    id: 4,
    title: "Lindsay Walton",
    image_url:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    summary:
      "Unde dolore exercitationem nobis reprehenderit rerum corporis accusamus. Nemo suscipit temporibus quidem dolorum. Nobis optio quae atque blanditiis aspernatur doloribus sit accusamus. Sunt reiciendis ut corrupti ab debitis dolorem dolorem nam sit. Ducimus nisi qui earum aliquam. Est nam doloribus culpa illum.",
    date: "3d ago",
    dateTime: "2023-03-02T21:13Z",
  },
];

export default async function Example() {
  let items = await fetch("http://0.0.0.0:8000/static_news", {
    next: { revalidate: 10 },
  });
  items = await items.json();

  return (
    <div className="bg-white shadow-sm rounded-2xl">
      <div className="border-b border-gray py-4 text-center font-semibold">
        人工智能
      </div>
      <ul role="list" className="divide-y divide-gray-100 py-4 px-8">
        {items.map((item) => (
          <li key={item.id} className="flex gap-x-4 py-5">
            <img
              className="h-12 w-12 flex-none rounded-full bg-gray-50"
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
  );
}
