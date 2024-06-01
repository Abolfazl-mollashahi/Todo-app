import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import User from "./components/user/User";
import en from "./lang/en.json";
import fa from "./lang/fa.json";
import { IntlProvider } from "react-intl";
import { useState } from "react";

const messages = {en,fa};

function App() {
  const [lang , setlang] = useState("fa")

  const setLanguage = (langg) => {
    setlang(prevlang => {
      if(prevlang === 'fa'){
        return 'en'
      }
      if(prevlang === 'en'){
        return 'fa'
      }
    });
  };


  return (
    <IntlProvider locale={lang} messages={messages[lang]}>
    <Routes>
      <Route path="/" element={<Home setlang={setLanguage}  />} />
      <Route path="/user" element={<User />} />
    </Routes>
    </IntlProvider>
  );
}

export default App;
