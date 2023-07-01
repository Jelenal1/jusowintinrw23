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
          "flex flex-col h-screen w-40 bg-rose-500 opacity-100 items-center border-l-4 border-black"
        }
      >
        <button className="p-2 h-fit mb-20 mt-5" >
          <FaTimes className="h-10 w-10 aspect-square" onClick={() => setClosed()}/>
        </button>
        <button className="p-2 h-fit">
          <FaHome className="h-10 w-10 aspect-square" />
        </button>
        <button
          className="flex flex-col p-2 h-fit text-xl items-center"
        >
          <FaNewspaper className="h-10 w-10 aspect-square" />
          News
        </button>
      </div>
    </div>
  );
}
export default Sidenav;
