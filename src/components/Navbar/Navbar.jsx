import {
   Box,
   Button,
   Drawer,
   DrawerCloseButton,
   DrawerContent,
   DrawerOverlay,
   Flex,
   HStack,
   Image,
   Input,
   InputGroup,
   InputLeftAddon,
   Text,
   useDisclosure,
} from "@chakra-ui/react";
import Medimed from "../../assets/logos/Medimed.com-navbar-removebg.png";
import { MdShoppingCart } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import { IoChevronDown } from "react-icons/io5";
import { HamburgerIcon } from "@chakra-ui/icons";
import { NavLink, useNavigate } from "react-router-dom";

function Navbar() {
   const navigate = useNavigate();
   const { isOpen, onOpen, onClose } = useDisclosure();

   return (
      <Flex
         bg={"#32aeb0"}
         px={{ base: 4, md: 7 }}
         py={{ base: 1, md: 2 }}
         align={"center"}
         justify={"space-between"}
         color={"white"}
         gap={12}
         pos={"sticky"}
         top={0}
         zIndex={27}
      >
         <Image
            src={Medimed}
            w={210}
            cursor={"pointer"}
            onClick={() => navigate("/")}
         />
         <InputGroup
            bg={"white"}
            borderRadius={"2xl"}
            size={"lg"}
            display={{ base: "none", lg: "flex" }}
         >
            <InputLeftAddon children={<InputLeftChild />} bg={"white"} />
            <Input
               type="text"
               placeholder="Search for medicine & wellness products..."
               fontSize={"sm"}
               color={"blackAlpha.700"}
               focusBorderColor={"none"}
               fontWeight={500}
               _placeholder={{
                  color: "blackAlpha.300",
                  fontWeight: 500,
                  letterSpacing: 0.5,
               }}
            />
         </InputGroup>
         <HStack display={{ base: "none", md: "flex" }}>
            <Button
               as={NavLink}
               to={"/cart"}
               leftIcon={<MdShoppingCart size={24} />}
               variant={"none"}
            >
               Cart
               <Box
                  h={4}
                  w={4}
                  as={Flex}
                  color={"white"}
                  bg={"red.400"}
                  align={"center"}
                  justify={"center"}
                  borderRadius={100}
                  fontSize={"xs"}
                  pos={"absolute"}
                  top={1}
                  left={7}
               >
                  0
               </Box>
            </Button>
            <Button
               as={NavLink}
               to={"/login"}
               leftIcon={<FaUserCircle size={22} />}
               variant={"none"}
            >
               Sign in / Sign up
            </Button>
         </HStack>
         <Button
            display={{ base: "flex", md: "none" }}
            variant={"none"}
            onClick={onOpen}
         >
            <HamburgerIcon boxSize={7} />
         </Button>
         <Drawer onClose={onClose} isOpen={isOpen} size={"full"}>
            <DrawerOverlay />
            <DrawerContent>
               <DrawerCloseButton />
            </DrawerContent>
         </Drawer>
      </Flex>
   );
}

export default Navbar;

function InputLeftChild() {
   return (
      <HStack align={"center"}>
         <Text fontSize={"sm"} color={"blackAlpha.500"} fontWeight={500}>
            Deliver to
         </Text>
         <Text
            fontSize={"sm"}
            color={"teal.400"}
            fontWeight={600}
            letterSpacing={2}
            fontFamily="Lato"
         >
            110002
         </Text>
         <IoChevronDown size={14} color={"darkgray"} cursor={"pointer"} />
      </HStack>
   );
}
