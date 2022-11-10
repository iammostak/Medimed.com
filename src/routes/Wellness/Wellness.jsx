
import React from "react";

import { Flex, Stack, Text, Box, Button, Image, Link } from "@chakra-ui/react"
import WellnessCarousel from "../../components/WellnessCarousel";


function Wellness() {
   return (
      <Box bg={"#f3f6fb"}>
         <Box>Wellness Page</Box>
         <Flex marginLeft={"150px"} width={"70%"} justify={"center"} gap={"28px"}>
            <Link _hover={{ color: "#151B39" }}>   <Text fontSize={"13px"} color={"#151B39"}>COVID Essentials </Text></Link>
            <Link _hover={{ color: "#151B39" }} >  <Text fontSize={"13px"} color={"#151B39"}> Diabetes
            </Text></Link>
            <Link _hover={{ color: "#151B39" }}>  <Text fontSize={"13px"} color={"#151B39"}>Eyewear</Text></Link>
            <Link _hover={{ color: "#151B39" }}>  <Text fontSize={"13px"} color={"#151B39"}> Ayush
            </Text></Link>
            <Link _hover={{ color: "#151B39" }} >  <Text fontSize={"13px"} color={"#151B39"}>Ayurvedic
            </Text></Link>
            <Link _hover={{ color: "#151B39" }}> <Text fontSize={"13px"} color={"#151B39"}>Homeopathy
            </Text></Link>

            <Link _hover={{ color: "#151B39" }} >  <Text fontSize={"13px"} color={"#151B39"}>Fitness
            </Text></Link>
            <Link _hover={{ color: "#151B39" }}>   <Text fontSize={"13px"} color={"#151B39"}>Mom & Baby</Text></Link>
            <Link _hover={{ color: "#151B39" }}>   <Text fontSize={"13px"} color={"#151B39"}>Devices
            </Text></Link>

            <Link _hover={{ color: "#03A9F4" }}>   <Text fontSize={"13px"} color={"#151B39"}>Surgicals</Text></Link>
            <Link _hover={{ color: "#03A9F4" }}>   <Text fontSize={"13px"} color={"#151B39"}>Sexual Wellness</Text></Link>
            <Link _hover={{ color: "#03A9F4" }}>   <Text fontSize={"13px"} color={"#151B39"}>Treatments</Text></Link>



         </Flex>

         <Box marginTop={"40px"}>  <WellnessCarousel /></Box>

         {/* POPULAR CATEGORIES */}

         <Box
            bg={"#F3F7FB"}
            display={"flex"}
            pl={10}
            justifyContent={"space-between"}
         >
            <Text fontSize={28} fontWeight={500}>
               {" "}
               Popular Categories
            </Text>
         </Box>

         <Box justifyContent={"center"} bg={"#F3F7FB"} display={"flex"} gap={10} p={4}>
            <Box
               rounded={10}
               boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}
               p={4}
               width={230}
               height={280}
               bg={"white"}
            >
               <img
                  src="https://www.netmeds.com/images/category/v1/3902/thumb/face_personal_care.jpg"
                  alt=""
               ></img>
               <Text fontSize={14} fontWeight={500} pt={5} pl={1}>
                  Face Personal Care
               </Text>
            </Box>
            <Box
               rounded={10}
               boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}
               p={4}
               width={230}
               height={280}
               bg={"white"}
            >
               <img
                  src="https://www.netmeds.com/images/category/v1/525/thumb/body_care_1.jpg"
                  alt=""
               ></img>
               <Text fontSize={14} fontWeight={500} pt={5} pl={1}>
                  Body care
               </Text>
            </Box>
            <Box
               rounded={10}
               boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}
               p={0}
               width={230}
               height={280}
               bg={"white"}
            >
               <img
                  src="https://www.netmeds.com/images/category/v1/547/thumb/hair_care_2.jpg"
                  alt=""
               ></img>
               <Text fontSize={14} fontWeight={500} pt={8} pl={1}>
                  Hair Care
               </Text>
            </Box>
            <Box
               rounded={10}
               boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}
               p={3}
               width={230}
               height={280}
               bg={"white"}
            >
               <img
                  src="https://www.netmeds.com/images/category/v1/562/thumb/oral_care.jpg"
                  alt=""
               ></img>
               <Text fontSize={14} fontWeight={500} pt={5} pl={1}>
                  Oral care
               </Text>
            </Box>
            <Box
               rounded={10}
               boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}
               p={4}
               pl={8}
               width={230}
               height={280}
               bg={"white"}
            >
               <img
                  src="https://www.netmeds.com/images/category/v1/3772/thumb/home_health.jpg"
                  alt=""
               ></img>
               <Text fontSize={14} fontWeight={500} pt={8} pl={1}>
                  Home & Health
               </Text>
            </Box>
         </Box>

         {/* under 399 */}
         <Box margin={"auto"} border={"2px solid red"} bg={"#F3F7FB"} gap={10} p={4}>
            <Box
               bg={"#F3F7FB"}
               display={"flex"}
               pl={10}
               justifyContent={"space-between"}
            >
               <Text color={"#6F7284"} fontSize={12} fontWeight={"bold"}>
                  {" "}
                  UNDER-399
               </Text>
            </Box>


            <Flex marginTop={"20px"} justifyContent={"center"} gap={"20px"}>
               <Box
                  rounded={10}
                  boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}
                  p={4}
                  width={260}
                  height={340}
                  bg={"white"}
               >
                  <img
                     src="https://www.netmeds.com/images/product-v1/150x150/1045847/lizol_disinfectant_surface_floor_cleaner_liquid_lavender_2_litre_416520_0_0.jpg"
                     alt=""
                  ></img>
                  <Text fontSize={13} fontWeight={"bold"} pt={3} pl={1}>
                     Lizol Disinfectant Surface & Floor Cleaner Liquid - Lavender 2 litre
                  </Text>
                  <Text color={"#6F7284"} fontSize={13}  >Mkt: Reckitt Benckiser Healthcare Ind..</Text>
                  <Text fontWeight={"bold"} color={"#6F7284"} fontSize={14}  >Best Price* <Text as={"span"} fontWeight={"bold"} fontSize={"16px"} color={"#EF4281"}>Rs. 449.25</Text></Text>
                  <Button marginTop={"15px"} backgroundColor={"#24AEB1"} colorScheme={"twitter"}>ADD TO CART</Button>
               </Box>



               <Box
                  rounded={10}
                  boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}
                  p={4}
                  width={260}
                  height={340}
                  bg={"white"}
               >
                  <img
                     src="https://www.netmeds.com/images/product-v1/150x150/1058752/the_body_shop_satsuma_shower_gel_250_ml_499917_0_1.jpg"
                     alt=""
                  ></img>
                  <Text fontSize={13} fontWeight={"bold"} pt={3} pl={1}>
                     The Body Shop Satsuma Shower Gel 250ml

                  </Text>
                  <Text color={"#6F7284"} fontSize={13}  >Mkt: Quest Retail Pvt. Ltd.</Text>
                  <Text fontWeight={"bold"} color={"#6F7284"} fontSize={14}  >Best Price* <Text as={"span"} fontWeight={"bold"} fontSize={"16px"} color={"#EF4281"}>Rs. 327.75</Text></Text>
                  <Button marginTop={"15px"} backgroundColor={"#24AEB1"} colorScheme={"twitter"}>ADD TO CART</Button>
               </Box>





               <Box
                  rounded={10}
                  boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}
                  p={4}
                  width={260}
                  height={340}
                  bg={"white"}
               >
                  <img
                     src="https://www.netmeds.com/images/product-v1/150x150/346480/tvaksh_face_care_face_wash_60_gm_0_1.jpg"
                     alt=""
                  ></img>
                  <Text fontSize={13} fontWeight={"bold"} pt={3} pl={1}>
                     Tvaksh Face Care Face Wash 60 gm


                  </Text>
                  <Text marginTop={"20px"} color={"#6F7284"} fontSize={13}  >Mkt: Abbott Healthcare Pvt. Ltd.</Text>
                  <Text fontWeight={"bold"} color={"#6F7284"} fontSize={14}  >Best Price* <Text as={"span"} fontWeight={"bold"} fontSize={"16px"} color={"#EF4281"}>₹ 279.00</Text></Text>
                  <Button marginTop={"15px"} backgroundColor={"#24AEB1"} colorScheme={"twitter"}>ADD TO CART</Button>
               </Box>



               <Box
                  rounded={10}
                  boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}
                  p={4}
                  width={260}
                  height={340}
                  bg={"white"}
               >
                  <img
                     src="https://www.netmeds.com/images/product-v1/150x150/406895/cetaphil_gentle_skin_cleanser_for_all_skin_types_125ml_0.jpg"
                     alt=""
                  ></img>
                  <Text marginTop={"15px"} fontSize={13} fontWeight={"bold"} pt={3} pl={1}>
                     CETAPHIL GENTLE SKIN CLEANSER FOR ALL SKIN TYPES 125ml

                  </Text>
                  <Text color={"#6F7284"} fontSize={13}  >Mkt: Galderma India Pvt Ltd</Text>
                  <Text fontWeight={"bold"} color={"#6F7284"} fontSize={14}  >Best Price* <Text as={"span"} fontWeight={"bold"} fontSize={"16px"} color={"#EF4281"}>Rs. 268.40</Text></Text>
                  <Button marginTop={"15px"} backgroundColor={"#24AEB1"} colorScheme={"twitter"}>ADD TO CART</Button>
               </Box>



               <Box
                  rounded={10}
                  boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}
                  p={4}
                  width={260}
                  height={340}
                  bg={"white"}
               >
                  <img
                     src="https://www.netmeds.com/images/product-v1/150x150/362506/scalpe_plus_anti_dandruff_shampoo_75_ml_0_1.jpg"
                     alt=""
                  ></img>
                  <Text fontSize={13} fontWeight={"bold"} pt={3} pl={1}>
                     Scalpe Plus Anti Dandruff Shampoo 75 ml


                  </Text>
                  <Text color={"#6F7284"} fontSize={13}  >Mkt: Glenmark Pharmaceuticals Ltd</Text>
                  <Text fontWeight={"bold"} color={"#6F7284"} fontSize={14}  >Best Price* <Text as={"span"} fontWeight={"bold"} fontSize={"16px"} color={"#EF4281"}>Rs. 238.00</Text></Text>
                  <Button marginTop={"15px"} backgroundColor={"#24AEB1"} colorScheme={"twitter"}>ADD TO CART</Button>
               </Box>
            </Flex>
         </Box>



         {/* UPTO 65% OFF */}

         <Box margin={"auto"} border={"2px solid red"} bg={"#F3F7FB"} gap={10} p={4}>
            <Box
               bg={"#F3F7FB"}
               display={"flex"}
               pl={10}
               justifyContent={"space-between"}
            >
               <Text color={"#6F7284"} fontSize={12} fontWeight={"bold"}>
                  {" "}
                  UPTO 65% OFF
               </Text>
            </Box>


            <Flex marginTop={"20px"} justifyContent={"center"} gap={"20px"}>
               <Box
                  rounded={10}
                  boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}
                  p={4}
                  width={260}
                  height={340}
                  bg={"white"}
               >
                  <img
                     src="https://www.netmeds.com/images/product-v1/150x150/932840/mamaearth_sleeping_mask_vitamin_c_100_gm_0_0.jpg"
                     alt=""
                  ></img>
                  <Text fontSize={13} fontWeight={"bold"} pt={3} pl={1}>
                     Mamaearth Sleeping Mask - Vitamin C 100 gm

                  </Text>
                  <Text color={"#6F7284"} fontSize={13}  >Mkt: Honasa Consumer Pvt Ltd</Text>
                  <Text fontWeight={"bold"} color={"#6F7284"} fontSize={14}  >Best Price* <Text as={"span"} fontWeight={"bold"} fontSize={"16px"} color={"#EF4281"}>Rs. 449.25</Text></Text>
                  <Button marginTop={"15px"} backgroundColor={"#24AEB1"} colorScheme={"twitter"}>ADD TO CART</Button>
               </Box>



               <Box
                  rounded={10}
                  boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}
                  p={4}
                  width={260}
                  height={340}
                  bg={"white"}
               >
                  <img
                     src="https://www.netmeds.com/images/product-v1/150x150/933015/aroma_magic_face_wash_neem_tea_tree_50_ml_0_0.jpg"
                     alt=""
                  ></img>
                  <Text fontSize={13} fontWeight={"bold"} pt={3} pl={1}>
                     Aroma Magic Face Wash - Neem & Tea Tree 50 ml


                  </Text>
                  <Text color={"#6F7284"} fontSize={13}  >Mkt: Blossom Kochhar Beauty Product..</Text>
                  <Text fontWeight={"bold"} color={"#6F7284"} fontSize={14}  >Best Price* <Text as={"span"} fontWeight={"bold"} fontSize={"16px"} color={"#EF4281"}>Rs. 80.00</Text></Text>
                  <Button marginTop={"15px"} backgroundColor={"#24AEB1"} colorScheme={"twitter"}>ADD TO CART</Button>
               </Box>





               <Box
                  rounded={10}
                  boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}
                  p={4}
                  width={260}
                  height={340}
                  bg={"white"}
               >
                  <img
                     src="https://www.netmeds.com/images/product-v1/150x150/923408/cetaphil_bright_healthy_radiance_brightness_reveal_creamy_cleanser_100gm_0_2.jpg"
                     alt=""
                  ></img>
                  <Text fontSize={13} fontWeight={"bold"} pt={3} pl={1}>
                     Cetaphil Bright Healthy Radiance Brightness Reveal Creamy Cleanser



                  </Text>
                  <Text color={"#6F7284"} fontSize={13}  >Mkt: Galderma India Pvt Ltd</Text>
                  <Text fontWeight={"bold"} color={"#6F7284"} fontSize={14}  >Best Price* <Text as={"span"} fontWeight={"bold"} fontSize={"16px"} color={"#EF4281"}>₹ 616.00</Text></Text>
                  <Button marginTop={"15px"} backgroundColor={"#24AEB1"} colorScheme={"twitter"}>ADD TO CART</Button>
               </Box>



               <Box
                  rounded={10}
                  boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}
                  p={4}
                  width={260}
                  height={340}
                  bg={"white"}
               >
                  <img
                     src="https://www.netmeds.com/images/product-v1/150x150/829556/aroma_magic_mint_cleanser_200_gm_0.jpg"
                     alt=""
                  ></img>
                  <Text fontSize={13} fontWeight={"bold"} pt={3} pl={1}>
                     Aroma Magic Mint Cleanser <br /> 200 gm


                  </Text>
                  <Text color={"#6F7284"} fontSize={13}  >Mkt: Blossom Kochhar Beauty Product..</Text>
                  <Text fontWeight={"bold"} color={"#6F7284"} fontSize={14}  >Best Price* <Text as={"span"} fontWeight={"bold"} fontSize={"16px"} color={"#EF4281"}>Rs. 268.40</Text></Text>
                  <Button marginTop={"15px"} backgroundColor={"#24AEB1"} colorScheme={"twitter"}>ADD TO CART</Button>
               </Box>



               <Box
                  rounded={10}
                  boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}
                  p={4}
                  width={260}
                  height={340}
                  bg={"white"}
               >
                  <img
                     src="https://www.netmeds.com/images/product-v1/150x150/1029275/cgg_cosmetics_rose_water_micellar_cleansing_water_4_in_1_skin_hydration_removing_makeup_for_all_skin_types_300_ml_423259_0_0.jpg"
                     alt=""
                  ></img>
                  <Text fontSize={13} fontWeight={"bold"} pt={3} pl={1}>
                     CGG Cosmetics Rose Water Micellar Cleansing Water 4 in 1


                  </Text>
                  <Text color={"#6F7284"} fontSize={13}  >Mkt: West Coast Pharmaceuticals Wor..</Text>
                  <Text fontWeight={"bold"} color={"#6F7284"} fontSize={14}  >Best Price* <Text as={"span"} fontWeight={"bold"} fontSize={"16px"} color={"#EF4281"}>Rs. 383.50</Text></Text>
                  <Button marginTop={"15px"} backgroundColor={"#24AEB1"} colorScheme={"twitter"}>ADD TO CART</Button>
               </Box>
            </Flex>
         </Box>


         {/* EMAMI */}


         <Box margin={"auto"} border={"2px solid red"} bg={"#F3F7FB"} gap={10} p={4}>
            <Box
               bg={"#F3F7FB"}
               display={"flex"}
               pl={10}
               justifyContent={"space-between"}
            >
               <Text color={"#6F7284"} fontSize={12} fontWeight={"bold"}>
                  {" "}
                  Emami
               </Text>
            </Box>


            <Flex marginTop={"20px"} justifyContent={"center"} gap={"20px"}>
               <Box
                  rounded={10}
                  boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}
                  p={4}
                  width={260}
                  height={340}
                  bg={"white"}
               >
                  <img
                     src="https://www.netmeds.com/images/product-v1/150x150/1004154/emami_kesh_king_damage_repair_shampoo_600_ml_0_0.jpg"
                     alt=""
                  ></img>
                  <Text fontSize={13} fontWeight={"bold"} pt={3} pl={1}>
                     Emami Kesh King Damage Repair Shampoo 600 ml


                  </Text>
                  <Text color={"#6F7284"} fontSize={13}  >Mkt: Emami Ltd</Text>
                  <Text fontWeight={"bold"} color={"#6F7284"} fontSize={14}  >Best Price* <Text as={"span"} fontWeight={"bold"} fontSize={"16px"} color={"#EF4281"}>Rs. 225.00</Text></Text>
                  <Button marginTop={"15px"} backgroundColor={"#24AEB1"} colorScheme={"twitter"}>ADD TO CART</Button>
               </Box>




               <Box
                  rounded={10}
                  boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}
                  p={4}
                  width={260}
                  height={340}
                  bg={"white"}
               >
                  <img
                     src="https://www.netmeds.com/images/product-v1/150x150/409913/fair_and_handsome_100_oil_clear_face_wash_100_gm_0.jpg"
                     alt=""
                  ></img>
                  <Text fontSize={13} fontWeight={"bold"} pt={3} pl={1}>
                     Fair and Handsome 100% Oil Clear Face Wash 100 gm



                  </Text>
                  <Text color={"#6F7284"} fontSize={13}  >Mkt: Emami Ltd</Text>
                  <Text fontWeight={"bold"} color={"#6F7284"} fontSize={14}  >Best Price* <Text as={"span"} fontWeight={"bold"} fontSize={"16px"} color={"#EF4281"}>Rs. 129.35</Text></Text>
                  <Button marginTop={"15px"} backgroundColor={"#24AEB1"} colorScheme={"twitter"}>ADD TO CART</Button>
               </Box>





               <Box
                  rounded={10}
                  boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}
                  p={4}
                  width={260}
                  height={340}
                  bg={"white"}
               >
                  <img
                     src="https://www.netmeds.com/images/product-v1/150x150/922635/boro_plus_doodh_kesar_body_lotion_400_ml_0_1.jpg"
                     alt=""
                  ></img>
                  <Text fontSize={13} fontWeight={"bold"} pt={3} pl={1}>
                     Boro Plus Doodh Kesar Body Lotion 400 ml




                  </Text>
                  <Text color={"#6F7284"} fontSize={13}  >Mkt: Emami Ltd</Text>
                  <Text fontWeight={"bold"} color={"#6F7284"} fontSize={14}  >Best Price* <Text as={"span"} fontWeight={"bold"} fontSize={"16px"} color={"#EF4281"}>₹ 208.00</Text></Text>
                  <Button marginTop={"15px"} backgroundColor={"#24AEB1"} colorScheme={"twitter"}>ADD TO CART</Button>
               </Box>



               <Box
                  rounded={10}
                  boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}
                  p={4}
                  width={260}
                  height={340}
                  bg={"white"}
               >
                  <img
                     src="https://www.netmeds.com/images/product-v1/150x150/409896/he_perfumed_body_spray_respect_150_ml_0.jpg"
                     alt=""
                  ></img>
                  <Text fontSize={13} fontWeight={"bold"} pt={3} pl={1}>
                     HE Perfumed Body Spray - Respect  <br /> 150 ml


                  </Text>
                  <Text color={"#6F7284"} fontSize={13}  >Mkt: Emami Ltd</Text>
                  <Text fontWeight={"bold"} color={"#6F7284"} fontSize={14}  >Best Price* <Text as={"span"} fontWeight={"bold"} fontSize={"16px"} color={"#EF4281"}>Rs. 268.40</Text></Text>
                  <Button marginTop={"15px"} backgroundColor={"#24AEB1"} colorScheme={"twitter"}>ADD TO CART</Button>
               </Box>



               <Box
                  rounded={10}
                  boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}
                  p={4}
                  width={260}
                  height={340}
                  bg={"white"}
               >
                  <img
                     src="https://www.netmeds.com/images/product-v1/150x150/853394/boro_plus_doodh_kesar_body_lotion_300_ml_0.jpg"
                     alt=""
                  ></img>
                  <Text fontSize={13} fontWeight={"bold"} pt={3} pl={1}>
                     Boro Plus Doodh Kesar Body <br /> Lotion 300 ml



                  </Text>
                  <Text color={"#6F7284"} fontSize={13}  >Mkt: West Coast Pharmaceuticals Wor..</Text>
                  <Text fontWeight={"bold"} color={"#6F7284"} fontSize={14}  >Best Price* <Text as={"span"} fontWeight={"bold"} fontSize={"16px"} color={"#EF4281"}>Rs. 383.50</Text></Text>
                  <Button marginTop={"15px"} backgroundColor={"#24AEB1"} colorScheme={"twitter"}>ADD TO CART</Button>
               </Box>
            </Flex>
         </Box>



         {/* AROMA */}

         <Box margin={"auto"} border={"2px solid red"} bg={"#F3F7FB"} gap={10} p={4}>
            <Box
               bg={"#F3F7FB"}
               display={"flex"}
               pl={10}
               justifyContent={"space-between"}
            >
               <Text color={"#6F7284"} fontSize={12} fontWeight={"bold"}>
                  {" "}
                  Aroma
               </Text>
            </Box>


            <Flex marginTop={"20px"} justifyContent={"center"} gap={"20px"}>
               <Box
                  rounded={10}
                  boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}
                  p={4}
                  width={260}
                  height={340}
                  bg={"white"}
               >
                  <img
                     src="https://www.netmeds.com/images/product-v1/150x150/889444/aroma_magic_essential_oil_eucalyptus_20_ml_0.jpg"
                     alt=""
                  ></img>
                  <Text fontSize={13} fontWeight={"bold"} pt={3} pl={1}>
                     Aroma Magic Essential Oil - <br /> Eucalyptus 20 ml



                  </Text>
                  <Text color={"#6F7284"} fontSize={13}  >Mkt: Blossom Kochhar Beauty Product..</Text>
                  <Text fontWeight={"bold"} color={"#6F7284"} fontSize={14}  >Best Price* <Text as={"span"} fontWeight={"bold"} fontSize={"16px"} color={"#EF4281"}>Rs. 138.00</Text></Text>
                  <Button marginTop={"15px"} backgroundColor={"#24AEB1"} colorScheme={"twitter"}>ADD TO CART</Button>
               </Box>




               <Box
                  rounded={10}
                  boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}
                  p={4}
                  width={260}
                  height={340}
                  bg={"white"}
               >
                  <img
                     src="https://www.netmeds.com/images/product-v1/150x150/829655/aroma_magic_essential_oil_tea_tree_20_ml_0.jpg"
                     alt=""
                  ></img>
                  <Text fontSize={13} fontWeight={"bold"} pt={3} pl={1}>
                     Aroma Magic Essential Oil - Tea <br /> Tree 20 ml



                  </Text>
                  <Text color={"#6F7284"} fontSize={13}  >Mkt: Blossom Kochhar Beauty Product..</Text>
                  <Text fontWeight={"bold"} color={"#6F7284"} fontSize={14}  >Best Price* <Text as={"span"} fontWeight={"bold"} fontSize={"16px"} color={"#EF4281"}>Rs. 366.00</Text></Text>
                  <Button marginTop={"15px"} backgroundColor={"#24AEB1"} colorScheme={"twitter"}>ADD TO CART</Button>
               </Box>





               <Box
                  rounded={10}
                  boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}
                  p={4}
                  width={260}
                  height={340}
                  bg={"white"}
               >
                  <img
                     src="https://www.netmeds.com/images/product-v1/150x150/829648/aroma_magic_essential_oil_peppermint_20_ml_0.jpg"
                     alt=""
                  ></img>
                  <Text fontSize={13} fontWeight={"bold"} pt={3} pl={1}>
                     Aroma Magic Essential Oil - <br /> Peppermint 20 ml




                  </Text>
                  <Text color={"#6F7284"} fontSize={13}  >Mkt: Blossom Kochhar Beauty Product..</Text>
                  <Text fontWeight={"bold"} color={"#6F7284"} fontSize={14}  >Best Price* <Text as={"span"} fontWeight={"bold"} fontSize={"16px"} color={"#EF4281"}>₹ 198.00</Text></Text>
                  <Button marginTop={"15px"} backgroundColor={"#24AEB1"} colorScheme={"twitter"}>ADD TO CART</Button>
               </Box>



               <Box
                  rounded={10}
                  boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}
                  p={4}
                  width={260}
                  height={340}
                  bg={"white"}
               >
                  <img
                     src="https://www.netmeds.com/images/product-v1/150x150/829641/aroma_magic_essential_oil_lavender_20_ml_0.jpg"
                     alt=""
                  ></img>
                  <Text fontSize={13} fontWeight={"bold"} pt={3} pl={1}>
                     Aroma Magic Essential Oil - <br /> Lavender 20 ml



                  </Text>
                  <Text color={"#6F7284"} fontSize={13}  >Mkt: Blossom Kochhar Beauty Product..</Text>
                  <Text fontWeight={"bold"} color={"#6F7284"} fontSize={14}  >Best Price* <Text as={"span"} fontWeight={"bold"} fontSize={"16px"} color={"#EF4281"}>Rs. 222.00</Text></Text>
                  <Button marginTop={"15px"} backgroundColor={"#24AEB1"} colorScheme={"twitter"}>ADD TO CART</Button>
               </Box>



               <Box
                  rounded={10}
                  boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}
                  p={4}
                  width={260}
                  height={340}
                  bg={"white"}
               >
                  <img
                     src="https://www.netmeds.com/images/product-v1/150x150/829645/aroma_magic_essential_oil_orange_20_ml_0.jpg"
                     alt=""
                  ></img>
                  <Text fontSize={13} fontWeight={"bold"} pt={3} pl={1}>
                     Aroma Magic Essential Oil - <br /> Orange 20 ml



                  </Text>
                  <Text color={"#6F7284"} fontSize={13}  >Mkt: Blossom Kochhar Beauty Product..</Text>
                  <Text fontWeight={"bold"} color={"#6F7284"} fontSize={14}  >Best Price* <Text as={"span"} fontWeight={"bold"} fontSize={"16px"} color={"#EF4281"}>Rs. 168.00</Text></Text>
                  <Button marginTop={"15px"} backgroundColor={"#24AEB1"} colorScheme={"twitter"}>ADD TO CART</Button>
               </Box>
            </Flex>
         </Box>


         {/* HEALTH CONCERNS */}
         <Box border={"2px solid black"}>
            <Text bg={"#F3F7FB"}
               display={"flex"}
               pl={10}
               justifyContent={"space-between"} fontSize={28} fontWeight={500}>Health Concerns</Text>


            <Box >
               <Box bg={"#F3F7FB"} display={"flex"} gap={5} p={8}>
                  <Box
                     marginLeft={"30px"}
                     boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}
                     rounded={10}
                     pt={10}
                     pl={19}
                     width={230}
                     height={280}
                     bg={"white"}
                  >
                     <img
                        style={{ marginLeft: "40px" }}
                        src="https://www.netmeds.com/images/cms/wysiwyg/category/v2/img/lung-care.jpg?v=1"
                        alt=""
                     ></img>
                     <Text marginLeft={"-45px"} fontSize={18} fontWeight={500} pt={14} pl={38}>
                        Lungs Care
                     </Text>
                  </Box>



                  <Box
                     marginLeft={"30px"}
                     boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}
                     rounded={10}
                     pt={10}
                     pl={22}
                     width={230}
                     height={280}
                     bg={"white"}
                  >
                     <img
                        style={{ marginLeft: "40px" }}
                        src="https://www.netmeds.com/images/cms/wysiwyg/category/v2/img/weight-care.jpg?v=1"
                        alt=""
                     ></img>
                     <Text marginLeft={"-45px"} fontSize={18} fontWeight={500} pt={14} pl={29}>
                        Weight Care
                     </Text>
                  </Box>



                  <Box
                     marginLeft={"30px"}
                     boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}
                     rounded={10}
                     pt={10}
                     pl={13}
                     width={230}
                     height={280}
                     bg={"white"}
                  >
                     <img
                        style={{ marginLeft: "50px" }}
                        src="https://www.netmeds.com/images/cms/wysiwyg/category/v2/img/women-s-care.jpg?v=1"
                        alt=""
                     ></img>
                     <Text marginLeft={"-45px"} fontSize={18} fontWeight={500} pt={14} pl={27}>
                        Women's care
                     </Text>
                  </Box>

                  <Box
                     marginLeft={"30px"}
                     boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}
                     rounded={10}
                     pt={10}
                     pl={21}
                     width={230}
                     height={280}
                     bg={"white"}
                  >
                     <img
                        style={{ marginLeft: "40px" }}
                        src="https://www.netmeds.com/images/cms/wysiwyg/category/v2/img/bone-and-joint-pain.jpg?v=1"
                        alt=""
                     ></img>
                     <Text marginLeft={"-45px"} fontSize={18} fontWeight={500} pt={14} pl={27}>
                        Bone And Joint Pain
                     </Text>
                  </Box>

                  <Box
                     marginLeft={"30px"}
                     boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}
                     rounded={10}
                     pt={10}
                     pl={45}
                     width={230}
                     height={280}
                     bg={"white"}
                  >
                     <img
                        style={{ marginLeft: "20px" }}
                        src="https://www.netmeds.com/images/cms/wysiwyg/category/v2/img/cold-and-fever.jpg?v=1"
                        alt=""
                     ></img>
                     <Text marginLeft={"-45px"} fontSize={18} fontWeight={500} pt={14} >
                        Cold And Fever
                     </Text>
                  </Box>
               </Box>

            </Box>


         </Box>



      </Box>
   );
}

export default Wellness;
