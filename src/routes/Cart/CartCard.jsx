import { ChevronDownIcon } from '@chakra-ui/icons';
import { Box, Button, Center, Flex, Grid, GridItem, Heading, HStack, Menu, MenuButton, MenuItem, MenuList, Select, Spacer, Text, textDecoration } from '@chakra-ui/react';
import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'


function CartCard(data) {


    return (
        <Box borderBottom="1px solid gray">
            {data.data !== undefined && <Grid templateColumns='repeat(7, 1fr)'>
                <GridItem  colSpan={1}>
                    <Center>
                        <img width="100%" src={data.data.url} alt="" />
                    </Center>
                </GridItem>
                <GridItem padding={5} colSpan={3} border="1px solid red" >
                    <Text fontSize={[10,10,15,15,18]}>{data.data.title}</Text>
                    <Text fontSize="xs" as="i">{data.data.mkt}</Text>
                    <Text h={10} marginTop={5} color="#f50271" fontSize={[10,10,15,15,18]}>RS {data.data.price} <span style={{ color: "gray", fontSize: "14px", fontWeight: "400", textDecoration: "line-through" }}>{data.data.Fprice}</span></Text>


                    <Text fontSize={[10,10,15,15,18]} color="gray">Delivery between Jul 23 6PM-Jul 24 10PM</Text>
                </GridItem>
                <GridItem padding={2} colSpan={3}>
                    <Flex gap={5} h="full" alignItems="flex-end">
                       
                    <Box w="30%" >
                            <Button fontSize={[10,10,15,15,18]}
                        // onClick={() => data.deleteCartItem(data.data.id)}
                        >Remove</Button>
                            </Box>
                        <Flex  border={"1px solid black"}w="100%"  >
                          
                            <Flex w="70%" >

                            <Button fontSize={[10,10,15,15,18]} 
                            // disabled={data.data.qty === 1} onClick={() => DecreaseCartQty(data.data.id)}
                            >-</Button>

                            <Center fontSize={20} fontWeight="bold" w={10}>{data.data.qty}</Center>

                            <Button fontSize={[10,10,15,15,18]}
                            // onClick={() => IncreaseCartQty(data.data.id)} 
                            >+</Button>
                    
                            </Flex>
                        </Flex>

                    </Flex>
                </GridItem>
            </Grid>}
        </Box>

    )
}

export default CartCard