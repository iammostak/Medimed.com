import { ChevronDownIcon } from '@chakra-ui/icons';
import { Box, Button, Center, Flex, Grid, GridItem, Heading, HStack, Menu, MenuButton, MenuItem, MenuList, Select, Spacer, Text, textDecoration } from '@chakra-ui/react';
import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'


function CartCard(data, deleteCartItem) {


    return (
        <Box borderBottom="1px solid gray">
            {data.data !== undefined && <Grid templateColumns='repeat(7, 1fr)'>
                <GridItem p={5} colSpan={1}>
                    <Center>
                        <img width="50px" src={data.data.url} alt="" />
                    </Center>
                </GridItem>
                <GridItem padding={5} colSpan={3}>
                    <Text fontSize={18}>{data.data.title}</Text>
                    <Text fontSize="xs" as="i">{data.data.mkt}</Text>
                    <Text h={10} marginTop={5} color="#f50271" fontSize="lg">RS {data.data.price} <span style={{ color: "gray", fontSize: "14px", fontWeight: "400", textDecoration: "line-through" }}>{data.data.Fprice}</span></Text>


                    <Text fontSize="sm" color="gray">Delivery between Jul 23 6PM-Jul 24 10PM</Text>
                </GridItem>
                <GridItem padding={5} colSpan={3}>
                    <Flex gap={18} h="full" alignItems="flex-end">
                        <Button 
                        // onClick={() => data.deleteCartItem(data.data.id)}
                        >Remove</Button>

                        <Flex>
                            <Button 
                            // disabled={data.data.qty === 1} onClick={() => DecreaseCartQty(data.data.id)}
                             fontSize="25px">-</Button>

                            <Center fontSize={20} fontWeight="bold" w={10}>{data.data.qty}</Center>

                            <Button 
                            // onClick={() => IncreaseCartQty(data.data.id)} 
                            fontSize="25px">+</Button>
                        </Flex>

                    </Flex>
                </GridItem>
            </Grid>}
        </Box>

    )
}

export default CartCard