import { useRouter } from "next/router";
import requests from "../utils/requests";

function Navbar() {
  const router = useRouter();
  return (
    <nav className="relative">
      
      <div className="absolute top-0 left-10 bg-gradient-to-r from-[#000000] h-10 w-1/12" />
      <div className="flex px-10 sm:px-20 text-2xl whitespace-nowrap space-x-10 sm:space-x-20 overflow-x-scroll scrollbar-hide ">
        {Object.entries(requests).map(([key, { title, url }]) => (
          <h2
            key={key}
            onClick={() => router.push(`movies/?genre=${key}`)}
            className="last:pr-24 cursor-pointer transition duration-100 transform hover:text-white active:text-red-500 hover:scale-125"
          >
            {" "}
            {title}
          </h2>
        ))}
      </div>
      <div className="absolute top-0 right-0 bg-gradient-to-l from-[#000000] h-10 w-1/12" />
    </nav>
  );
}

export default Navbar;
