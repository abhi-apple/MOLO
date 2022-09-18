

import ReactPlayer from "react-player";
import Link from "next/link";
function Youtube(props) {
  const BASE_URYT = "https://www.youtube.com/watch?v=";
  // console.log(props.link);
  return (
    // <div className="flex flex-wrap ml-24 pl-5 sm:pl-2 justify-between space-y-6 items-center">

    <div className="p-2 mb-24 group transition duration-200 ease-in-out transform sm:hover:scale-105 cursor-pointer  ">
      <ReactPlayer
        url={`${BASE_URYT}${props.link}`}
        controls
        width="355px"
        height="200px"
        className="hover:shadow-2xl"
      />
      <a href={`${BASE_URYT}${props.link}`} target="_blank" rel="noreferrer">
        {/* <p className="text-2xl hover:underline     ">
          {" "}
          {props.name}
        </p> */}
        <div className="flex items-center text-slate-100  opacity-0  group-hover:opacity-100 flex-col  mt-1">
          <h1 className="text-xl">- {props.type}</h1>
        </div>
      </a>
    </div>

    //   </div>

    // <div className="lg:w-1/4 md:w-1/2 p-4 shadow-lg rounded-3xl transition duration-1000 transform hover:shadow-amber-300 w-full">
    //   <a className="block relative h-48 rounded overflow-hidden">
    //     <picture>

    //     <img
    //       alt="ecommerce"
    //       className="m-auto md:m-0 mt-2 md:w-full  h-[30vh]   block"
    //       src={props.image}
    //     />
    //     </picture>
    //   </a>
    //   <Link
    //     href={{
    //       pathname: "/about",
    //       query: {title: props.title,urls:props.url, image: props.image, content: props.content,search: props.search,description: props.description, author: props.author ,},
    //     }}
    //   >
    //     <div className="mt-4 text-center">
    //       <button>
    //         <h3 className="  text-base tracking-widest font-serif text-neutral-400 hover:text-neutral-50 title-font mb-1">
    //           {props.title}
    //         </h3>
    //       </button>

    //     </div>
    //   </Link>
    // </div>
  );
}

export default Youtube;
