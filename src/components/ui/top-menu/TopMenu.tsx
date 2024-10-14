import Link from "next/link";
import { IoCartOutline, IoSearchOutline } from "react-icons/io5";

export const TopMenu = () => {
  return (
    <nav className="flex w-full items-center justify-between px-5">
      <div>
        <Link href={"/"}>
          <span className="font-bold">E-commerce</span>
        </Link>
      </div>
      <div className="hidden sm:block">
        <Link href={"/category/men"}>
          <span className="m-2 rounded-md p-2 transition-all hover:bg-gray-100">
            Men
          </span>
        </Link>
        <Link href={"/category/women"}>
          <span className="m-2 rounded-md p-2 transition-all hover:bg-gray-100">
            Women
          </span>
        </Link>
        <Link href={"/category/kids"}>
          <span className="m-2 rounded-md p-2 transition-all hover:bg-gray-100">
            Kids
          </span>
        </Link>
      </div>

      <div className="flex items-center">
        <Link href={"/search"} className="mx-2">
          <IoSearchOutline className="h-5 w-5" />
        </Link>

        <Link href={"/cart"} className="mx-2">
          <div className="relative">
            <span className="absolute -right-2 -top-2 rounded-full bg-blue-700 px-1 text-xs font-bold text-white">
              3
            </span>
            <IoCartOutline className="h-5 w-5" />
          </div>
        </Link>

        <button className="m-2 rounded-md p-2 transition-all hover:bg-gray-100">
          Menu
        </button>
      </div>
    </nav>
  );
};
