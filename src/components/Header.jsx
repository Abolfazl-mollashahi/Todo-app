import { CiDark } from "react-icons/ci";
import { IoSunnyOutline } from "react-icons/io5";
import person from "../assets/person.jpg";
import { TbUserHexagon } from "react-icons/tb";
import { useState } from "react";
// ایکن یوزر
{
  /* <TbUserHexagon /> */
}
function Header({ darkMode, setDarkMode }) {

  return (
    <header className="p-2  flex justify-between items-start">
      <div className="text-center text-[13px]  flex flex-col justify-center items-center">
        <img
          src={person}
          alt="Profile"
          className="w-[70px] h-[70px] mask mask-hexagon  rounded-full"
        />
        <p>Good evening, Ivy</p>
      </div>
      <button
        className={
          " scale-100 hover:scale-110  mask mask-hexagon p-2  bg-red-400  "
        }
        onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode ? <IoSunnyOutline size={35} /> : <CiDark size={35} />}
      </button>
    </header>
  );
}

export default Header;