'use client';

import { FaBars } from "react-icons/fa";
import Sidenav from "./Sidenav";
import { useState } from "react";
import Link from "next/link";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-red-500 p-4 flex">
      <Link href="/">
        <div
          className="flex items-center text-2xl gap-2 p-1 select-none"
        >
          <img
            src="/img/jusologonoir.svg"
            className="h-14"
            alt="jusologo noir"
          />
          JUSO Winterthur
        </div>
      </Link>

      <div className="flex w-fit items-center p-1 ml-auto mr-2 hover: cursor-pointer">
        <FaBars
          className={"absolute right-8 h-10 w-10 aspect-square"}
          onClick={() => setOpen(true)}
        />
      </div>
      <Sidenav open={open} setClosed={() => setOpen(false)} />

    </div>
  );
}
export default Navbar;
