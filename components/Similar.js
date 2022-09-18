
import Image from "next/image";
import { ThumbUpIcon } from "@heroicons/react/outline";
import { useRouter } from "next/router";
function Details(props) {
  const router = useRouter();
  // console.log(router);
  async function onClick() {
    let req = await fetch(
      `http://api.themoviedb.org/3/movie/${props.id}?api_key=49104ed84bd4fa58190e3ad74f40d7d4&append_to_response=videos`
    );
    let mydata = await req?.json();
    router.push({ pathname: "/Details", query: { id: props.id } });

    console.log(mydata);
  }
  const BASE_URl = "https://image.tmdb.org/t/p/w500/";
  return (
    <div className="p-2 mt-5 -pb-3 group transition duration-200 ease-in-out transform sm:hover:scale-105 cursor-pointer">
      <Image
        // src={`https://image.tmdb.org/t/p/w500/ox4goZd956BxqJH6iLwhWPL9ct4.jpg`}
        src={`${BASE_URl}${props?.image}`}
        className=" md:m-0 object-fill  h-full w-full block hover:animate-pulse rounded-3xl  "
        height={400}
        width={292}
        onClick={() => onClick()}
        alt="true"
      />
      <div className="p-2">
        <h2 className="mt-1 text-2xl text-white transition-all duration-300 ease-in-out group-hover:font-bold">
          {props?.title}
        </h2>
        <p className="truncate break max-w-md">{props?.overview}</p>
        <p className="flex items-center opacity-0 group-hover:opacity-100">
          {props?.release_date || props?.first_air_date} .{" "}
          <ThumbUpIcon className="h-5 mx-2" /> {props?.vote_count}
        </p>
      </div>
    </div>
  );
}

export default Details;


