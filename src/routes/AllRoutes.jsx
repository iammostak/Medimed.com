import { Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import Login from "./Login/Login";
import Welness from "./Welness/Welness"
import Signup from "./Signup/Signup";

function AllRoutes() {
   return (
      <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/welness" element={<Welness />} />
         <Route path="/login" element={<Login />} />
         <Route path="/signup" element={<Signup />} />
      </Routes>
   );
}

export default AllRoutes;
