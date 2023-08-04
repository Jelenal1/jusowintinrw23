import Link from "next/link";
import { FaHome, FaNewspaper, FaTimes } from "react-icons/fa";

function Sidenav({ open, setClosed }) {
  return (
    <div
      className={
        open
          ? "fixed top-0 right-0 z-10 transition-all ease-in"
          : "fixed top-0 -right-96 transition-all ease-out"
      }
    >
      <div
        className={
          "flex flex-col h-screen w-40 bg-red-600 opacity-100 items-center border-l-4 border-black"
        }
      >
        <button className="p-2 h-fit mb-20 mt-5" href="/" >
          <FaTimes className="h-10 w-10 aspect-square" onClick={() => setClosed()} />
        </button>
        <Link className="p-2 h-fit" href={"/"}>
          <FaHome className="h-10 w-10 aspect-square" />
        </Link>
        <Link href="/news"
          className="flex flex-col p-2 h-fit text-xl items-center"
        >
          <FaNewspaper className="h-10 w-10 aspect-square" />
          News
        </Link>
      </div>
    </div>
  );
}
export default Sidenav;
