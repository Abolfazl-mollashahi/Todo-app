import React, { useState } from "react";
import moment from "jalali-moment";
import { FaCalendarAlt } from "react-icons/fa";
import Taghvim from "./Taghvim";

function CreateTodo({ darkmode }) {
  const [flagTaghvim, setflagTaghvim] = useState(false);
  const [flagTaghvim2, setflagTaghvim2] = useState(false);
  const [db, setdb] = useState([]);

  const [TodoData, setTodoData] = useState({
    text: "",
    startDate: Date(),
    endDate: Date(),
  });

  const formatJalaliDate = (date) => {
    return moment(date).locale("fa").format("YYYY/MM/DD");
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setTodoData({
      ...TodoData,
      [name]: value,
    });
  };

  const handelstartdate=(e)=>{
    setTodoData({
      ...TodoData, startDate : `${e}`
    })
  }

  const handelenddate=(e)=>{
    setTodoData({
      ...TodoData, endDate : `${e}`
    })
  }


  return (
    <div className={`p-4 ${darkmode ? "bg-white " : ""} relative `}>
      <div dir="ltr"  className="space-y-4">
        <div>
          <label className="block my-2  text-gray-700 dark:text-gray-200">
            متن
          </label>
          <input
            type="text"
            name="text"
            value={TodoData.text}
            onChange={handleChange}
            className="w-full px-3 py-2 outline-none  rounded-xl  bg-violet-900 text-white"
          />
        </div>

        <div>
          <label className="block my-2  text-gray-700 dark:text-gray-200">
            تاریخ شروع
          </label>

          <div className="flex p-1 items-center gap-3 rounded-2xl bg-violet-900 text-white">
            <button
              onClick={() =>setflagTaghvim(true)}
              className=" w-[40px] h-[40px] mask mask-hexagon bg-violet-500"
            >
              <FaCalendarAlt
                size={20}
                className={` mx-auto  ${darkmode ? "" : "text-white"}  `}
              />
            </button>
            {formatJalaliDate(TodoData.startDate)}
          </div>
          {flagTaghvim && <Taghvim date={TodoData.startDate} setDate={handelstartdate} darkmode={darkmode} setflagTaghvim={setflagTaghvim}  />}
        </div>

        <div>
          <label className="block my-2  text-gray-700 dark:text-gray-200">
            تاریخ پایان
          </label>
          <div className="flex p-1 items-center gap-3 rounded-2xl bg-violet-900 text-white">
            <button
              onClick={(e) => setflagTaghvim2(true) }
              className=" w-[40px] h-[40px] mask mask-hexagon bg-violet-500"
            >
              <FaCalendarAlt
                size={20}
                className={` mx-auto  ${darkmode ? "" : "text-white"}  `}
              />
            </button>
            {formatJalaliDate(TodoData.endDate)}
          </div>
          {flagTaghvim2 && <Taghvim date={TodoData.endDate} setDate={handelenddate} darkmode={darkmode} setflagTaghvim={setflagTaghvim2}   />}
        </div>

        <button className=" p-4  mask mask-hexagon bg-green-700 text-white" >save</button>
        <button className=" p-4  mask mask-hexagon bg-red-700 text-white" >cancel</button>
        
      </div>
    </div>
  );
}

export default CreateTodo;
