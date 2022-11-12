
import React, { useState, useEffect } from "react";

import { Flex, HStack, Stack, Text, Box, Button, Image, Grid, Spacer,Heading } from "@chakra-ui/react"
import HealthConcernCard from "../Home/HealthConcernCard";

import WellnessCarousel from "../../components/WellnessCarousel";
import { Link } from "react-router-dom"
import HeaderComp from "../Home/HeaderComp";
import { categoryArr, healthConcernsArr } from "../../../db.json"
import axios from "axios";




const getCartData = async () => {
   // https://medimedcom-backend-production.up.railway.app/products
   let data = await axios.get("https://medimedcom-backend-production.up.railway.app/products");
   return data;
 };
function Wellness() {
   const [data,setData]=useState([])


   useEffect(() => {
     
         getCartData()
           .then((res) => {
             setData([...res.data])
             console.log(res.data);
           
           })
           .catch((e) => {
             console.log(e);
          
           })
         }, []);

   // // const data = [
   //    {
   //       "id": 101,
   //       "url": "https://www.netmeds.com/images/product-v1/150x150/812809/pure_nutrition_progut_plus_for_healthy_digestion_veg_capsules_60_s_0.jpg",
   //       "off": "30% OFF",
   //       "title": "Pure Nutrition Progut(For Healthy Digestion)Capsules 60's",
   //       "mkt": "Mkt: Herbs Nutriproducts Pvt. Ltd.",
   //       "price": "1,049.30",
   //       "Fprice": " 1,499.00"
   //    },
   //    {
   //       "id": 102,
   //       "url": "https://www.netmeds.com/images/product-v1/150x150/821307/kapiva_wheat_grass_juice_1_ltr_0_2.jpg",
   //       "off": "14% OFF",
   //       "title": "Kapiva Wheat Grass Juice 1 ltr",
   //       "mkt": "Mkt: Adret Retail Pvt Ltd, (Kapiva)",
   //       "price": "429.14",
   //       "Fprice": " 499.00"
   //    },
   //    {
   //       "id": 103,
   //       "url": "https://www.netmeds.com/images/product-v1/150x150/814310/himalaya_wellness_ashvagandha_tablet_60_s_0.jpg",
   //       "off": "14% OFF",
   //       "title": "Himalaya Wellness Ashvagandha Tablet 60's",
   //       "mkt": "Mkt: The Himalaya Drug Company",
   //       "price": "200.00",
   //       "Fprice": " 160.00"
   //    },
   //    {
   //       "id": 104,
   //       "url": "https://www.netmeds.com/images/product-v1/150x150/15921/dabur_shilajit_gold_capsule_10s_0_1.jpg",
   //       "off": "10% OFF",
   //       "title": "Dabur Shilajit Gold Capsule 10's",
   //       "mkt": "Mkt: Dabur India Ltd",
   //       "price": "229.00",
   //       "Fprice": "255.00"
   //    },
   //    {
   //       "id": 105,
   //       "url": "https://www.netmeds.com/images/product-v1/150x150/15919/dabur_shilajit_capsule_100_s_0.jpg",
   //       "off": "18% OFF",
   //       "title": "Dabur Shilajit Capsule 100's",
   //       "mkt": "Mkt: Dabur India Ltd",
   //       "price": "410.00",
   //       "Fprice": "500.00"
   //    },
   //    {
   //       "id": 106,
   //       "url": "https://www.netmeds.com/images/product-v1/150x150/15912/dabur_honitus_herbal_cough_remedy_syrup_100_ml_0.jpg",
   //       "off": "1% OFF",
   //       "title": "Dabur Honitus Herbal Cough Remedy Syrup 100 ml",
   //       "mkt": "Mkt: Dabur India Ltd",
   //       "price": "103.00",
   //       "Fprice": "105.00"
   //    },
   //    {
   //       "id": 107,
   //       "url": "https://www.netmeds.com/images/product-v1/150x150/919948/dr_vaidyas_herbo_24_turbo_male_power_oil_pack_of_2_x_25_ml_0_1.jpg",
   //       "off": "33% OFF",
   //       "title": "Dr.Vaidya's Herbo 24 Turbo Male Power Oil (Pack of 2 x 25 ml)",
   //       "mkt": "Mkt: Herbolab India Pvt Ltd",
   //       "price": "268.00",
   //       "Fprice": "400.00"
   //    },
   //    {
   //       "id": 108,
   //       "url": "https://www.netmeds.com/images/product-v1/150x150/919949/dr_vaidyas_herbo_24_turbo_plus_capsule_30s_0_0.jpg",
   //       "off": "40% OFF",
   //       "title": "Dr.Vaidya's Herbo 24 Turbo Plus Capsule 30's",
   //       "mkt": "Mkt: Herbolab India Pvt Ltd",
   //       "price": "450.00",
   //       "Fprice": "750.00"
   //    },
   //    {
   //       "id": 109,
   //       "url": "https://www.netmeds.com/images/product-v1/150x150/363656/pankajakasthuri_breathe_easy_granules_400_gm_0.jpg",
   //       "off": "18% OFF",
   //       "title": "Pankajakasthuri Breathe Easy Granules 400 gm",
   //       "mkt": "Mkt:kasthuri Herbals India Pvt Ltd",
   //       "price": "270.00",
   //       "Fprice": "330.00"
   //    },
   //    {
   //       "id": 110,
   //       "url": "https://www.netmeds.com/images/product-v1/150x150/850750/sbl_cantharis_gel_25_gm_0.jpg",
   //       "off": "10% OFF",
   //       "title": "SBL Cantharis Gel 25 gm",
   //       "mkt": " Mkt: SBL Pvt. Ltd.",
   //       "price": "54.00",
   //       "Fprice": "60.00"
   //    },
   //    {
   //       "id": 111,
   //       "url": "https://www.netmeds.com/images/product-v1/150x150/406037/patanjali_special_chyawanprash_1_kg_0.jpg",
   //       "off": "15% OFF",
   //       "title": "Patanjali Special Chyawanprash 1 kg",
   //       "mkt": " Mkt: Patanjali Ayurved Ltd",
   //       "price": "340.00",
   //       "Fprice": "400.00"
   //    },
   //    {
   //       "id": 112,
   //       "url": "https://www.netmeds.com/images/product-v1/150x150/840552/dabur_honey_1_kg_0_2.jpg",
   //       "off": "9% OFF",
   //       "title": "Dabur Honey 1 kg",
   //       "mkt": " Mkt: Dabur India Ltd",
   //       "price": "432.25",
   //       "Fprice": "475.00"
   //    },
   //    {
   //       "id": 113,
   //       "url": "https://www.netmeds.com/images/product-v1/150x150/991524/dabur_honitus_herbal_cough_remedy_syrup_200_ml_0_0.jpg",
   //       "off": "10% OFF",
   //       "title": "Dabur Honitus Adulsa Cough Syrup 100 ml",
   //       "mkt": "Mkt: Dabur India Ltd",
   //       "price": "135.00",
   //       "Fprice": "150.00"
   //    },
   //    {
   //       "id": 114,
   //       "url": "https://www.netmeds.com/images/product-v1/150x150/901360/dabur_hajmola_imli_digestive_tablets_160s_0_0.jpg",
   //       "off": "5% OFF",
   //       "title": "Dabur Hajmola Imli Digestive Tablets 160's",
   //       "mkt": "Mkt: Dabur India Ltd",
   //       "price": "152.00",
   //       "Fprice": "160.00"
   //    },
   //    {
   //       "id": 115,
   //       "url": "https://www.netmeds.com/images/product-v1/150x150/15865/dabur_new_rheumatil_gel_30_gm_0.jpg",
   //       "off": "5% OFF",
   //       "title": "Dabur Red Toothpaste 500 gm (2x200gm + 1x100gm)",
   //       "mkt": "Mkt: Dabur India Ltd",
   //       "price": "183.00",
   //       "Fprice": "235.00"
   //    },
   //    {
   //       "id": 116,
   //       "url": "https://www.netmeds.com/images/product-v1/150x150/357753/d_protin_chocolate_powder_500_gm_0.jpg",
   //       "off": "18% OFF",
   //       "title": "D Protin Chocolate Powder 500 gm",
   //       "mkt": " Mkt: British Biologicals",
   //       "price": "473.00",
   //       "Fprice": "578.00"
   //    },
   //    {
   //       "id": 117,
   //       "url": "https://www.netmeds.com/images/product-v1/150x150/902372/ensure_diabetes_care_powder_vanilla_flavour_1_kg_refill_pack_0_0.jpg",
   //       "off": "5% OFF",
   //       "title": "Ensure Diabetes Care Powder - Vanilla Flavour 1 kg (Refill Pack)",
   //       "mkt": "Mkt: Abbott Healthcare Pvt Ltd",
   //       "price": "1477.25",
   //       "Fprice": "1555.00"
   //    },
   //    {
   //       "id": 118,
   //       "url": "https://www.netmeds.com/images/product-v1/150x150/101945/d_protin_chocolate_powder_200_gm_0_1.jpg",
   //       "off": "15% OFF",
   //       "title": "D Protin Chocolate Powder 200 gm",
   //       "mkt": "Mkt: British Biologicals",
   //       "price": "221.00",
   //       "Fprice": "260.00"
   //    },
   //    {
   //       "id": 119,
   //       "url": "https://www.netmeds.com/images/product-v1/150x150/858567/inlife_triphala_extract_capsules_60_s_0.jpg",
   //       "off": "47% OFF",
   //       "title": "INLIFE Triphala Extract Capsules 60's",
   //       "mkt": " Mkt: Inlife Pharma Private Limited",
   //       "price": "243.27.30",
   //       "Fprice": "₹ 459.00"
   //    },
   //    {
   //       "id": 120,
   //       "url": "https://www.netmeds.com/images/product-v1/150x150/815204/healthvit_ginkgo_biloba_180_mg_capsules_60_s_0.jpg",
   //       "off": "14% OFF",
   //       "title": "HealthVit Ginkgo Biloba 180 mg Capsules 60's",
   //       "mkt": "Mkt: West Pharmaceuticals Works Ltd",
   //       "price": "800.00",
   //       "Fprice": "₹ 1000.00"
   //    },
   //    {
   //       "id": 121,
   //       "url": "https://www.netmeds.com/images/product-v1/150x150/858568/inlife_guggul_extract_capsules_60_s_0.jpg",
   //       "off": "34% OFF",
   //       "title": "INLIFE Guggul Extract Capsules 180mg 60's",
   //       "mkt": "Mkt: Herbs Nutriproducts Pvt. Ltd.",
   //       "price": "329.34",
   //       "Fprice": "₹ 499.00"
   //    },
   //    {
   //       "id": 122,
   //       "url": "https://www.netmeds.com/images/product-v1/150x150/858539/inlife_diastan_plus_diabetic_care_powder_300_gm_78257_0_1.jpg",
   //       "off": "50% OFF",
   //       "title": "INLIFE Diastan Plus Diabetic Care Powder 300 gm",
   //       "mkt": " Mkt: Inlife Pharma Private Limited",
   //       "price": "450.00",
   //       "Fprice": "₹ 900.00"
   //    },
   //    {
   //       "id": 123,
   //       "url": "https://www.netmeds.com/images/product-v1/150x150/408327/one_touch_verio_flex_blood_glucose_monitoring_system_10_test_strips_0_4.jpg",
   //       "off": "50% OFF",
   //       "title": "OneTouch Verio Flex Blood Glucose Monitoring System",
   //       "mkt": "Mkt: Lifescan Medical Device India Pvt Ltd",
   //       "price": "1491.00",
   //       "Fprice": "₹ 1,750.00"
   //    },
   //    {
   //       "id": 124,
   //       "url": "https://www.netmeds.com/images/product-v1/150x150/14604/nestle_resource_diabetic_powder_vanilla_flavour_400_gm_pet_jar_0_1.jpg",
   //       "off": "50% OFF",
   //       "title": "Nestle Resource Diabetic Powder - 400 gm ",
   //       "mkt": "Mkt: Nestle India Ltd",
   //       "price": "759.05",
   //       "Fprice": "₹ 799.00"
   //    },
   //    {
   //       "id": 125,
   //       "url": "https://www.netmeds.com/images/product-v1/150x150/828508/so_sweet_100_natural_sugarfree_sweetener_erythritol_powder_1000_gm_0_2.jpg",
   //       "off": "25% OFF",
   //       "title": "So Sweet 100% Natural Sugarfree  Erythritol Powder 1000 gm",
   //       "mkt": "Mkt: Herboveda India",
   //       "price": "675.00",
   //       "Fprice": "₹ 900.00"
   //    },
   //    {
   //       "id": 126,
   //       "url": "https://www.netmeds.com/images/product-v1/150x150/901253/onetouch_delica_plus_lancets_pack_of_25s_0_4.jpg",
   //       "off": "5% OFF",
   //       "title": "Onetouch Select Plus Test Strips 50's",
   //       "mkt": "Mkt: Herboveda India",
   //       "price": "152.00",
   //       "Fprice": "₹ 160.00"
   //    },
   //    {
   //       "id": 127,
   //       "url": "https://www.netmeds.com/images/product-v1/150x150/407923/revital_h_woman_tablet_30_s_0.jpg",
   //       "off": "15% OFF",
   //       "title": "Mkt: Sun Pharmaceutical Industries Ltd",
   //       "mkt": "Mkt: Herboveda India",
   //       "price": "293.25",
   //       "Fprice": "₹ 345.00"
   //    },
   //    {
   //       "id": 128,
   //       "url": "https://www.netmeds.com/images/product-v1/150x150/408222/revital_h_woman_tablet_10_s_0.jpg",
   //       "off": "15% OFF",
   //       "title": "Revital H Woman Tablet 10'S",
   //       "mkt": " Mkt: Sun Pharmaceutical Industries Ltd",
   //       "price": "102.00",
   //       "Fprice": "₹ 120.00"
   //    },
   //    {
   //       "id": 129,
   //       "url": "https://www.netmeds.com/images/product-v1/150x150/958677/shake_handz_e_alcohol_hand_rub_with_flip_cap_500_ml_0_1.jpg",
   //       "off": "60% OFF",
   //       "title": "Shake HandZ-E Alcohol Hand Rub With Flip Cap 500 ml",
   //       "mkt": "Mkt: Herboveda India",
   //       "price": "100.00",
   //       "Fprice": "₹ 250.00"
   //    },
   //    {
   //       "id": 130,
   //       "url": "https://www.netmeds.com/images/product-v1/150x150/958409/status_n95_face_mask_white_pack_of_20_0_1.jpg",
   //       "off": "80% OFF",
   //       "title": "Status N95 Face Mask - White (Pack of 20)",
   //       "mkt": "Mkt: Chinar Forge Ltd.",
   //       "price": "200.00",
   //       "Fprice": "₹ 980.00"
   //    }
   // ]

   return (

      <Box marginBottom={"15px"} bg={"#f3f6fb"}>
         <HeaderComp />
         <Box></Box>

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

         <Box display={"flex"} flexWrap={"wrap"} justify={"space-evenly"} width={"100%"} gap={"20px"}  marginTop={"20px"}>
            {/* border={"2px solid green"} justifyContent={"center"} bg={"#F3F7FB"} display={"flex"} gap={10} p={4} */}
            <Box
               width={["300px", "250px", "250px", "280px"]}
               rounded={10}
               boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}
               p={4}
               //width={230}
               height={280}
               bg={"white"}
            >
               <img
                  src="https://www.netmeds.com/images/category/v1/3902/thumb/face_personal_care.jpg"
                  alt=""
               ></img>
               <Text fontSize={14} fontWeight={500} pt={5} pl={8}>
                  Face Personal Care
               </Text>
            </Box>
            <Box
               rounded={10}
               boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}
               p={4}
               width={["300px", "250px", "250px", "280px"]}
               //width={230}
               height={280}
               bg={"white"}
            >
               <img
                  src="https://www.netmeds.com/images/category/v1/525/thumb/body_care_1.jpg"
                  alt=""
               ></img>
               <Text marginLeft={"25px"} fontSize={14} fontWeight={500} pt={5} pl={12}>
                  Body care
               </Text>
            </Box>
            <Box
               rounded={10}
               boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}
               p={0}
               width={["300px", "250px", "250px", "280px"]}
               //width={230}
               height={280}
               bg={"white"}
            >
               <img
                  src="https://www.netmeds.com/images/category/v1/547/thumb/hair_care_2.jpg"
                  alt=""
               ></img>
               <Text marginLeft={"25px"} fontSize={14} fontWeight={500} pt={8} pl={12}>
                  Hair Care
               </Text>
            </Box>
            <Box
               rounded={10}
               boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}
               p={3}
               width={["300px", "250px", "250px", "280px"]}
               //width={230}
               height={280}
               bg={"white"}
            >
               <img
                  src="https://www.netmeds.com/images/category/v1/562/thumb/oral_care.jpg"
                  alt=""
               ></img>
               <Text marginLeft={"25px"} fontSize={14} fontWeight={500} pt={5} pl={12}>
                  Oral care
               </Text>
            </Box>
            <Box
               rounded={10}
               boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}
               p={4}
               pl={8}
               width={["300px", "250px", "250px", "280px"]}
               //width={230}
               height={280}
               bg={"white"}
            >
               <img
                  src="https://www.netmeds.com/images/category/v1/3772/thumb/home_health.jpg"
                  alt=""
               ></img>
               <Text marginLeft={"25px"} fontSize={14} fontWeight={500} pt={4} pl={8}>
                  Home & Health
               </Text>
            </Box>
         </Box>






         {/* under 399 */}
         <Box margin={"auto"}  bg={"#F3F7FB"} gap={10} p={4}>
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
            <Flex flexWrap={"wrap"} justify={"space-evenly"} width={"100%"} gap={"20px"}  marginTop={"20px"} >
               {/* gridTemplateRows={['repeat(2, auto)', 'repeat(2, auto)', 'repeat(1, auto)', 'repeat(1, auto)']} gridTemplateColumns={['repeat(2, 25%)', 'repeat(2, 25%)', 'repeat(3, 25%)', 'repeat(4, 25%)']} */}

               {data?.filter((el) => el.price <= 399 ? el : null).splice(0, 4).map((el) => (
                  <Link key={el._id} to={`/wellness/${el._id}`}>
                     <Flex
                        wrap={"wrap"}
                        direction={"column"}
                        minHeight={"400px"}

                        rounded={10}
                        boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}
                        p={4}
                        width={["300px", "250px", "250px", "280px"]}
                        // height={340}
                        bg={"white"}
                     >
                        <Box  lineHeight={2} height={"80%"}>
                           <img
                              src={el.url}
                              alt=""
                           ></img>
                           <Text fontSize={13} fontWeight={"bold"} pt={3} pl={1}>
                              {el.title}
                           </Text>
                           <Text color={"#6F7284"} fontSize={13}  >{el.mkt}</Text>
                           <Text fontWeight={"bold"} color={"#6F7284"} fontSize={14}  >Best Price* <Text as={"span"} fontWeight={"bold"} fontSize={"16px"} color={"#EF4281"}>Rs.{el.price}</Text></Text>
                        </Box>

                        <Spacer />
                        <Flex justify={"center"} height={"10%"}><Button marginTop={"15px"} backgroundColor={"#24AEB1"} colorScheme={"twitter"}>ADD TO CART</Button></Flex>
                     </Flex></Link>
               ))}
            </Flex>
         </Box>

        




         {/* UPTO 65% OFF */}
         <Box margin={"auto"}  bg={"#F3F7FB"} gap={10} p={4}>
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
            <Flex flexWrap={"wrap"} justify={"space-evenly"} width={"100%"} gap={"20px"}  marginTop={"20px"}>
               {data?.filter((el) => el.off <= "65%" ? el : null).splice(0, 4).map((el) => (
                  <Link key={el._id} to={`/wellness/${el._id}`} >
                     <Flex
                        wrap={"wrap"}
                        direction={"column"}
                        minHeight={"400px"}
                        rounded={10}
                        boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}
                        p={4}
                        width={["300px", "250px", "250px", "280px"]}
                        //width={260}
                        //height={340}
                        bg={"white"}

                     >
                        <Box  lineHeight={2} height={"80%"}>
                           <img
                              src={el.url}
                              alt=""
                           ></img>
                           <Text fontSize={13} fontWeight={"bold"} pt={3} pl={1}>
                              {el.title}
                           </Text>
                           <Text color={"#6F7284"} fontSize={13}  >{el.mkt}</Text>
                           <Text fontWeight={"bold"} color={"#6F7284"} fontSize={14}  >Best Price* <Text as={"span"} fontWeight={"bold"} fontSize={"16px"} color={"#EF4281"}>Rs.{el.price}</Text></Text>
                        </Box>
                        <Spacer />

                        <Flex justify={"center"} height={"10%"}><Button marginTop={"15px"} backgroundColor={"#24AEB1"} colorScheme={"twitter"}>ADD TO CART</Button></Flex>
                     </Flex></Link>
               ))}
            </Flex>
         </Box>




         {/* EMAMI */}

         <Box margin={"auto"}  bg={"#F3F7FB"} gap={10} p={4}>
            <Box
               bg={"#F3F7FB"}
               display={"flex"}
               pl={10}
               justifyContent={"space-between"}
            >
               <Text color={"#6F7284"} fontSize={12} fontWeight={"bold"}>
                  {" "}
                  UPTO 200
               </Text>
            </Box>

            <Flex flexWrap={"wrap"} justify={"space-evenly"} width={"100%"} gap={"20px"}  marginTop={"20px"}>
               {data?.filter((el) => el.price <= 200 ? el : null).splice(0, 4).map((el) => (
                  <Link key={el._id} to={`/wellness/${el._id}`} >
                     <Flex

                        wrap={"wrap"}
                        direction={"column"}
                        minHeight={"400px"}
                        rounded={10}
                        boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}
                        p={4}
                        width={["300px", "250px", "250px", "280px"]}
                        //width={260}
                        //height={340}
                        bg={"white"}
                     >
                        <Box  lineHeight={2} height={"80%"}>
                           <img
                              src={el.url}
                              alt=""
                           ></img>
                           <Text fontSize={13} fontWeight={"bold"} pt={3} pl={1}>
                              {el.title}
                           </Text>
                           <Text color={"#6F7284"} fontSize={13}  >{el.mkt}</Text>
                           <Text fontWeight={"bold"} color={"#6F7284"} fontSize={14}  >Best Price* <Text as={"span"} fontWeight={"bold"} fontSize={"16px"} color={"#EF4281"}>Rs.{el.price}</Text></Text>
                        </Box>

                        <Spacer />

                        <Flex justify={"center"} height={"10%"}><Button marginTop={"15px"} backgroundColor={"#24AEB1"} colorScheme={"twitter"}>ADD TO CART</Button></Flex>
                     </Flex></Link>
               ))}
            </Flex>
         </Box>
      


         {/* AROMA */}


         <Box margin={"auto"}  bg={"#F3F7FB"} gap={10} p={4}>
            <Box
               bg={"#F3F7FB"}
               display={"flex"}
               pl={10}
               justifyContent={"space-between"}
            >
               <Text color={"#6F7284"} fontSize={12} fontWeight={"bold"}>
                  {" "}
                  ABOVE 600
               </Text>
            </Box>
            <Flex flexWrap={"wrap"} justify={"space-evenly"} width={"100%"} gap={"20px"}  marginTop={"20px"}>
               {data?.filter((el) => el.price >= 600 ? el : null).splice(0, 4).map((el) => (
                  <Link key={el._id} to={`/wellness/${el._id}`} >
                     <Flex
                        wrap={"wrap"}
                        direction={"column"}
                        minHeight={"400px"}
                        rounded={10}
                        boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}
                        p={4}
                        width={["300px", "250px", "250px", "280px"]}
                        //width={260}
                        //height={340}
                        bg={"white"}
                     >
                        <Box  lineHeight={2} height={"80%"}>
                           <img
                              src={el.url}
                              alt=""
                           ></img>
                           <Text fontSize={13} fontWeight={"bold"} pt={3} pl={1}>
                              {el.title}
                           </Text>
                           <Text color={"#6F7284"} fontSize={13}  >{el.mkt}</Text>
                           <Text fontWeight={"bold"} color={"#6F7284"} fontSize={14}  >Best Price* <Text as={"span"} fontWeight={"bold"} fontSize={"16px"} color={"#EF4281"}>Rs.{el.price}</Text></Text>
                        </Box>

                        <Flex justify={"center"} height={"10%"}><Button marginTop={"15px"} backgroundColor={"#24AEB1"} colorScheme={"twitter"}>ADD TO CART</Button></Flex>
                     </Flex></Link>
               ))}
            </Flex>
         </Box>
        


         {/* HEALTH CONCERNS */}
        


         <Heading
               py={5}
               w={"full"}
               align={"left"}
               fontSize={{ base: "xl", md: "2xl" }}
               fontFamily={"sans-serif"}
            >
               Health Concerns
            </Heading>
            <Flex
               w={"full"}
               pb={7}
               gap={4}
               zIndex={1}
               direction={{ base: "column", md: "row" }}
            >
               {healthConcernsArr.map((item) => (
                  <HealthConcernCard key={item.id} {...item} />
               ))}
            </Flex>





      </Box>
   );
}

export default Wellness;
