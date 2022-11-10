import {
   Button,
   Container,
   Flex,
   Heading,
   HStack,
   Icon,
   Image,
   StackDivider,
   Text,
   VStack,
} from "@chakra-ui/react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import HomeCarousel from "./HomeCarousel";
import DealCard from "./DealCard";
import { categoryArr, dealArr, offerArr } from "../../../db.json";
import HeaderComp from "./HeaderComp";
import OfferCard from "./OfferCard";
import PreviousOrder from "./PreviousOrder";
import BeautyComp from "./BeautyComp";

function Home() {
   return (
      <Container
         minH={"100vh"}
         maxW={"container"}
         p={0}
         m={0}
         pb={7}
         align={"center"}
         bg={"#f3f6fb"}
      >
         <HeaderComp />
         <HStack
            p={3}
            justify={"center"}
            spacing={{ base: 3, lg: 6 }}
            flexWrap={"wrap"}
            display={{ base: "none", md: "flex" }}
         >
            {categoryArr.map((item) => (
               <Text fontSize={{ base: 11, lg: "sm" }} cursor={"pointer"}>
                  {item}
               </Text>
            ))}
         </HStack>
         <HomeCarousel />
         <Flex
            py={4}
            px={{ base: 2, md: 4, lg: 7 }}
            gap={{ base: 3, lg: 6 }}
            flexDirection={{ base: "column", md: "row" }}
         >
            {dealArr.map((item) => (
               <DealCard key={item.id} {...item} />
            ))}
         </Flex>
         <VStack py={4} px={{ base: 2, md: 4, lg: 7 }}>
            <HStack w={"full"} justify={"space-between"}>
               <Heading
                  fontSize={{ base: "xl", md: "2xl" }}
                  fontFamily={"sans-serif"}
               >
                  Payment Partner Offers
               </Heading>
               <Button
                  p={0}
                  color={"red.500"}
                  fontSize={"sm"}
                  variant={"none"}
                  rightIcon={
                     <Icon
                        as={MdOutlineKeyboardArrowRight}
                        color={"red.500"}
                        boxSize={4}
                        mt={0.5}
                        ml={-2}
                     />
                  }
               >
                  View All
               </Button>
            </HStack>
            <Flex
               w={"full"}
               py={4}
               gap={{ base: 3, lg: 6 }}
               direction={{ base: "column", md: "row" }}
            >
               {offerArr.map((item) => (
                  <OfferCard key={item.id} {...item} />
               ))}
            </Flex>
         </VStack>
         <Flex
            w={"full"}
            py={4}
            px={{ base: 2, md: 4, lg: 7 }}
            justify={"space-between"}
            gap={{ base: 3, lg: 50 }}
            direction={{ base: "column", md: "row" }}
         >
            <PreviousOrder />
            <BeautyComp />
         </Flex>
      </Container>
   );
}

export default Home;
