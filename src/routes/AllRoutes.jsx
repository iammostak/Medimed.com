import { Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import Login from "./Login/Login";
import Signup from "./Signup/Signup";

import SingleProduct from "./Wellness/SingleProductPage/SingleProduct";

function AllRoutes() {
   return (
      <Routes>
         <Route path="/" element={<Home/>} />
         <Route path="/login" element={<Login />} />
         <Route path="/signup" element={<Signup />} />
         <Route path="/sp" element={<SingleProduct/>} />
       
      </Routes>
   );
}

export default AllRoutes;
