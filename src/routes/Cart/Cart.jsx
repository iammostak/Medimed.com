import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import CartCard from './CartCard';
import PaymentDetails from './paymentDetails/PaymentDetails';

const cartData=[
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
   }]

   const deleteCartItem=[
      {
         "id": 104,
         "url": "https://www.netmeds.com/images/product-v1/150x150/15921/dabur_shilajit_gold_capsule_10s_0_1.jpg",
         "off": "10% OFF",
         "title": "Dabur Shilajit Gold Capsule 10's",
         "mkt": "Mkt: Dabur India Ltd",
         "price": "229.00",
         "Fprice": "255.00"
         },
   ]
function Cart() {

    const TotalPrice = cartData.reduce((acc, el) => (acc + Number(el.price.split("").filter((el) => el !== ",").join("")) * el.qty), 0)

    const fPrice = TotalPrice.toFixed(2);



    const FullPrice = cartData.reduce((acc, el) => (acc + Number(el.Fprice.split("").filter((el) => el !== ",").join("")) * el.qty), 0)
    const PwithoutDis = FullPrice.toFixed(2);




    return (

        <Box display={["blok","blok","blok","flex","flex"]} gap={8} w="90%" margin="auto" marginTop={10}>


           <PaymentDetails/>
            <Box w="100%" border={'1px solid red'}>
                <Heading marginBottom={10}>Order Summary</Heading>
              <Text>PRODUCTS</Text>
               {cartData.length !== 0 ? <Box>
                    {cartData.map((item) =><CartCard key={item.id} data={item} deleteCartItem={deleteCartItem} />)}
               </Box> : null}
            </Box>
        </Box>
    )
}

export default Cart