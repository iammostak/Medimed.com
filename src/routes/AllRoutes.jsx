import { Route, Routes } from "react-router-dom";
import Cart from "./Cart/Cart";
import Home from "./Home/Home";
import Login from "./Login/Login";
import Pricing from "./Pricing/Pricing";

function AllRoutes() {
   return (
      <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/pricing" element={<Pricing />} />
         <Route path="/login" element={<Login />} />
         <Route path="/cart" element={<Cart />} />
      </Routes>
   );
}

export default AllRoutes;
