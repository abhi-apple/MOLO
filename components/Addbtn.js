import { useState } from "react";
import Link from "next/link";
import { FilmIcon } from "@heroicons/react/outline";
const Addbtn = (props) => {
  const [showModal, setshowModal] = useState(false);
  // const addtocoll = async () => {
  //   await fetch("http://localhost:9000/posts", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(props.data),
  //   });
  // };
  return (
      
    <div>
      {" "}
      <button
        type="button"

        onClick={() => {       setshowModal(true);}}
      >
        <div className="flex flex-col pt-1 items-center cursor-pointer w-12 sm:w-20 group hover:text-white">
          <FilmIcon className="h-8 mb-1 group-hover:animate-bounce transition delay-150 duration-300 ease-in-out   " />
          <p className="opacity-0 group-hover:opacity-100 tracking-widest truncate">
            Watch Now
          </p>
        </div>
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl text-[#ff0000] font-semibold">
                    {props?.data?.original_title || props?.data?.title}
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setshowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <p className="my-4 text-[#7c7c89] text-lg font-sans leading-relaxed">
                    {props?.data?.overview}
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setshowModal(false)}
                  >
                    Close
                  </button>
                  <Link href={`/Collections`}>
                    <button
                      className="bg-[#ff0000] text-[#ffffff] hover:bg-[#e80000] active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => setshowModal(false)}
                    >
                      Already In the List
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </div>
  );
};

export default Addbtn;
