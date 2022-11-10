import { Route, Routes } from "react-router-dom";
import Cart from "./Cart/Cart";
import Home from "./Home/Home";
import Login from "./Login/Login";
import Wellness from "./Wellness/Wellness";

function AllRoutes() {
   return (
      <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/login" element={<Login />} />
         <Route path="/cart" element={<Cart />} />
         <Route path="/wellness" element={<Wellness/>}/>
      </Routes>
   );
}

export default AllRoutes;
