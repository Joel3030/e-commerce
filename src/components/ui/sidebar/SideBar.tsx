"use client";

import { useUIStore } from "@/store";
import clsx from "clsx";
import Link from "next/link";
import {
  IoCloseOutline,
  IoLogInOutline,
  IoLogOutOutline,
  IoPeopleOutline,
  IoPersonOutline,
  IoSearchOutline,
  IoShirtOutline,
  IoTicketOutline,
} from "react-icons/io5";

export const Sidebar = () => {
  const isSideMenuOpen = useUIStore((state) => state.isSideMenuOpen);
  const closeMenu = useUIStore((state) => state.closeSideMenu);

  return (
    <div>
      {isSideMenuOpen && (
        <div className="fixed left-0 top-0 z-10 h-screen w-screen bg-black opacity-30" />
      )}

      {isSideMenuOpen && (
        <div
          onClick={closeMenu}
          className="fade-in fixed left-0 top-0 z-10 h-screen w-screen backdrop-blur-sm backdrop-filter"
        />
      )}

      <nav
        className={clsx(
          "fixed right-0 top-0 z-20 h-screen w-[500px] transform bg-white p-5 shadow-2xl transition-all duration-300",
          {
            "translate-x-full": !isSideMenuOpen,
          },
        )}
      >
        <IoCloseOutline
          size={50}
          className="absolute right-5 top-5 cursor-pointer"
          onClick={() => closeMenu()}
        />

        <div className="relative mt-14">
          <IoSearchOutline size={20} className="absolute left-2 top-2" />
          <input
            type="text"
            placeholder="search"
            className="w-full rounded border-b-2 border-gray-200 bg-gray-50 py-1 pl-10 pr-10 text-xl focus:border-blue-500 focus:outline-none"
          />
        </div>

        <Link
          href="/"
          className="mt-10 flex items-center rounded p-2 transition-all hover:bg-gray-100"
        >
          <IoPersonOutline size={30} />
          <span className="ml-3 text-xl">Profile</span>
        </Link>

        <Link
          href="/"
          className="mt-10 flex items-center rounded p-2 transition-all hover:bg-gray-100"
        >
          <IoTicketOutline size={30} />
          <span className="ml-3 text-xl">Orders</span>
        </Link>

        <Link
          href="/"
          className="mt-10 flex items-center rounded p-2 transition-all hover:bg-gray-100"
        >
          <IoLogInOutline size={30} />
          <span className="ml-3 text-xl">Login</span>
        </Link>

        <Link
          href="/"
          className="mt-10 flex items-center rounded p-2 transition-all hover:bg-gray-100"
        >
          <IoLogOutOutline size={30} />
          <span className="ml-3 text-xl">Close</span>
        </Link>

        {/* Line Separator */}
        <div className="my-10 h-px w-full bg-gray-200" />

        <Link
          href="/"
          className="mt-10 flex items-center rounded p-2 transition-all hover:bg-gray-100"
        >
          <IoShirtOutline size={30} />
          <span className="ml-3 text-xl">Product</span>
        </Link>

        <Link
          href="/"
          className="mt-10 flex items-center rounded p-2 transition-all hover:bg-gray-100"
        >
          <IoTicketOutline size={30} />
          <span className="ml-3 text-xl">Orders</span>
        </Link>

        <Link
          href="/"
          className="mt-10 flex items-center rounded p-2 transition-all hover:bg-gray-100"
        >
          <IoPeopleOutline size={30} />
          <span className="ml-3 text-xl">Users</span>
        </Link>
      </nav>
    </div>
  );
};
