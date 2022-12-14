import {
  Box,
  Button,
  Flex,
  Heading,
  Input,
  Text,
  Center,
  Stack,
  Avatar,
  useToast,
  HStack,
  PinInput,
  PinInputField,
  Image,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import { FaFacebookSquare } from "react-icons/fa";
import RightConditionRightCompo from "./RightCompoRightCondition";
import { useUserAuth } from "./Context";
const clientid = import.meta.env.VITE_CLIENT_ID;

import { loginAction } from "../../store/MainAuth/AuthActions";
import { useDispatch, useSelector } from "react-redux";
import { gapi } from "gapi-script";
import axios from "axios";
function LoginRightCompo() {
  const [otp, setotp] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { setupRecaptcha } = useUserAuth();
  const [phnumber, setphnumber] = useState("+91");

  const [result, setresult] = useState();

  const [redisbool, setredisbool] = useState(false);
  const [loading, setloading] = useState(false);
  const { data } = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  const toast = useToast();
  const getOtp = async () => {
    setloading(true);
    try {
      const res = await setupRecaptcha(phnumber);
      setresult(res);
      setphnumber("");
      setloading(false);
    } catch (error) {
      alert(error.message);
    }
  };

  useEffect(() => {
    dispatch(loginAction());
  }, [redisbool]);

  const verifyOtp = async () => {
    setloading(true);
    console.log("confirm");
    try {
      let data = await result.confirm(otp);
      onClose();
      setloading(false);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    // function start() {
    //   gapi.client.init({
    //     clientid: clientid,
    //     scope: "",
    //   });
    // }
    // gapi.load("client:auth2", start);
  });

  // const googleAuth = async () => {
  //   // setredisbool(true);
  //   window.open("http://localhost:4000/auth/google", "_self");
  // };

  const onSuccess = async (res) => {
    const { givenName, familyName, email, imageUrl } = res.profileObj;

    try {
      const res = await axios.post("http://localhost:8080/postUserViaForm", {
        firstName: givenName,
        lastName: familyName,
        email: email,
        imageURL: imageUrl,
      });

      console.log("res:", res);
      localStorage.setItem("lol", email);

      setredisbool(!redisbool);
      // setbool(!bool);
      toast({
        title: "Login successfull",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    } catch (error) {
      toast({
        title: `${error.message}`,
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  const onFailure = async (res) => {
    console.log(res);
  };
  // const check = async () => {
  //   try {
  //     let res = await
  //     console.log("res:", res);
  //   } catch (error) {
  //     console.log(res);
  //   }
  // };
  const onsubmit = () => {
    getOtp().then(() => onOpen());
  };
  return (
    <>
      <Box w={["300", "420px", "490px", "520px"]}>
        <Flex
          direction={"column"}
          align="start"
          p={["2", "5", "6", "8"]}
          gap={"5"}
        >
          <Heading size={"md"}>Sign In/Sign Up</Heading>
          <Text align={"start"}>
            Sign up or Sign in to access your, special offers health tips and
            more{" "}
          </Text>

          <Text fontSize={"sm"} fontWeight={"bold"}>
            PHONE NUMBER
          </Text>
          {/* <InputGroup>
              <InputLeftAddon children='+91' defaultValue={"+91"} />
          <Input type={"text"} onChange={(e) => setphnumber(e.target.value)} value={phnumber} placeholder="Enter your mobile no" />
          </InputGroup> */}
          <Input
            type={"text"}
            onChange={(e) => setphnumber(e.target.value)}
            value={phnumber}
            placeholder="Enter your mobile no"
          />

          <div id="recaptcha-container" />
          <Button
            color={"white"}
            size={"lg"}
            width={"100%"}
            isLoading={loading ? true : false}
            bg={"#24AEB1"}
            onClick={onsubmit}
          >
            GET OTP
          </Button>
          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Modal Title</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <Text fontSize={"sm"}>VERIFYING NUMBER</Text>
                <Text>{`We have sent 6 digit OTP on ${phnumber}`}</Text>
                <HStack gap={[2, 3, 5, 6]}>
                  <PinInput otp size={"lg"} placeholder={"."} onChange={setotp}>
                    <PinInputField />
                    <PinInputField />
                    <PinInputField />
                    <PinInputField />
                    <PinInputField />
                    <PinInputField />
                  </PinInput>
                </HStack>
              </ModalBody>

              <ModalFooter>
                <Button colorScheme="blue" mr={3} onClick={onClose}>
                  Close
                </Button>
                <Button
                  color={"white"}
                  size={"lg"}
                  width={"100%"}
                  isLoading={loading ? true : false}
                  bg={"#24AEB1"}
                  onClick={() => verifyOtp()}
                >
                  GET OTP
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
          <Flex gap={"20"} width={"100%"} justify={"space-between"}>
            <GoogleLogin
              clientId={clientid}
              render={(renderProps) => (
                <Button
                  size={"md"}
                  bg={"white"}
                  border={"1px solid grey"}
                  w={"50%"}
                  color={"#767676"}
                  fontWeight={"bold"}
                  onClick={renderProps.onClick}
                  disabled={renderProps.disabled}
                >
                  <Image
                    mr={"2.5"}
                    h={"6"}
                    src="https://i.ibb.co/yPYCXhz/googel.png"
                  ></Image>
                  <Text>Login</Text>
                </Button>
              )}
              buttonText="Google"
              onSuccess={onSuccess}
              onFailure={onFailure}
              isSignedIn={false}
            />

            <Button
              size={"md"}
              bg={"white"}
              border={"1px solid gray"}
              w={"50%"}
              color={"#767676"}
              fontWeight={"bold"}
            >
              <Flex gap={"2"}>
                <FaFacebookSquare size={"20"} color={"darkblue"} />
                <Text>Facebook</Text>
              </Flex>
            </Button>
          </Flex>
        </Flex>
        {/* <RightConditionRightCompo phnumber={phnumber} verifyOtp={verifyOtp} /> */}
      </Box>
    </>
  );

  // data.firstName ? (
  // <Center w={"90%"} h={"60%"}>
  //   <Box
  //     height={"100%"}
  //     w={"100%"}
  //     rounded={"lg"}
  //     p={6}
  //     textAlign={"center"}
  //   >
  //     <Avatar
  //       size={"xl"}
  //       src={data.imageURL}
  //       alt={"Avatar Alt"}
  //       mb={4}
  //       pos={"relative"}
  //       _after={{
  //         content: '""',
  //         w: 4,
  //         h: 4,
  //         bg: "green.300",
  //         border: "2px solid white",
  //         rounded: "full",
  //         pos: "absolute",
  //         bottom: 0,
  //         right: 3,
  //       }}
  //     />
  //     <Heading fontSize={"2xl"} fontFamily={"body"}>
  //       {data.firstName}
  //     </Heading>
  //     <Text fontWeight={600} color={"gray.500"} mb={4}>
  //       {data.email}
  //     </Text>
  //     <Stack mt={8} direction={"row"} spacing={4}>
  //       <Button
  //         flex={1}
  //         fontSize={"sm"}
  //         rounded={"full"}
  //         _focus={{
  //           bg: "gray.200",
  //         }}
  //       >
  //         My Cart Items
  //       </Button>
  //       <Button
  //         flex={1}
  //         fontSize={"md"}
  //         rounded={"full"}
  //         bg={"blue.400"}
  //         color={"white"}
  //         boxShadow={
  //           "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
  //         }
  //         _hover={{
  //           bg: "blue.500",
  //         }}
  //         _focus={{
  //           bg: "blue.500",
  //         }}
  //       >
  //         Contact
  //       </Button>
  //       <Button
  //         flex={1}
  //         fontSize={"md"}
  //         rounded={"full"}
  //         onClick={handleLogout}
  //         bg={"blue.400"}
  //         color={"white"}
  //         boxShadow={
  //           "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
  //         }
  //         _hover={{
  //           bg: "blue.500",
  //         }}
  //         _focus={{
  //           bg: "blue.500",
  //         }}
  //       >
  //         Log Out
  //       </Button>
  //     </Stack>
  //   </Box>
  // </Center>
  // ) : !bool ? (
}

export default LoginRightCompo;
