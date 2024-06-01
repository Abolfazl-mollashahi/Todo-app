import React, { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import User from "../components/user/User";
import Taghvim from "../components/Taghvim";
import CreateTodo from "../components/CreateTodo";
import Setting from "../components/Setting";
import { FormattedMessage } from "react-intl";

function Home({setlang}) {
  const [darkMode, setDarkMode] = useState(false);
  const [flags, setflags] = useState({
    home: false,
    taghvim: false,
    plus: true,
    setting: false,
    user: false,
  });

  return (
    <div
      className={`min-h-screen max-w-md mx-auto  flex flex-col ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-400 text-black"
      }`}
    >
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />

      <FormattedMessage id="welcome" />
      {flags.plus && <CreateTodo darkMode={darkMode} />}

      {flags.taghvim && <User darkMode={darkMode} />}
      
      {flags.setting && <Setting darkMode={darkMode} setlang={setlang}  />}

      <Footer darkMode={darkMode} flags={flags} setflags={setflags} />
    </div>
  );
}

export default Home;
