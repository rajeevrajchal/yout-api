import React from 'react';
import {Flex, Box, Image, Heading, Text, HStack, WrapItem, Center, Grid} from "@chakra-ui/react";
import moment from "moment";
import {map} from "lodash";

const Popular = () => {
    return (
        <Box>
            <Box>
                <Heading as="h3" size="md" fontWeight={'bold'}>Popular Movies</Heading>
            </Box>
            <Flex mt={5} maxW={'100%'} overflowX={'scroll'}>
                {
                    map([1, 2, 3, 4, 5, 6], (item) => (
                        <Box
                            minW={{base: '100%', md: "350px"}}
                            key={item}
                            experimental_spaceX={2}
                            _notFirst={{
                                marginLeft: "2%",
                            }}
                        >
                            <Image
                                borderRadius="5px"
                                src="https://cdn.pixabay.com/photo/2021/05/27/14/40/anemone-6288318__480.jpg"
                                alt="Segun Adebayo"/>
                            <Box p='15px'>
                                <Heading as="h4" size="sm" fontWeight={'bold'}>I'm a Chakra</Heading>
                                <Text fontSize="sm">Love Chakra</Text>
                                <Text fontSize="sm">{moment().format('lll')}</Text>
                            </Box>
                        </Box>
                    ))
                }
            </Flex>
            {/*<Grid mt={5} templateColumns={{base:"repeat(1, 1fr)", md:"repeat(4, 1fr)"}} gap={5}>*/}
            {/*    {*/}
            {/*        map([1, 2, 3, 4, 5, 6, 7, 8, 9], (item) => (*/}
            {/*            <Box w={{base: "100%"}} key={item}>*/}
            {/*                <Image*/}
            {/*                    borderRadius="5px"*/}
            {/*                    src="https://cdn.pixabay.com/photo/2021/05/27/14/40/anemone-6288318__480.jpg"*/}
            {/*                    alt="Segun Adebayo"/>*/}
            {/*                <Box p='15px'>*/}
            {/*                    <Heading as="h4" size="sm" fontWeight={'bold'}>I'm a Chakra</Heading>*/}
            {/*                    <Text fontSize="sm">Love Chakra</Text>*/}
            {/*                    <Text fontSize="sm">{moment().format('lll')}</Text>*/}
            {/*                </Box>*/}
            {/*            </Box>*/}
            {/*        ))*/}
            {/*    }*/}
            {/*</Grid>*/}
        </Box>
    );
};

export default Popular;
