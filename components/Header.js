import Image from "next/image";
import hulu from "../public/hululo.png";
import HeaderItem from "./HeaderItem";
import { AsyncPaginate } from "react-select-async-paginate";
import { useState } from "react";
import { signOut, useSession } from "next-auth/react";
import { GoSignOut } from "react-icons/go";
import {
  HomeIcon,
  BadgeCheckIcon,
  CollectionIcon,
  LightningBoltIcon,
  SearchIcon,
  UserIcon,
  CubeTransparentIcon,
} from "@heroicons/react/outline";
import Link from "next/link";
import { useRouter } from "next/router";

function Header() {
  const { data: session } = useSession();
  // console.log(session);

  const [search, setsearch] = useState(null);
  const handleOnchange = (e) => {
    setsearch(e.target.value);
    // onClick()
  };
  async function onClick() {
    router.push({ pathname: "/searchresults", query: { name: search } });
  }
  const handleKeypress = (e) => {
    if (e.key === "Enter") {
      onClick();
    }
  };

  const router = useRouter();
  return (
    <header className="flex flex-col sm:flex-row justify-between   h-auto items-center  ">
      {router.pathname === "/" ? (
        <></>
      ) : (
        <div className="flex flex-grow justify-evenly max-w-2xl">
          <Link className="scroll-smooth hover:scroll-auto" href={`/`}>
            <a>
              <HeaderItem title="HOME" Icon={HomeIcon} />
            </a>
          </Link>
          <Link className="scroll-smooth hover:scroll-auto" href={`/movies`}>
            <a>
              <HeaderItem title="TRENDING" Icon={LightningBoltIcon} />
            </a>
          </Link>
          <HeaderItem title="VERIFIED" Icon={BadgeCheckIcon} />
          <Link
            className="scroll-smooth hover:scroll-auto"
            href={`/Collections`}
          >
            <a>
              <HeaderItem title="COLLECTIONS" Icon={CollectionIcon} />
            </a>
          </Link>

          <Link className="scroll-smooth hover:scroll-auto" href={`#search`}>
            <a>
              <HeaderItem title="SEARCH" Icon={SearchIcon} />
            </a>
          </Link>
          {session ? (
            <Link className="scroll-smooth hover:scroll-auto" href={`/Profile`}>
              <a>
                <HeaderItem title="ACCOUNT" Icon={UserIcon} />
              </a>
            </Link>
          ) : (
            <Link className="scroll-smooth hover:scroll-auto" href={`/logsign`}>
              <a>
                <HeaderItem title="ACCOUNT" Icon={UserIcon} />
              </a>
            </Link>
          )}
          <Link className="scroll-smooth hover:scroll-auto" href={`/Sub`}>
            <a>
              <HeaderItem title="MOLO+" Icon={CubeTransparentIcon} />
            </a>
          </Link>
        </div>
      )}
      {router.pathname === "/movies" ? (
        <div className="flex ml-32">
          <div className="mb-3 xl:w-96">
            <div
              id="search"
              className="input-group relative flex flex-row space-x-3 items-stretch w-full mb-4"
            >
              <input
                onKeyPress={handleKeypress}
                onChange={(e) => handleOnchange(e)}
                type="search"
                className="form-control relative flex-auto min-w-0  w-full px-3 py-1.5 text-base font-normal text-white bg-white opacity-50 hover:opacity-100  bg-clip-padding  rounded transition duration-200 ease-in-out transform sm:hover:scale-105 m-0 focus:text-black  focus:bg-white focus:outline-none"
                placeholder="Search"
                aria-label="Search"
                aria-describedby="button-addon2"
              />

              <button
                onClick={() => onClick()}
                className="btn   px-6 py-2.5 bg-[#ff0000] text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-[#e80000] hover:shadow-lg focus:bg-[#e80000]  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800  active:shadow-lg  flex  items-center"
                type="button"
                id="button-addon2"
              >
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="search"
                  className="w-4"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}

      {router.pathname === "/" ? (
        <></>
      ) : (
        <Image
          className="object-contain"
          alt="image"
          src={hulu}
          width={250}
          height={120}
        />
      )}
      {session && (
        <Link href={`/`}>
          <button onClick={() => signOut()}>
            <GoSignOut />
          </button>
        </Link>
      )}
    </header>
  );
}

export default Header;
