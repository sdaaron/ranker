// "use client";
// import { useState } from "react";
// import { useInView } from "react-intersection-observer";
// import Feed from "./feed";
// // import fetchSupabase from "./fetchSupabase";
// import Spinner from "./spinner";
// export default function loadClient() {
//   const [content, setContent] = useState([]);
//   const [pagesLoaded, setPagesLoaded] = useState(false);
//   const { ref, inView } = useInView({
//     threshold: 0,
//   });

//   // useEffect(() => {
//   //   if (inView) {
//   //     console.log("LoadMore inView!");
//   //     fetchSupabase("2024-01-09", "politic");
//   //   }
//   // }, [inView]);

//   return (
//     <div ref={ref}>
//       <div className="flex flex-col items-center justify-evenly">
//         <Feed category="politic" created_date="2024-01-10" />
//         <Feed category="politic" created_date="2024-01-10" />
//         <Feed category="politic" created_date="2024-01-10" />
//       </div>
//       <Spinner />
//     </div>
//   );
// }
import Spinner from "./spinner";

const loadmore = () => {
  return (
    <div>
      <Spinner />
    </div>
  );
};

export default loadmore;
