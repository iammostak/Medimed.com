import {
  Box,
  Button,
  Flex,
  Heading,
  Input,
  HStack,
  PinInputField,
  PinInput,
  Text,
  Spinner,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";

import React, { useEffect, useState } from "react";
import axios from "axios";
// import { v4 } from "uuid";
import { loginAction } from "../../store/MainAuth/AuthActions";
import { useDispatch, useSelector } from "react-redux";
import { useUserAuth } from "../Login/Context";
import { useNavigate } from "react-router-dom";
import PhoneInput from "react-phone-number-input";

function SignupRightCompo() {
  const toast = useToast();
  const [spinner, setspinner] = useState(false);
  const { setupRecaptcha } = useUserAuth();
  const [phnumber, setphnumber] = useState("+91");
  const [otp, setotp] = useState("");
  const [useemail, setuseemail] = useState("");
  const dispatch = useDispatch();
  const [result, setresult] = useState();
  const navigate = useNavigate();
  const [formData, setformData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    password: "",
    // userid: v4(),
    imageURL:
      "https://user-images.githubusercontent.com/40628582/202887621-79e9def3-55b5-4afd-b382-2561a6c915bd.jpg",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setformData({ ...formData, [name]: value });
  };
  const postUser = async () => {
    const { email, firstName, lastName } = formData;
    if (!email || !firstName || !lastName) {
      alert("please enter all the required fields");
    }
    try {
      const res = await axios.post(
        "https://medimed-backend.up.railway.app/postUserViaForm",
        formData
      );
      const {
        data: { userid },
      } = res;
      localStorage.setItem("email", userid);
      setuseemail(userid);
    } catch (e) {
      alert(`rightcompo condition failed: ${e.message}`);
    }
  };
  useEffect(() => {
    dispatch(loginAction());
  }, [useemail]);
  const getOtp = async () => {
    try {
      const res = await setupRecaptcha(phnumber);

      setresult(res);
    } catch (error) {
      alert(error.message);
    }
  };
  const verifyOtp = async (main) => {
    try {
      let data = await result.confirm(main);
      console.log("data:", data);
    } catch (error) {
      alert(error.message);
    }
  };

  const handleSubmit = async () => {
    setspinner(true);
    const { email, firstName, lastName } = formData;
    if (!phnumber.startsWith("+91")) {
      toast({
        title: "please make sure your phone number startsWith +91",
        description: "We've sent a 6 digit OTP to your registerder number",
        status: "warning",
        duration: 2000,
        isClosable: true,
      });
      window.location.reload();
      return false;
    }
    if (!email || !firstName || !lastName) {
      alert("please enter all the required fields");
    } else {
      await getOtp();
      await postUser();
      setspinner(false);
      toast({
        title: "OTP sent",
        description: "We've sent a 6 digit OTP to your registerder number",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
    }
  };

  const handleOTP = () => {
    verifyOtp(otp);
    toast({
      title: "Login successfull",
      description: "Welcome to Medimed",
      status: "success",
      duration: 1000,
      isClosable: true,
    });
    navigate("/");
  };

  return (
    <Box w={["300", "420px", "490px", "520px"]}>
      <Flex
        direction={"column"}
        align="start"
        p={["4", "5", "6", "8"]}
        gap={"3"}
      >
        <Heading>Create Account</Heading>
        <Text fontSize={"sm"} align={"start"}>
          EMAIL ID{" "}
        </Text>
        <Input
          type={"text"}
          name={"email"}
          onChange={handleChange}
          placeholder="Enter your Email Id"
        ></Input>
        <Text fontSize={"sm"}>FIRST NAME</Text>
        <Input
          type={"text"}
          name={"firstName"}
          onChange={handleChange}
          placeholder="Enter Your First Name"
        ></Input>
        <Text fontSize={"sm"}>LAST NAME</Text>
        <Input
          type={"text"}
          name={"lastName"}
          onChange={handleChange}
          placeholder="Enter your Last Name"
        ></Input>
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

        <Button
          onClick={handleSubmit}
          color={"white"}
          size={"lg"}
          width={"100%"}
          bg={"#24AEB1"}
        >
          VERIFY
        </Button>
      </Flex>
    </Box>
  );
}

export default SignupRightCompo;
