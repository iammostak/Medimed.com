
import React from "react";

import { Flex, Stack, Text, Box, Button, Image, } from "@chakra-ui/react"
import WellnessCarousel from "../../components/WellnessCarousel";
import { Link } from "react-router-dom"





function Wellness() {

   const data = [
      {
         "id": 101,
         "url": "https://www.netmeds.com/images/product-v1/150x150/812809/pure_nutrition_progut_plus_for_healthy_digestion_veg_capsules_60_s_0.jpg",
         "off": "30% OFF",
         "title": "Pure Nutrition Progut(For Healthy Digestion)Capsules 60's",
         "mkt": "Mkt: Herbs Nutriproducts Pvt. Ltd.",
         "price": "1,049.30",
         "Fprice": " 1,499.00"
      },
      {
         "id": 102,
         "url": "https://www.netmeds.com/images/product-v1/150x150/821307/kapiva_wheat_grass_juice_1_ltr_0_2.jpg",
         "off": "14% OFF",
         "title": "Kapiva Wheat Grass Juice 1 ltr",
         "mkt": "Mkt: Adret Retail Pvt Ltd, (Kapiva)",
         "price": "429.14",
         "Fprice": " 499.00"
      },
      {
         "id": 103,
         "url": "https://www.netmeds.com/images/product-v1/150x150/814310/himalaya_wellness_ashvagandha_tablet_60_s_0.jpg",
         "off": "14% OFF",
         "title": "Himalaya Wellness Ashvagandha Tablet 60's",
         "mkt": "Mkt: The Himalaya Drug Company",
         "price": "200.00",
         "Fprice": " 160.00"
      },
      {
         "id": 104,
         "url": "https://www.netmeds.com/images/product-v1/150x150/15921/dabur_shilajit_gold_capsule_10s_0_1.jpg",
         "off": "10% OFF",
         "title": "Dabur Shilajit Gold Capsule 10's",
         "mkt": "Mkt: Dabur India Ltd",
         "price": "229.00",
         "Fprice": "255.00"
      },
      {
         "id": 105,
         "url": "https://www.netmeds.com/images/product-v1/150x150/15919/dabur_shilajit_capsule_100_s_0.jpg",
         "off": "18% OFF",
         "title": "Dabur Shilajit Capsule 100's",
         "mkt": "Mkt: Dabur India Ltd",
         "price": "410.00",
         "Fprice": "500.00"
      },
      {
         "id": 106,
         "url": "https://www.netmeds.com/images/product-v1/150x150/15912/dabur_honitus_herbal_cough_remedy_syrup_100_ml_0.jpg",
         "off": "1% OFF",
         "title": "Dabur Honitus Herbal Cough Remedy Syrup 100 ml",
         "mkt": "Mkt: Dabur India Ltd",
         "price": "103.00",
         "Fprice": "105.00"
      },
      {
         "id": 107,
         "url": "https://www.netmeds.com/images/product-v1/150x150/919948/dr_vaidyas_herbo_24_turbo_male_power_oil_pack_of_2_x_25_ml_0_1.jpg",
         "off": "33% OFF",
         "title": "Dr.Vaidya's Herbo 24 Turbo Male Power Oil (Pack of 2 x 25 ml)",
         "mkt": "Mkt: Herbolab India Pvt Ltd",
         "price": "268.00",
         "Fprice": "400.00"
      },
      {
         "id": 108,
         "url": "https://www.netmeds.com/images/product-v1/150x150/919949/dr_vaidyas_herbo_24_turbo_plus_capsule_30s_0_0.jpg",
         "off": "40% OFF",
         "title": "Dr.Vaidya's Herbo 24 Turbo Plus Capsule 30's",
         "mkt": "Mkt: Herbolab India Pvt Ltd",
         "price": "450.00",
         "Fprice": "750.00"
      },
      {
         "id": 109,
         "url": "https://www.netmeds.com/images/product-v1/150x150/363656/pankajakasthuri_breathe_easy_granules_400_gm_0.jpg",
         "off": "18% OFF",
         "title": "Pankajakasthuri Breathe Easy Granules 400 gm",
         "mkt": "Mkt:kasthuri Herbals India Pvt Ltd",
         "price": "270.00",
         "Fprice": "330.00"
      },
      {
         "id": 110,
         "url": "https://www.netmeds.com/images/product-v1/150x150/850750/sbl_cantharis_gel_25_gm_0.jpg",
         "off": "10% OFF",
         "title": "SBL Cantharis Gel 25 gm",
         "mkt": " Mkt: SBL Pvt. Ltd.",
         "price": "54.00",
         "Fprice": "60.00"
      },
      {
         "id": 111,
         "url": "https://www.netmeds.com/images/product-v1/150x150/406037/patanjali_special_chyawanprash_1_kg_0.jpg",
         "off": "15% OFF",
         "title": "Patanjali Special Chyawanprash 1 kg",
         "mkt": " Mkt: Patanjali Ayurved Ltd",
         "price": "340.00",
         "Fprice": "400.00"
      },
      {
         "id": 112,
         "url": "https://www.netmeds.com/images/product-v1/150x150/840552/dabur_honey_1_kg_0_2.jpg",
         "off": "9% OFF",
         "title": "Dabur Honey 1 kg",
         "mkt": " Mkt: Dabur India Ltd",
         "price": "432.25",
         "Fprice": "475.00"
      },
      {
         "id": 113,
         "url": "https://www.netmeds.com/images/product-v1/150x150/991524/dabur_honitus_herbal_cough_remedy_syrup_200_ml_0_0.jpg",
         "off": "10% OFF",
         "title": "Dabur Honitus Adulsa Cough Syrup 100 ml",
         "mkt": "Mkt: Dabur India Ltd",
         "price": "135.00",
         "Fprice": "150.00"
      },
      {
         "id": 114,
         "url": "https://www.netmeds.com/images/product-v1/150x150/901360/dabur_hajmola_imli_digestive_tablets_160s_0_0.jpg",
         "off": "5% OFF",
         "title": "Dabur Hajmola Imli Digestive Tablets 160's",
         "mkt": "Mkt: Dabur India Ltd",
         "price": "152.00",
         "Fprice": "160.00"
      },
      {
         "id": 115,
         "url": "https://www.netmeds.com/images/product-v1/150x150/15865/dabur_new_rheumatil_gel_30_gm_0.jpg",
         "off": "5% OFF",
         "title": "Dabur Red Toothpaste 500 gm (2x200gm + 1x100gm)",
         "mkt": "Mkt: Dabur India Ltd",
         "price": "183.00",
         "Fprice": "235.00"
      },
      {
         "id": 116,
         "url": "https://www.netmeds.com/images/product-v1/150x150/357753/d_protin_chocolate_powder_500_gm_0.jpg",
         "off": "18% OFF",
         "title": "D Protin Chocolate Powder 500 gm",
         "mkt": " Mkt: British Biologicals",
         "price": "473.00",
         "Fprice": "578.00"
      },
      {
         "id": 117,
         "url": "https://www.netmeds.com/images/product-v1/150x150/902372/ensure_diabetes_care_powder_vanilla_flavour_1_kg_refill_pack_0_0.jpg",
         "off": "5% OFF",
         "title": "Ensure Diabetes Care Powder - Vanilla Flavour 1 kg (Refill Pack)",
         "mkt": "Mkt: Abbott Healthcare Pvt Ltd",
         "price": "1477.25",
         "Fprice": "1555.00"
      },
      {
         "id": 118,
         "url": "https://www.netmeds.com/images/product-v1/150x150/101945/d_protin_chocolate_powder_200_gm_0_1.jpg",
         "off": "15% OFF",
         "title": "D Protin Chocolate Powder 200 gm",
         "mkt": "Mkt: British Biologicals",
         "price": "221.00",
         "Fprice": "260.00"
      },
      {
         "id": 119,
         "url": "https://www.netmeds.com/images/product-v1/150x150/858567/inlife_triphala_extract_capsules_60_s_0.jpg",
         "off": "47% OFF",
         "title": "INLIFE Triphala Extract Capsules 60's",
         "mkt": " Mkt: Inlife Pharma Private Limited",
         "price": "243.27.30",
         "Fprice": "₹ 459.00"
      },
      {
         "id": 120,
         "url": "https://www.netmeds.com/images/product-v1/150x150/815204/healthvit_ginkgo_biloba_180_mg_capsules_60_s_0.jpg",
         "off": "14% OFF",
         "title": "HealthVit Ginkgo Biloba 180 mg Capsules 60's",
         "mkt": "Mkt: West Pharmaceuticals Works Ltd",
         "price": "800.00",
         "Fprice": "₹ 1000.00"
      },
      {
         "id": 121,
         "url": "https://www.netmeds.com/images/product-v1/150x150/858568/inlife_guggul_extract_capsules_60_s_0.jpg",
         "off": "34% OFF",
         "title": "INLIFE Guggul Extract Capsules 180mg 60's",
         "mkt": "Mkt: Herbs Nutriproducts Pvt. Ltd.",
         "price": "329.34",
         "Fprice": "₹ 499.00"
      },
      {
         "id": 122,
         "url": "https://www.netmeds.com/images/product-v1/150x150/858539/inlife_diastan_plus_diabetic_care_powder_300_gm_78257_0_1.jpg",
         "off": "50% OFF",
         "title": "INLIFE Diastan Plus Diabetic Care Powder 300 gm",
         "mkt": " Mkt: Inlife Pharma Private Limited",
         "price": "450.00",
         "Fprice": "₹ 900.00"
      },
      {
         "id": 123,
         "url": "https://www.netmeds.com/images/product-v1/150x150/408327/one_touch_verio_flex_blood_glucose_monitoring_system_10_test_strips_0_4.jpg",
         "off": "50% OFF",
         "title": "OneTouch Verio Flex Blood Glucose Monitoring System",
         "mkt": "Mkt: Lifescan Medical Device India Pvt Ltd",
         "price": "1491.00",
         "Fprice": "₹ 1,750.00"
      },
      {
         "id": 124,
         "url": "https://www.netmeds.com/images/product-v1/150x150/14604/nestle_resource_diabetic_powder_vanilla_flavour_400_gm_pet_jar_0_1.jpg",
         "off": "50% OFF",
         "title": "Nestle Resource Diabetic Powder - 400 gm ",
         "mkt": "Mkt: Nestle India Ltd",
         "price": "759.05",
         "Fprice": "₹ 799.00"
      },
      {
         "id": 125,
         "url": "https://www.netmeds.com/images/product-v1/150x150/828508/so_sweet_100_natural_sugarfree_sweetener_erythritol_powder_1000_gm_0_2.jpg",
         "off": "25% OFF",
         "title": "So Sweet 100% Natural Sugarfree  Erythritol Powder 1000 gm",
         "mkt": "Mkt: Herboveda India",
         "price": "675.00",
         "Fprice": "₹ 900.00"
      },
      {
         "id": 126,
         "url": "https://www.netmeds.com/images/product-v1/150x150/901253/onetouch_delica_plus_lancets_pack_of_25s_0_4.jpg",
         "off": "5% OFF",
         "title": "Onetouch Select Plus Test Strips 50's",
         "mkt": "Mkt: Herboveda India",
         "price": "152.00",
         "Fprice": "₹ 160.00"
      },
      {
         "id": 127,
         "url": "https://www.netmeds.com/images/product-v1/150x150/407923/revital_h_woman_tablet_30_s_0.jpg",
         "off": "15% OFF",
         "title": "Mkt: Sun Pharmaceutical Industries Ltd",
         "mkt": "Mkt: Herboveda India",
         "price": "293.25",
         "Fprice": "₹ 345.00"
      },
      {
         "id": 128,
         "url": "https://www.netmeds.com/images/product-v1/150x150/408222/revital_h_woman_tablet_10_s_0.jpg",
         "off": "15% OFF",
         "title": "Revital H Woman Tablet 10'S",
         "mkt": " Mkt: Sun Pharmaceutical Industries Ltd",
         "price": "102.00",
         "Fprice": "₹ 120.00"
      },
      {
         "id": 129,
         "url": "https://www.netmeds.com/images/product-v1/150x150/958677/shake_handz_e_alcohol_hand_rub_with_flip_cap_500_ml_0_1.jpg",
         "off": "60% OFF",
         "title": "Shake HandZ-E Alcohol Hand Rub With Flip Cap 500 ml",
         "mkt": "Mkt: Herboveda India",
         "price": "100.00",
         "Fprice": "₹ 250.00"
      },
      {
         "id": 130,
         "url": "https://www.netmeds.com/images/product-v1/150x150/958409/status_n95_face_mask_white_pack_of_20_0_1.jpg",
         "off": "80% OFF",
         "title": "Status N95 Face Mask - White (Pack of 20)",
         "mkt": "Mkt: Chinar Forge Ltd.",
         "price": "200.00",
         "Fprice": "₹ 980.00"
      }
   ]

   return (
      <Box bg={"#f3f6fb"}>
         <Box></Box>
         <Flex marginTop={"20px"} marginLeft={"180px"} width={"70%"} justify={"center"} gap={"28px"}>
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

               {data?.filter((el) => el.price <= 399 ? el : null).splice(0, 5).map((el) => (
                <Link key={el.id} to={`/wellness/${el.id}`}> <Box
                     rounded={10}
                     boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}
                     p={4}
                     width={260}
                     height={340}
                     bg={"white"}
                  >
                     <img
                        src={el.url}
                        alt=""
                     ></img>
                     <Text fontSize={13} fontWeight={"bold"} pt={3} pl={1}>
                        {el.title}
                     </Text>
                     <Text color={"#6F7284"} fontSize={13}  >{el.mkt}</Text>
                     <Text fontWeight={"bold"} color={"#6F7284"} fontSize={14}  >Best Price* <Text as={"span"} fontWeight={"bold"} fontSize={"16px"} color={"#EF4281"}>Rs.{el.price}</Text></Text>
                     <Button marginTop={"15px"} backgroundColor={"#24AEB1"} colorScheme={"twitter"}>ADD TO CART</Button>
                  </Box></Link> 
               ))}
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
               {data?.filter((el) => el.off <= "65%" ? el : null).splice(0, 5).map((el) => (
                  <Link key={el.id} to={`/wellness/${el.id}`} > <Box

                     rounded={10}
                     boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}
                     p={4}
                     width={260}
                     height={340}
                     bg={"white"}
                  >
                     <img
                        src={el.url}
                        alt=""
                     ></img>
                     <Text fontSize={13} fontWeight={"bold"} pt={3} pl={1}>
                        {el.title}
                     </Text>
                     <Text color={"#6F7284"} fontSize={13}  >{el.mkt}</Text>
                     <Text fontWeight={"bold"} color={"#6F7284"} fontSize={14}  >Best Price* <Text as={"span"} fontWeight={"bold"} fontSize={"16px"} color={"#EF4281"}>Rs.{el.price}</Text></Text>
                     <Button marginTop={"15px"} backgroundColor={"#24AEB1"} colorScheme={"twitter"}>ADD TO CART</Button>
                  </Box></Link>
               ))}
            </Flex>
         </Box>

         {/* <Box margin={"auto"} border={"2px solid red"} bg={"#F3F7FB"} gap={10} p={4}>
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
         </Box> */}


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
                  UPTO 200
               </Text>
            </Box>
            <Flex marginTop={"20px"} justifyContent={"center"} gap={"20px"}>
               {data?.filter((el) => el.price <= 200 ? el : null).splice(5, 10).map((el) => (
                  <Link key={el.id} to={`/wellness/${el.id}`} > <Box

                     rounded={10}
                     boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}
                     p={4}
                     width={260}
                     height={340}
                     bg={"white"}
                  >
                     <img
                        src={el.url}
                        alt=""
                     ></img>
                     <Text fontSize={13} fontWeight={"bold"} pt={3} pl={1}>
                        {el.title}
                     </Text>
                     <Text color={"#6F7284"} fontSize={13}  >{el.mkt}</Text>
                     <Text fontWeight={"bold"} color={"#6F7284"} fontSize={14}  >Best Price* <Text as={"span"} fontWeight={"bold"} fontSize={"16px"} color={"#EF4281"}>Rs.{el.price}</Text></Text>
                     <Button marginTop={"15px"} backgroundColor={"#24AEB1"} colorScheme={"twitter"}>ADD TO CART</Button>
                  </Box></Link>
               ))}
            </Flex>
         </Box>
         {/* <Box margin={"auto"} border={"2px solid red"} bg={"#F3F7FB"} gap={10} p={4}>
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
         </Box> */}



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
                  ABOVE 600
               </Text>
            </Box>
            <Flex marginTop={"20px"} justifyContent={"center"} gap={"20px"}>
               {data?.filter((el) => el.price >= 600 ? el : null).splice(0, 5).map((el) => (
                  <Link key={el.id} to={`/wellness/${el.id}`} > <Box

                     rounded={10}
                     boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}
                     p={4}
                     width={260}
                     height={340}
                     bg={"white"}
                  >
                     <img
                        src={el.url}
                        alt=""
                     ></img>
                     <Text fontSize={13} fontWeight={"bold"} pt={3} pl={1}>
                        {el.title}
                     </Text>
                     <Text color={"#6F7284"} fontSize={13}  >{el.mkt}</Text>
                     <Text fontWeight={"bold"} color={"#6F7284"} fontSize={14}  >Best Price* <Text as={"span"} fontWeight={"bold"} fontSize={"16px"} color={"#EF4281"}>Rs.{el.price}</Text></Text>
                     <Button marginTop={"15px"} backgroundColor={"#24AEB1"} colorScheme={"twitter"}>ADD TO CART</Button>
                  </Box></Link>
               ))}
            </Flex>
         </Box>
         {/* <Box margin={"auto"} border={"2px solid red"} bg={"#F3F7FB"} gap={10} p={4}>
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
         </Box> */}


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
                     <Text marginLeft={"-5px"} fontSize={18} fontWeight={500} pt={14} pl={38}>
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
                     <Text marginLeft={"-5px"} fontSize={18} fontWeight={500} pt={14} pl={29}>
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
                     <Text marginLeft={"-5px"} fontSize={18} fontWeight={500} pt={14} pl={27}>
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
                     <Text marginLeft={"-5px"} fontSize={18} fontWeight={500} pt={14} pl={27}>
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
                     <Text marginLeft={"-5px"} fontSize={18} fontWeight={500} pt={14} >
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
