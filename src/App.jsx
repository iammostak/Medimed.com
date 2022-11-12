import { Container } from "@chakra-ui/react";
import axios from "axios";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import AllRoutes from "./routes/AllRoutes";

function App() {
   // Add a request interceptor
axios.interceptors.request.use(function (config) {
   config.headers.userid="636d1da8f6cde62d954b2473"
   
   return config;
 }, function (error) {
   // Do something with request error
   return Promise.reject(error);
 });


   return (
      <Container maxW={"container"} p={0} m={0}>
         <Navbar />
         <AllRoutes />
         <Footer />
      </Container>
   );
}

export default App;
