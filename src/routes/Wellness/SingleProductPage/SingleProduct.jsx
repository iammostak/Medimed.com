import {
  Box,
  Flex,
  Text,
  Heading,
  Input,
  Img,
  Stack,
  Image,
  Button,
  color,
} from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { BsFillHeartFill, BsArrowRightCircleFill } from "react-icons/bs";
import { useParams } from "react-router-dom";
import MainImg from "./MainImg";
import MobileView from "./mobile";
import Rating from "./Rating";
const mainColor = "rgb(50,174,177)";

const getData=async(id)=>{
let d=await axios.get(`https://netmeds-new-api.herokuapp.com/products/${id}`)

return d

}



export default function SingleProduct() {
  const[singleData,setSingleData]=useState({})
const {id}=useParams()

useEffect(()=>{

  getData(id).then((res)=>{
    console.log(res.data)
    setSingleData({...res.data})
  })
console.log(id)

},[id])

  return (
    <Box w="80%" m="auto"  bg="#f3f6fb" p="1%" >
      
      <br /><br />
      <MobileView singleData={singleData} />
      <Box w="95%" m="auto"  >
        <Flex m="auto"  >
          {/* /left box */}
          <Box  w="50%" bg="white" display={["none","none","unset","unset","unset"]} >
            <MainImg url={singleData?.url} off={singleData?.off} />
          </Box>

          {/* Right box */}
          <Box  w="50%" bg="white" p="2%"  display={["none","none","unset","unset","unset"]} >
            {/* 1st right */}
            <Flex
              flexDirection={"column"}
              alignItems={"flex-start  "}
              borderBottom="1px solid gray "
              lineHeight={2}
            >
              {/* //  Product Title */}
              <Text fontSize={["7px","10px","15px","20px"]}>
                {singleData?.title}
              </Text>
              <Flex  gap={"10px"}  w="100%" >
                {/* <Flex justifyContent={"center"} alignItems="center" > */}

                {/* </Flex> */}
                <Flex justifyContent={"center"} alignItems={"center"} bg={"rgb(246,246,247)"}  minH={["25px"]} fontSize={["7px","10px","15px","20px","20px"]} >Personal Care</Flex>
                <Flex  justifyContent={"center"} alignItems={"center"} bg={"rgb(246,246,247)"} minH={["25px"]} fontSize={["7px","10px","15px","20px","20px"]}  >
                  Face Personel Care
                </Flex>
              </Flex>
              <br />
              <Box>
<BsFillHeartFill color={"rgb(199,200,208)"} />
              </Box>
              <br />
               </Flex>
            <br />
      
            {/* 2nd */}
            <Flex
              flexDirection={"column"}
              alignItems={"flex-start  "}
              borderBottom="1px solid gray "
              lineHeight={[1,1,1,2]}
            >
              <Text color={"rgb(239,66,129)"}
                fontWeight="bold"
                fontSize={["12px","12px","15px","20px","20px"]} >Best Price* ₹ {singleData?.Fprice}</Text>
                 <Flex gap="2%" w={'100%'} fontSize={["10px","10px","15px","20px","20px"]} >
                 M.R.P.:<del  >Rs.{singleData?.price}</del>{" "}
              </Flex>
                 
                 <Text fontSize={["12px","12px","15px","20px","20px"]} color={"green"}>{singleData?.off} (Inclusive of all taxes)</Text>
              <Text fontSize={["12px","12px","15px","20px","20px"]} >* {singleData?.mkt}</Text>
              <Text fontSize={["12px","12px","15px","20px","20px"]}>* Country of Origin: India</Text>
              <Text fontSize={["12px","12px","15px","20px","20px"]}>
                * Delivery charges if applicable will be applied at checkout
              </Text>
              <br />
              <Button fontSize={["10px","10px","15px","20px","20px"]} bg={'rgb(36,174,177)'} color="white" >Add to Cart</Button>
              <br />
             
            </Flex>

            <br />
           
            {/* 3rd */}
            <Flex
              flexDirection={"column"}
              alignItems={"flex-start  "}
              lineHeight={1}
            >
              <Text fontSize={["12px","12px","15px","20px","20px"]} >Check Availability & Expiry</Text><br /> 
              <Flex borderBottom="5px solid rgb(36,174,177)" justifyContent={"space-between"} alignItems="center"  >
                <Text fontSize={["15px","15px","20px","25px","25px"]} color={"rgb(36,174,177)"}>
                  PINCODE:
                </Text>
                <Input color="rgb(36,174,177)" fontSize={["12px","12px","15px","20px","20px"]} border={"none"} variant='unstyled' />
                <BsArrowRightCircleFill
                  color="rgb(36,174,177)"
                  fontSize={"30px"}
                />
              </Flex>
<br />
              <Text color={"rgb(111,115,136)"} fontSize={["20px","20px","25px","30px","30px"]}>
                OFFERS APPLICABLE
              </Text>
              <br />
              <Flex
                justifyContent={"space-between"}
                w="100%"
                bg="rgb(243,243,243)"
                    borderRadius={"2rem"}
                p="1%"
                alignItems={"center"}
              >
                <Flex gap="1%" alignItems={"center"} w="60%" >
                  <Box>
                    {" "}
                    <Img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5Ojf/2wBDAQoKCg0MDRoPDxo3JR8lNzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzf/wAARCAAqADIDASIAAhEBAxEB/8QAGQAAAwEBAQAAAAAAAAAAAAAAAAMFBAIH/8QAKxAAAQMDAQcEAgMAAAAAAAAAAQACAwQFERITITFBUWFxBiIykRShIzNC/8QAFwEBAQEBAAAAAAAAAAAAAAAAAgMABP/EACURAAIBAgUDBQAAAAAAAAAAAAABAgMREhMhIjEUQVEjgZGx4f/aAAwDAQACEQMRAD8A9pha0u3gHcnFjAMlrQB2SoPmfCg3WWe7XsWmkrnQ07IS6d0IydWcaSeW7H2lFXJVamWuLt8Gif1PZ2NOweamUO0iKKMlzj2yMFEHqezSNYJZDBKTpMckRy098DC2UUVroZIaGB1O2ojZhrSRtMcfO/JK7rqKhr2T0szY9pIwa9ONYGdx68R+ktngl67V1JX8W/TZoYf8t+kiRga7AG5Q7XNLab261Vda6WB8QNO6bjqzjSCr0/zHhGUbFaVTMXFmuReB0CEIRKjIPmfCh+kw0Vl52P8AT+V7SR7s7857cMK5B8z4UG6Qy2q+Nu1JRPlgdC5tQIeJOc5I+vpOGqaOavtlGp2T+9BV1tj6WvZNFI2V01UJ4acRjaOkA4auTBxPZFquT6S4ugmibI6epMMs5kG0fIBx08mDgFco62hrmwVUTojJIz+PVgPA5jry/S4rJbXQvmrpm04qI26nOAbtOmOvQJYr6NEspJ5kJWXJM9WY/Ns+1xsfyfdpPvJ3Yx245V2f5jwoFqinu18N2q6J0NOyENgbMcnVnOoDluz9q/P8x4RnpZFaG6UqnZvT2FoQhA6TuEgO3nG5O1NPMfazIWMTZ/S9nka8xRGCRx1CSOQ5aewJwEQ+mLQwNM0ZqJdRc6WWQlzyeuNxVJCWOXkh01G98K+DSHMAwC0AJMjtTsjguEIlwQhCxj//2Q==" />
                  </Box>
                  <Flex
                    flexDirection={"column"}
                    alignItems={"flex-start"}
                    justifyContent="center"
                  >
                    <Text fontSize={["12px","12px","15px","20px","20px"]}>Default Discount</Text>
                    <Text color={"green"} fontWeight="bold" fontSize={["10px","10px","12px","15px","15px"]} >
                      You get {singleData?.off} OFF on this product
                    </Text>
                  </Flex>
                </Flex>
                
                <Flex w="40%" >
                  <Text fontSize={["10px","12px","15px","20px","20px"]} color="rgb(239,155,189)">Offer Appiled</Text>
                </Flex>
              </Flex>

              <br />
              <br />
            </Flex>
          </Box>
        </Flex>
        {/* 1ts step end here */}
        <br />
        <br />
        <br />
        {/* second step start here  */}
        <Flex
          flexDirection={"column"}
          justifyContent="center"
          bg="white"
          h="200px"
          alignItems={"center"}
        >
          <Box w="90%">
            <Text
              textAlign={"left"}
              fontSize={"20px"}
              fontWeight="bold"
              color={"rgb(118,114,141)"}
            >
              PRODUCT DETAILS
            </Text>
          </Box>
          <Flex
            bg="rgb(243,243,243)"
            justifyContent={"space-between"}
            height="100px"
            alignItems={"center"}
            p="2%"
            w="90%"
          >
            <Text>Country Of Origin</Text>
            <Text>India</Text>
          </Flex>
        </Flex>
        {/* second step end here */}
        <br /> <br />
        <br /> <br />
        {/* third step start here / RATING & REVIEWS */}
        <Flex
          h="350px"
          bg="white"
          w="100%"
          p="2%"
          flexDirection={"column"}
          justifyContent="center"
        >
          <Box h="10%">
            {" "}
            <Text
              textAlign={"left"}
              fontSize={"20px"}
              fontWeight="bold"
              color={"rgb(118,114,141)"}
            >
              RATING & REVIEWS
            </Text>{" "}
          </Box>
          <Flex h="70%">
            <Box w="50%" backgroundImage={"url(https://user-images.githubusercontent.com/101392872/201063924-c0bec05a-125d-44dd-b8e8-fc7de8bef6ac.png)"} backgroundRepeat="no-repeat" backgroundPosition={"center"} backgroundSize="contain" >

            </Box>
            <Flex
              w="50%"
              p={"2%"}
              alignItems={"center"}
              justifyContent="space-between"
              borderLeft={"1px solid gray"}
            >
              <Box>
                <img
                  src="https://www.netmeds.com/assets/gloryweb/icons/rate-icon.png"
                  alt="review logo"
                />
              </Box>
              <Text fontWeight={"bold"}>Rate Product</Text>
              {/* <Rating /> */}
              
            </Flex>
          </Flex>
        </Flex>
        {/* third step end here / RATING & REVIEWS */}
        <br />
        <br />
        <br />
        {/* fourth start here / Disclaimer */}
        <Flex
          flexDirection={"column"}
          alignItems="flex-start"
          justifyContent={"center"}
          h={"150px"}
          bg="white"
          p="2%"
        >
          <Text fontWeight={"bold"}  fontSize={['15px',"15px","25px","25px","30px"]} color={"rgb(118,114,141)"}>
            DISCLAIMER
          </Text>
          <Text  fontSize={['10px',"10px","15px","15px","15px"]} >
            The contents of this website are for informational purposes only and
            not intended to be a substitute for professional medical advice,
            diagnosis, or treatment. Please seek the advice of a physician or
            other qualified health provider with any questions you may have
            regarding a medical condition. Do not disregard professional medical
            advice or delay in seeking it because of something you have read on
            this website.
          </Text>
        </Flex>
        <br />
        <br />
        <br />
        {/* fourth step end here / Disclaimer */}
        {/* fifth step START  here / aDD TO CART */}
        <Flex
          w={"100%"}
          h="100px"
          border={`1px solid rgb(50,174,177)`}
          position="sticky"
          bottom={"10px"}
          bg="white"
        >
          <Flex w="65%" alignItems={"center"} >
            <Box w={["120px"]} h={"90%"}>
              <Image
                w={"100%"}
                h="100%"
                src={singleData?.url}
              />
            </Box>
            <Box>
              <Text
                color={"rgb(120,116,142)"}
                fontWeight={"bold"}
                fontSize={['10px',"10px","15px","15px","15px"]}
                
              >
               {singleData?.title}
              </Text>
              <Text color={"rgb(120,116,142)"} fontSize={['10px',"10px","15px","15px","15px"]}>
                {singleData?.mkt}
              </Text>
            </Box>
          </Flex>

          {/* /////////////// */}
          <Flex justifyContent={"space-around"} w="35%" alignItems={"center"}>
            <Box>
              <Text
                color={"rgb(239,66,129)"}
                fontWeight="bold"
                fontSize={['10px',"10px","15px","20px","20px"]}
              >
                Rs.{singleData?.Fprice}
              </Text>
              {/* <Box fontSize={['10px',"10px","15px","20px","20px"]}  >
                <Text color={"green"}>20% off</Text> M.R.P.:<del>Rs.100.00</del>{" "}
              </Box> */}
            </Box>

            <Button bg="rgb(36,174,177)" color="white" fontSize={['5px',"5px","15px","20px","20px"]} maxH={["20px","20px","30px","35px","40px"]}>ADD TO CART</Button>
          </Flex>
        </Flex>
        <br />
        <br />
        <br />
        {/* fifth step END  here / aDD TO CART */}
        {/* ///container end  */}
      </Box>
    </Box>
  );
}
