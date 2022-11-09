import {
    Box,
    Button,
    Flex,
    Heading,
    Image,
    Input,
    Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from 'react'
import PhoneInput from "react-phone-number-input";
import { FaFacebookSquare } from "react-icons/fa"
// import * as dotenv from 'dotenv'
// dotenv.config()
import RightConditionRightCompo from "./RightCompoRightCondition";
import { useUserAuth } from "./Context";
function LoginRightCompo() {

    const { setupRecaptcha } = useUserAuth();
    const [phnumber, setphnumber] = useState("+91");

    const [result, setresult] = useState()
    const [bool, setbool] = useState(true)
    const getOtp = async () => {
        try {
            const res = await setupRecaptcha(phnumber);
            setresult(res)

        } catch (error) {
            alert(error.message)
        }
    };
    useEffect(() => {
        setbool(!bool)
    }, [result])

    const verifyOtp = async (main) => {

        try {
            let data = await result.confirm(main)
            console.log(data);
        } catch (error) {
            alert(error.message)
        }
    }
    console.log(phnumber);
    return (
        <>
            {
                !bool ? (<Box

                    w={["300", "420px", "490px", "520px"]}
                >
                    <Flex
                        direction={"column"}
                        align="start"
                        p={["2", "5", "6", "8"]}
                        gap={"5"}
                    >
                        <Heading size={"md"}>Sign In/Sign Up</Heading>
                        <Text align={"start"}>Sign up or Sign in to access your, special offers health tips and more </Text>


                        <Text fontSize={"sm"} fontWeight={"bold"}>PHONE NUMBER</Text>

                        <Input type={"text"} onChange={(e) => setphnumber(e.target.value)} value={phnumber} placeholder="Enter your mobile no" />
                        <div id="recaptcha-container" />
                        <Button
                            // onClick={handleSubmit}
                            color={"white"}
                            size={"lg"}
                            width={"100%"}

                            bg={"#24AEB1"}
                            onClick={getOtp}
                        >
                            USE OTP
                        </Button>
                        <Flex gap={"20"} width={"100%"} justify={"space-between"}>

                            <Button
                                size={"md"}
                                // onClick={handleGoogleSignIn}
                                bg={"white"}
                                border={"1px solid grey"}
                                w={"50%"}
                                color={"#767676"}
                                fontWeight={"bold"}
                            >
                                <Image
                                    mr={"2.5"}
                                    h={"6"}
                                    src="https://i.ibb.co/yPYCXhz/googel.png"
                                ></Image>{" "}
                                Google
                            </Button>

                            <Button
                                size={"md"}
                                // onClick={handleGoogleSignIn}
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
                </Box>) : (<RightConditionRightCompo phnumber={phnumber} verifyOtp={verifyOtp} />)
            }
        </>


    )
}

export default LoginRightCompo