import { useState } from "react";
import { useIntl } from "react-intl";
import imgiran from "../assets/iran.webp";
import imgusa from "../assets/usa.webp";

function Setting({ darkmode, setlang }) {
  const [flagfa, setflagfa] = useState(true);
  const [flagen, setflagen] = useState(false);
  const intl = useIntl();

  const changelang = () => {
    if (flagfa) {
      setlang("en");
      setflagfa(false);
      setflagen(true);
    } else {
      setlang("fa");
      setflagfa(true);
      setflagen(false);
    }
  };
  return (
    <div className="">
      <div className=" m-3 flex gap-2">
        <div className="dropdown w-max flex justify-center flex-col">
          <div
            tabIndex={0}
            role="button"
            className=" cursor-pointer flex mb-1 w-max px-3 py-1 gap-2  items-center justify-center  bg-violet-500   rounded-full  "
            >
            <p>Language :</p>
            {flagen && (
              // en
              <img
                src={imgusa}
                className=" w-[33px] h-[33px] object-cover  rounded-full"
                alt=""
              />
            )}
            {flagfa && (
              // fa
              <img
                src={imgiran}
                className=" w-[33px] h-[33px] object-cover  rounded-full"
                alt=""
              />
            )}
          </div>
          <ul
            tabIndex={0}
            className="p-1  w-[120px]  mx-auto border top-11 left-0 right-0  flex flex-col gap-2 justify-center items-center  shadow-md shadow-violet-400  dropdown-content   rounded-xl  z-[1]"
          >
            {flagfa ? (
              //en
              <li onClick={changelang}>
                <img
                  src={imgusa}
                  className=" w-[33px] h-[33px] object-cover  cursor-pointer  rounded-full"
                  alt=""
                />
              </li>
            ) : (
              //fa
              <li onClick={changelang}>
                <img
                  src={imgiran}
                  className=" w-[33px] h-[33px] object-cover cursor-pointer   rounded-full"
                  alt=""
                />
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Setting;
