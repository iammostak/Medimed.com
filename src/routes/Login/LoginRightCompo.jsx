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

import { useUserAuth } from "./Context";
const clientid = import.meta.env.VITE_CLIENT_ID;

import { loginAction } from "../../store/MainAuth/AuthActions";
import { useDispatch, useSelector } from "react-redux";
import { gapi } from "gapi-script";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function LoginRightCompo() {
  const [otp, setotp] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { setupRecaptcha } = useUserAuth();
  const [phnumber, setphnumber] = useState("+91");
  const navigate = useNavigate();
  const [result, setresult] = useState();

  const [redisbool, setredisbool] = useState(false);
  const [loading, setloading] = useState(false);

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

    try {
      let data = await result.confirm(otp);
      const {
        user: { phoneNumber },
      } = data;

      let res = await axios.post(
        "http://localhost:8080/auth/getViaPhonenumber",
        {
          phnumber: phoneNumber,
        }
      );
      if (res.status === 200) {
        onClose();
        setloading(false);
        const {
          data: { email },
        } = res;
        localStorage.setItem("lol", email);
        setredisbool(!redisbool);
        toast({
          title: "Login successfull",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        navigate("/profile");
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  // useEffect(() => {
  //   // function start() {
  //   //   gapi.client.init({
  //   //     clientid: clientid,
  //   //     scope: "",
  //   //   });
  //   // }
  //   // gapi.load("client:auth2", start);
  // });

  // const googleAuth = async () => {
  //   // setredisbool(true);
  //   window.open("http://localhost:4000/auth/google", "_self");
  // };
  // npm i react-google-login --force
  const onSuccess = async (res) => {
    console.log("res:", res);
    const { givenName, familyName, email, imageUrl } = res.profileObj;

    try {
      const res = await axios.post(
        "http://localhost:8080/auth/postUserViaForm",
        {
          firstName: givenName,
          lastName: familyName,
          email: email,
          imageURL: imageUrl,
        }
      );

      console.log("res:", res);
      localStorage.setItem("lol", email);

      
      toast({
        title: "Login successfull",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      setredisbool(!redisbool);
      // navigate("/profile");
    } catch (error) {
      toast({
        title: `${error.message}`,
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  const onFailure = async (res) => {
    console.log(res);
  };

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
                  Verify
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
      </Box>
    </>
  );
}

export default LoginRightCompo;
