import { FaHome, FaCalendarAlt, FaBell, FaUser } from "react-icons/fa";
import { LuPlus } from "react-icons/lu";

function Footer({ darkMode,flags ,setflags }) {
  return (
    <footer
      className={`max-w-md mx-auto  fixed bottom-0 left-0 right-0 shadow-md p-4  flex justify-around items-center rounded-t-3xl ${
        darkMode ? "bg-black" : "bg-gray-300"
      } `}
    >
      <button className={` ${flags.home ? '-mt-8 -translate-y-2' : ''} w-[50px] h-[50px] flex items-center justify-center mask mask-hexagon bg-violet-600  `}
        onClick={() => {
          setflags({
            home: true,
            taghvim: false,
            plus: false,
            notif: false,
            user: false,
          })
        }}
      >
        <FooterIcon icon={<FaHome className={` ${darkMode ? "" : "text-white"}  `}  />} large={flags.home && true } />
      </button>

      <button className={` ${flags.taghvim ? '-mt-8 -translate-y-2' : ''} w-[50px] h-[50px] flex items-center justify-center mask mask-hexagon bg-violet-600  `}
        onClick={() => {
          setflags({
            home: false,
            taghvim: true,
            plus: false,
            notif: false,
            user: false,
          });
        }}
      >
        <FooterIcon icon={<FaCalendarAlt className={` ${darkMode ? "" : "text-white"}  `} />} large={flags.taghvim && true }  />
      </button>

      <button className={` ${flags.plus ? '-mt-8 -translate-y-2' : ''} w-[50px] h-[50px] flex items-center justify-center mask mask-hexagon bg-violet-600 `}
        onClick={() => {
          setflags({
            home: false,
            taghvim: false,
            plus: true,
            notif: false,
            user: false,
          });
        }}
      >
        <FooterIcon icon={<LuPlus className={` ${darkMode ? "" : "text-white"}  `} />} large={flags.plus && true } />
      </button>

      <button className={` ${flags.notif ? '-mt-8 -translate-y-2' : ''} w-[50px] h-[50px] flex items-center justify-center mask mask-hexagon bg-violet-600 `}
        onClick={() => {
          setflags({
            home: false,
            taghvim: false,
            plus: false,
            notif: true,
            user: false,
          });
        }}
      >
        <FooterIcon icon={<FaBell className={` ${darkMode ? "" : "text-white"}  `} />} large={flags.notif && true }  />
      </button>

      <button className={` ${flags.user ? ' -mt-8  -translate-y-2' : ''} w-[50px] h-[50px] flex items-center justify-center mask mask-hexagon bg-violet-600  `}
        onClick={() => {
          setflags({
            home: false,
            taghvim: false,
            plus: false,
            notif: false,
            user: true,
          })
        }}
      >
        <FooterIcon icon={<FaUser className={` ${darkMode ? "" : "text-white"}  `} />} large={flags.user && true }  />
      </button>
    </footer>
  );
}

function FooterIcon({ icon, large }) {
  return (
    <div
      className={`flex items-center justify-center ${
        large
          ? "text-3xl w-[60px] h-[60px] mask mask-hexagon  bg-yellow-600 text-white"
          : "text-2xl"
      }`}
    >
      {icon}
    </div>
  );
}

export default Footer;
