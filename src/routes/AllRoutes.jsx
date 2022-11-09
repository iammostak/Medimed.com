import { Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import Login from "./Login/Login";
import Pricing from "./Pricing/Pricing";
import Signup from "./Signup/Signup";
import Welness from "./Welness/Welness";

function AllRoutes() {
   return (
      <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/pricing" element={<Pricing />} />
         <Route path="/login" element={<Login />} />
         <Route path="/signup" element={<Signup />} />
         <Route path="/welness" element={<Welness/>}/>
      </Routes>
   );
}
