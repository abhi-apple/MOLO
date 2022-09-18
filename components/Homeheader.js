import Image from "next/image";
import hulu from "../public/hululo.png";
import HeaderItem from "./HeaderItem";
import {
  HomeIcon,
  BadgeCheckIcon,
  CollectionIcon,
  LightningBoltIcon,
  SearchIcon,
  UserIcon,
} from "@heroicons/react/outline";
import Link from "next/link";

function Homeheader() {
  return (
    <header className="flex flex-col sm:flex-row m-5 ml-9 mb-36 justify-between h-auto items-center">
      <div className="flex flex-grow justify-evenly max-w-2xl">
        {/* <Link href={`/`}>
          <a>
            <HeaderItem title="HOME" Icon={HomeIcon} />
          </a>
        </Link>
        <HeaderItem title="TRENDING" Icon={LightningBoltIcon} />
        <HeaderItem title="VERIFIED" Icon={BadgeCheckIcon} />
        <HeaderItem title="COLLECTIONS" Icon={CollectionIcon} />
        <HeaderItem title="SEARCH" Icon={SearchIcon} />
        <HeaderItem title="ACCOUNT" Icon={UserIcon} /> */}
      </div>
      <Image
        className="object-contain"
        alt="image"
        src={hulu}
        width={300}
        height={150}
      />
    </header>
  );
}

export default Homeheader;
