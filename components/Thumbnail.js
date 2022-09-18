import Image from "next/image";
import { ThumbUpIcon } from "@heroicons/react/outline";
import { useRouter } from "next/router";
import { XCircleIcon } from "@heroicons/react/outline";
import { useEffect } from "react";
import Link from "next/link";
const Thumbnail = ({ key, result }) => {
  const router = useRouter();
  // console.log(router);
  async function onClick(id) {
    router.push({ pathname: "/Details", query: { id: result.id } });
  }
  //   useEffect(() => {
  //     // DELETE request using fetch with async/await

  //     // deletePost();
  // }, [result.id]);
  useEffect(() => {
    // deletePost();
  });

  async function deletePost() {
    await fetch(`http://localhost:9000/posts/${result.id}`, {
      method: "DELETE",
    });
    // setStatus('Delete successful');
  }
  // setStatus("Delete successful");

  const BASE_URl = "https://image.tmdb.org/t/p/w500/";
  return (
    <div className="p-2 group transition duration-200 ease-in-out transform sm:hover:scale-105 cursor-pointer  ">
      {/* <div className="flex"> */}

      <Image
        layout="responsive"
        // src={`https://image.tmdb.org/t/p/w500/ox4goZd956BxqJH6iLwhWPL9ct4.jpg`}
        src={`${BASE_URl}${result.backdrop_path || result.poster_path}`}
        height={100}
        width={192}
        onClick={() => onClick(key)}
        alt="true"
      />
      {router?.pathname === "/Collections" ? (
        <Link href={'/Collections'}>
          <button
            // className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="button"
            onClick={() => {
              deletePost();
              // addtocoll();
              // setshowModal(true);
            }}
          >
            <div className="flex flex-col pt-3 items-center cursor-pointer w-12 sm:w-20 group hover:text-white">
              <XCircleIcon className="h-8 mb-1 group-hover:animate-bounce   " />
              <p className="opacity-0 group-hover:opacity-100 tracking-widest">
                Remove
              </p>
            </div>
          </button>
        </Link>
      ) : (
        <></>
      )}

      {/* </div> */}
      <div className="p-2">
        <p className="truncate max-w-md">{result.overview}</p>
        <h2 className="mt-1 text-2xl text-white transition-all duration-300 ease-in-out group-hover:font-bold">
          {result.original_name || result.original_title}
        </h2>
        <p className="flex items-center opacity-0 group-hover:opacity-100">
          {result.media_type && `${result.media_type} .`}{" "}
          {result.release_date || result.first_air_date} .{" "}
          <ThumbUpIcon className="h-5 mx-2" /> {result.vote_count}
        </p>
      </div>
    </div>
  );
};

export default Thumbnail;
