import { Route, Routes } from "react-router-dom";
import Cart from "./Cart/Cart";
import Home from "./Home/Home";
import Login from "./Login/Login";
import Welness from "./Welness/Welness";
import SingleProduct from "./Wellness/SingleProductPage/SingleProduct";

function AllRoutes() {
   return (
      <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/login" element={<Login />} />
         <Route path="/cart" element={<Cart/>} />
         <Route path="/welness" element={<Welness/>}/>
         <Route path="/wellness/:id" element={<SingleProduct/>}/>
      </Routes>
   );
}

export default AllRoutes;
