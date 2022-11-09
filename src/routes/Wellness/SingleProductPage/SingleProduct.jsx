import {
  Box,
  Flex,
  Text,
  Heading,
  Input,
  Img,
  Stack,
  Image,
} from "@chakra-ui/react";
import { BsFillHeartFill, BsArrowRightCircleFill } from "react-icons/bs";

import CartBtn from "./CartBtn";
import MainImg from "./MainImg";
import Rating from "./Rating";
const mainColor = "rgb(50,174,177)";
export default function SingleProduct() {
  return (
    <Box  bg="#f3f6fb">
      <br /><br />
      <Box w="95%" m="auto">
        <Flex m="auto">
          {/* /left box */}
          <Box  w="50%" bg="white" >
            <MainImg />
          </Box>

          {/* Right box */}
          <Box  w="50%" bg="white" p="2%" >
            {/* 1st right */}
            <Flex
              flexDirection={"column"}
              alignItems={"flex-start  "}
              borderBottom="1px solid gray "
              lineHeight={2}
            >
              {/* //  Product Title */}
              <Text fontSize={"20px"}>
                Nature's Essence Acne Magic Clear Skin Gel Face Wash 100 ml
              </Text>
              <Flex gap={"10px"} lineHeight={10} >
                <Box backgroundColor={"rgb(246,246,247)"}>Personal Care</Box>
                <Box backgroundColor={"rgb(246,246,247)"}  >
                  Face Personel Care
                </Box>
              </Flex>
              <br />
              <Box>

              <BsFillHeartFill color={"rgb(199,200,208)"} />
              </Box>
              <br />
              <br />
            </Flex>

            <br />
            <br />
            {/* 2nd */}
            <Flex
              flexDirection={"column"}
              alignItems={"flex-start  "}
              borderBottom="1px solid gray "
              lineHeight={2}
            >
              <Text color={"rgb(239,66,129)"}
                fontWeight="bold"
                fontSize={"20px"} >Best Price* ₹ 80.00</Text>
                 <Flex gap="2%">
                 M.R.P.:<del>Rs.100.00</del>{" "}<Text color={"green"}>20% off (Inclusive of all taxes)</Text>
              </Flex>
              <Text>* Mkt: NATURE's ESSENCE PVT LTD</Text>
              <Text>* Country of Origin: India</Text>
              <Text>
                * Delivery charges if applicable will be applied at checkout
              </Text>
              <CartBtn>Add to Cart</CartBtn>
              <br />
              <br />
            </Flex>

            <br />
            <br />
            {/* 3rd */}
            <Flex
              flexDirection={"column"}
              alignItems={"flex-start  "}
              lineHeight={10}
            >
              <Text>Check Availability & Expiry</Text>
              <Flex borderBottom="5px solid rgb(36,174,177)">
                <Text fontSize={"25px"} color={"rgb(36,174,177)"}>
                  PINCODE:
                </Text>
                <Input border={"none"} outline="none" />
                <BsArrowRightCircleFill
                  color="rgb(36,174,177)"
                  fontSize={"50px"}
                />
              </Flex>

              <Text color={"rgb(111,115,136)"} fontSize="30px">
                OFFERS APPLICABLE
              </Text>
              <Flex
                justifyContent={"space-between"}
                w="100%"
                bg="rgb(243,243,243)"
                borderRadius={"2rem"}
                p="2%"
                alignItems={"center"}
              >
                <Flex gap="15px">
                  <Box>
                    {" "}
                    <Img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5Ojf/2wBDAQoKCg0MDRoPDxo3JR8lNzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzf/wAARCAAqADIDASIAAhEBAxEB/8QAGQAAAwEBAQAAAAAAAAAAAAAAAAMFBAIH/8QAKxAAAQMDAQcEAgMAAAAAAAAAAQACAwQFERITITFBUWFxBiIykRShIzNC/8QAFwEBAQEBAAAAAAAAAAAAAAAAAgMABP/EACURAAIBAgUDBQAAAAAAAAAAAAABAgMREhMhIjEUQVEjgZGx4f/aAAwDAQACEQMRAD8A9pha0u3gHcnFjAMlrQB2SoPmfCg3WWe7XsWmkrnQ07IS6d0IydWcaSeW7H2lFXJVamWuLt8Gif1PZ2NOweamUO0iKKMlzj2yMFEHqezSNYJZDBKTpMckRy098DC2UUVroZIaGB1O2ojZhrSRtMcfO/JK7rqKhr2T0szY9pIwa9ONYGdx68R+ktngl67V1JX8W/TZoYf8t+kiRga7AG5Q7XNLab261Vda6WB8QNO6bjqzjSCr0/zHhGUbFaVTMXFmuReB0CEIRKjIPmfCh+kw0Vl52P8AT+V7SR7s7857cMK5B8z4UG6Qy2q+Nu1JRPlgdC5tQIeJOc5I+vpOGqaOavtlGp2T+9BV1tj6WvZNFI2V01UJ4acRjaOkA4auTBxPZFquT6S4ugmibI6epMMs5kG0fIBx08mDgFco62hrmwVUTojJIz+PVgPA5jry/S4rJbXQvmrpm04qI26nOAbtOmOvQJYr6NEspJ5kJWXJM9WY/Ns+1xsfyfdpPvJ3Yx245V2f5jwoFqinu18N2q6J0NOyENgbMcnVnOoDluz9q/P8x4RnpZFaG6UqnZvT2FoQhA6TuEgO3nG5O1NPMfazIWMTZ/S9nka8xRGCRx1CSOQ5aewJwEQ+mLQwNM0ZqJdRc6WWQlzyeuNxVJCWOXkh01G98K+DSHMAwC0AJMjtTsjguEIlwQhCxj//2Q==" />
                  </Box>
                  <Flex
                    flexDirection={"column"}
                    alignItems={"flex-start"}
                    justifyContent="center"
                  >
                    <Text fontSize={"20px"}>Default Discount</Text>
                    <Text color={"green"} fontWeight="bold">
                      You get 20% OFF on this product
                    </Text>
                  </Flex>
                </Flex>
                |
                <Flex>
                  <Text color="rgb(239,155,189)">Offer Appiled</Text>
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
          w="70%"
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
            <Box w="50%"></Box>
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
              <Rating />
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
          <Text fontWeight={"bold"} fontSize="xl" color={"rgb(118,114,141)"}>
            DISCLAIMER
          </Text>
          <Text>
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
          bottom={"20px"}
          bg="white"
        >
          <Flex w="65%" alignItems={"center"} gap="2%">
            <Box w="10%" h={"90%"}>
              <Image
                w={"100%"}
                h="100%"
                src="https://www.netmeds.com/images/product-v1/240x240/951201/natures_essence_acne_magic_clear_skin_gel_face_wash_100_ml_0_0.jpg"
              />
            </Box>
            <Box>
              <Text
                color={"rgb(120,116,142)"}
                fontWeight={"bold"}
                fontSize="20px"
              >
                Nature's Essence Acne Magic Clear Skin Gel Face Wash 100 ml
              </Text>
              <Text color={"rgb(120,116,142)"}>
                Mkt: NATURE's ESSENCE PVT LTD
              </Text>
            </Box>
          </Flex>

          {/* /////////////// */}
          <Flex justifyContent={"space-around"} w="35%" alignItems={"center"}>
            <Box>
              <Text
                color={"rgb(239,66,129)"}
                fontWeight="bold"
                fontSize={"20px"}
              >
                Rs.80.00
              </Text>
              <span>
                <Text color={"green"}>20% off</Text> M.R.P.:<del>Rs.100.00</del>{" "}
              </span>
            </Box>

            <CartBtn />
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
