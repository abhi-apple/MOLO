import React from "react";

function Loading() {
  return (
    <div classNameName=" mt-48 h-screen bg-[#000000]">
      <div classNameName="flex flex-row justify-center space-x-36 items-center space-y-14 gap-2">
        <div classNameName="flex  ">
          <div classNameName="w-56 h-36 border-b-2 border-[#ff0000] hover:border-[#00BF00]  hover:w-24 hover:h-24  rounded-full animate-spin" />
        </div>
        <div classNameName="flex   ">
          <div classNameName="w-56 h-36 border-l-2 border-[#0000FF] hover:border-[#ff0000] rounded-full animate-spin" />
        </div>
        <div classNameName="flex  ">
          <div classNameName="w-56 h-36 border-t-4 border-b-4 border-[#00BF00] hover:border-[#0000FF] hover:w-56 hover:h-36 rounded-full animate-spin" />
        </div>
      </div>
      
    </div>
  );
}

export default Loading;
