import React, { useEffect, useRef, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import moment from "jalali-moment";

function Taghvim({ date, setDate, darkmode, setflagTaghvim }) {
  const formatJalaliDate = (date) => {
    return moment(date).locale("fa").format("YYYY/MM/DD");
  };
  const divtaghvim = useRef()

  const onclick = (e)=>{
    console.log(e.target);
  }

  useEffect(()=>{
    document.addEventListener("click",onclick)
  },[])

  return (
    <div ref={divtaghvim}  className={` divtaghvim  w-[330px]  mx-auto fixed top-[25%]   left-0 right-0  `}>
      <button
        onClick={() => setflagTaghvim(false)}
        className=" p-3 px-4 mask mask-hexagon absolute -top-6 -right-6  bg-red-600 text-white"
      >
        X
      </button>
      <Calendar
        onChange={setDate}
        value={date}
        className={` taghvim  font-bold text-[20px]  rounded-xl ${
          darkmode
            ? ""
            : " bg-gray-800 text-orange-400 border-0  shadow-md shadow-violet-950  "
        } `}
      />
      
    </div>
  );
}

export default Taghvim;
