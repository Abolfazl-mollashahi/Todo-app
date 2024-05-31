import React, { useState } from "react";
import { IoMdSearch } from "react-icons/io";
import Todo from "./Todo";

function User({ darkMode }) {
  const tasks = [
    { time: "8:00 AM", text: "Go to church" },
    { time: "12:00 PM", text: "Cook for the family" },
    { time: "2:00 PM", text: "Wash my clothes" },
    { time: "5:00 PM", text: "Visit Chastity" },
    { time: "6:00 PM", text: "Make my hair" },
    { time: "8:00 PM", text: "Call my brother" },
    { time: "8:00 AM", text: "Go to church" },
    { time: "12:00 PM", text: "Cook for the family" },
    { time: "2:00 PM", text: "Wash my clothes" },
    { time: "5:00 PM", text: "Visit Chastity" },
    { time: "6:00 PM", text: "Make my hair" },
    { time: "8:00 PM", text: "Call my brother" },
  ];
  return (
    <main className="p-4 flex-grow mb-[65px]">
      <div className="flex flex-col justify-between  mb-1">
        <div className="w-max mx-auto  relative">
          <button className=" p-1  absolute top-1 left-1 mask mask-hexagon  bg-violet-700 text-white  ">
            <IoMdSearch size={28} />
          </button>
          <input
            type="text"
            placeholder="Search"
            className={` ${
              darkMode
                ? "border-violet-500"
                : " bg-gray-700 border-violet-900  text-white"
            }  p-2.5 w-[370px] pl-[45px]  border outline-none  rounded-xl`}
          />
        </div>
        <h2 className="text-lg mt-1">Today's tasks</h2>
      </div>

      <div className=" w-full h-[400px]  overflow-scroll overflow-x-auto ">
        {tasks.map((task, index) => (
          <Todo key={index} task={task} darkMode={darkMode} />
        ))}
      </div>
    </main>
  );
}

export default User;
