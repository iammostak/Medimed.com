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
  import { BsFillHeartFill, BsArrowRightCircleFill } from "react-icons/bs";
  import MainImg from "./MainImg";
  import Rating from "./Rating";
  const mainColor = "rgb(50,174,177)";


export default function MobileView({singleData}){

return <Box>
    <Box  w="50%" bg="white" display={["unset","unset","none","none","none"]} >
    <MainImg url={singleData?.url} off={singleData?.off} />
          </Box> 
<br />

<Box  w="100%" bg="white" p="2%" display={["unset","unset","none","none","none"]} >
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
              lineHeight={2}
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
</Box>
</Box>


}