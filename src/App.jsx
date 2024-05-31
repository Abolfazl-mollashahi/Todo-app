import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import User from "./components/user/User";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/user" element={<User />} />
    </Routes>
  );
}

export default App;
