

import Image from "next/image";

function Crew(props) {
  const BASE_URl = "https://image.tmdb.org/t/p/w500/";
  // console.log(props?.original_name);
  return (
    <div className="p-2 mb-24 group transition duration-200 ease-in-out transform sm:hover:scale-105 cursor-pointer  ">
      <Image
        layout="responsive"
        // src={`https://image.tmdb.org/t/p/w500/ox4goZd956BxqJH6iLwhWPL9ct4.jpg`}
        src={`${BASE_URl}${props?.profile_path}`}
        className=" md:m-0 object-fill w-full h-full rounded-3xl  block hover:animate-pulse   "
        height={300}
        width={192}
        alt="true"
      />
      <div className="p-2">
        <h2 className="mt-1 text-2xl text-white transition-all duration-300 ease-in-out group-hover:font-bold">
          {props?.original_name} 
        </h2>
        <p>In & As</p>
        <p className="truncate max-w-md">{props?.character}</p>
        {/* <p className="flex items-center opacity-0 group-hover:opacity-100">
          {props?.release_date || props?.first_air_date} .{" "}
        </p> */}
      </div>
    </div>
  );
}

export default Crew;
