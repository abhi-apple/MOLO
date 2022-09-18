import Thumbnail from "./Thumbnail";
import FlipMove from "react-flip-move";
import Image from "next/image";
import Genre from "./Genre";
import { PlayIcon } from "@heroicons/react/outline";
import { useEffect, useState } from "react";
import Link from "next/link";
import Company from "./Company";
import { VideoCameraIcon } from "@heroicons/react/outline";
import Colbtn from "./Colbtn";
import Addbtn from "./Addbtn";
function DetailsComponent(props) {
  console.log(props);
  const [genress, setgenress] = useState([]);
  const [company, setcompany] = useState([]);
  const [inlist, setinlist] = useState(false);
  useEffect(() => {
    setgenress(props?.data.genres);
    setcompany(props?.data.production_companies);
    props.mydata3?.map((data) => {
      data.id == props.id && setinlist(true);
    });
  }, [props?.data, props.id, props?.mydata3]);
  const addtocoll = async () => {
    await fetch("http://localhost:9000/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(props.data),
    });
  };

  const BASE_URl = "https://image.tmdb.org/t/p/w500/";
  return (
    <section className="text-gray-400  group body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-row mb-20">
          <div className=" mb-6 lg:mb-0">
            <div className="flex flex-column space-x-8">
              <h1 className="sm:text-5xl text-2xl font-extrabold title-font mb-2 text-white">
                {props?.data?.original_title}
              </h1>
            
            {
              inlist ? <Addbtn data={props.data}/>  :<Colbtn data={props.data}  />
            }
            
            </div>

            <div className="h-1 w-20 bg-indigo-500 rounded" />
            <div className="w-full p-4 mt-10">
              <div className=" p-10 text-4xl rounded-lg">
                <Image
                  src={`${BASE_URl}${
                    props?.data?.poster_path || props?.data?.backdrop_path
                  }`}
                  className=" md:m-0 object-fill  h-full w-full block hover:animate-pulse rounded-3xl  "
                  height={700}
                  width={392}
                  onClick={() => onClick(key)}
                  alt="true"
                />
              </div>
              <div className="flex items-center space-y-4 opacity-0  group-hover:opacity-100 flex-col  mt-10">
                <h1 className="text-3xl">
                  Released On - {props?.data?.release_date}
                </h1>
                <h1 className="text-3xl">
                  Run Time -{" "}
                  {props?.data?.runtime - 120 > 0
                    ? `2hr ${props?.data?.runtime - 120}`
                    : `1hr ${props?.data?.runtime - 60}`}
                  min
                </h1>
              </div>
            </div>
          </div>
          <div className=" w-1/2  ml-10 mt-44 hover:text-white capitalize font-mono tracking-widest leading-relaxed text-gray-400 text-xl ">
            <p className=" text-[#fecc7ff7] font-extrabold  hover:text-slate-50 text-4xl ">
              {props?.data?.tagline}
            </p>
            <br />
            <br />
            <p className=" ml-20">{props?.data?.overview}</p>

            <h1 className="mt-6 mb-6 text-[#fecc7ff7] font-extrabold text-4xl">
              Genre
            </h1>
            <div className="flex  ">
              {genress?.map((genr) => {
                return <Genre key={genr.id} text={genr.name} />;
              })}
            </div>
            <h1 className="mt-6 mb-6 text-[#fecc7ff7] font-extrabold text-4xl">
              Production Companies
            </h1>
            <div className="flex flex-row">
              {company?.map((com) => {
                return (
                  <Company
                    key={com.id}
                    logo_path={com.logo_path}
                    name={com.name}
                  />
                );
              })}
            </div>
            <h1 className="mt-6 mb-6 text-[#fecc7ff7] font-extrabold text-4xl">
              Budget
            </h1>
            <p className="text-2xl ml-20">
              <a className="px-5 py-2.5 relative rounded group font-medium text-white font-medium inline-block">
                <span className="absolute top-0 left-0 w-full h-full rounded opacity-50 filter blur-sm bg-gradient-to-br from-purple-600 to-blue-500"></span>
                <span className="h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded opacity-50 from-purple-600 to-blue-500"></span>
                <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-emerald-600 to-rose-500"></span>
                <span className="absolute inset-0 w-full h-full transition duration-200 ease-out rounded bg-gradient-to-br to-purple-600 from-blue-500"></span>
                <span className="relative">
                  ${props?.data?.budget === 0 ? "NULL" : props?.data?.budget}
                </span>
              </a>
            </p>
            <Link href={`${props?.data?.homepage}`}>
              <a target="_blank">
                <h1 className="mt-10 mb-4 flex hover:underline text-[#8efaed] font-bold font-serif text-4xl">
                  Watch Movie Official
                  <PlayIcon className="h-20 -mt-6 mx-2" />
                </h1>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
export default DetailsComponent;
