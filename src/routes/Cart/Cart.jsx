import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import CartCard from "./CartCard";
import PaymentDetails from "./paymentDetails/PaymentDetails";





const getCartData = async () => {
  let data = await axios.get("https://medimedcom-backend-production.up.railway.app/carts", {
    headers: { userid: "636d1da8f6cde62d954b2473" },
  });
  return data;
};

function Cart() {
  const [cartData, setCartData] = useState([])
  const TotalPrice = cartData?.reduce(
    (acc, el) =>
      acc +
      Number(
        el.productId.price

      ) *
      el.quantity,
    0
  )
  const finalePrice = TotalPrice.toFixed();
  const FullPrice = cartData.reduce(
    (acc, el) =>
      acc +
      Number(
        el.productId.Fprice

      ) *
      el.quantity,
    0
  );
  const fullMrp = FullPrice.toFixed(2);



  const handleQty = async ({ id, type }) => {

    try {

      let d = await axios.post("https://medimedcom-backend-production.up.railway.app/carts/update", {
        type: type,
        productId: id._id
      },
        {
          headers: { userid: "636d1da8f6cde62d954b2473" }
        })
      console.log(d)
    } catch (e) {
      console.log(e)
    }
    getCartData()
      .then((res) => {
        setCartData([...res.data])
        // console.log(res.data);
      })
      .catch((e) => {
        // console.log(e);
      })
    alert("success")
  }


  useEffect(() => {

    getCartData()
      .then((res) => {
        setCartData([...res.data])
        // console.log(res.data);
      })
      .catch((e) => {
        // console.log(e);
      }); console.log(TotalPrice)
  }, []);

  return (
    <Box
      display={["blok", "blok", "blok", "flex", "flex"]}
      gap={8}
      w="90%"
      margin="auto"
      marginTop={10}
    >
      {cartData && <PaymentDetails price={fullMrp} total={finalePrice} />}
      <Box w="100%" border={"1px solid red"}>
        <Heading marginBottom={10}>Order Summary</Heading>
        <Text>PRODUCTS</Text>
        {cartData.length !== 0 ? (
          <Box>
            {cartData?.map((item) => (
              <CartCard
                key={item._id}
                data={item}
                handleQty={handleQty}
              />
            ))}
          </Box>
        ) : null}
      </Box>
    </Box>
  );
}

export default Cart;
