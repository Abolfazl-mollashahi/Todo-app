import React, { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import User from "../components/user/User";

function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [flags, setflags] = useState({
    home: false,
    taghvim: false,
    plus: true,
    notif: false,
    user: false,
  });

  return ( 
    <div className={`min-h-screen max-w-md mx-auto  flex flex-col ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-400 text-black'}`}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode}  />

      {
        flags.user && <User darkMode={darkMode}  />
      }

      
      <Footer darkMode={darkMode} flags={flags} setflags={setflags}  />
    </div>
   );
}

export default Home;