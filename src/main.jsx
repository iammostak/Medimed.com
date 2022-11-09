import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import { UserAuthContextProvider } from "./routes/Login/Context";

ReactDOM.createRoot(document.getElementById("root")).render(
   <React.StrictMode>
      <UserAuthContextProvider>
         <ChakraProvider>
            <BrowserRouter>
               <App />
            </BrowserRouter>
         </ChakraProvider>
      </UserAuthContextProvider>
   </React.StrictMode>
);
