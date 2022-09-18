import Image from "next/image";
function Company(props) {
  const BASE_URl = "https://image.tmdb.org/t/p/w500/";
  return (
    <div className="flex flex-col ml-20 justify-center ">
      <h1 className="mt-6 mb-6 text-cyan-200  font-serif text-xl">
        {props.name}
      </h1>
      <div className="  bg-opacity-20   mr-5  rounded-full">
        <Image
          // src={`https://image.tmdb.org/t/p/w500/ox4goZd956BxqJH6iLwhWPL9ct4.jpg`}
          src={`${BASE_URl}${
            props.logo_path || "/gz66EfNoYPqHTYI4q9UEN4CbHRc.png"
          }`}
          className=" md:m-0  bg-white flex rounded-lg  items-center hover:animate-pulse  "
          height={80}
          width={152}
          alt="true"
        />
      </div>
    </div>
  );
}

export default Company;
