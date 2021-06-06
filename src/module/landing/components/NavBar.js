import React, {useState} from 'react';
import {Box, Flex, Grid, Link, Text} from "@chakra-ui/react";
import {useColorMode} from "@chakra-ui/color-mode";
import {HamburgerIcon, CloseIcon, MoonIcon, SunIcon, SearchIcon} from "@chakra-ui/icons";
import {useHistory} from "react-router-dom";

const NavBar = () => {
    const {colorMode, toggleColorMode} = useColorMode()
    const isDark = colorMode === 'dark'
    const [mobileNav, setMobileNav] = useState(false)
    const history = useHistory()
    return (
        <Grid
            templateColumns="1fr min-content"
            alignContent='center'
            alignItems='center'
            p={[5, 10]}
            mx={[0, 20]}
        >
            <Flex alignItems={'center'} alignContent={'center'}>
                <Box
                    onClick={() => history.push('/')}
                    cursor={'pointer'}
                >
                    <Text as='h2' fontSize={30} fontWeight='bold'>YoutubeApi</Text>
                </Box>
                <Box
                    flex={1}
                    display={{base: mobileNav ? "grid" : "none", md: "flex"}}
                    placeContent={{base: 'center', md: "flex-start"}}
                    position={{base: "absolute", md: "relative"}}
                    background={{base: "white", md: 'none'}}
                    h={{base: '200px', md: '0px'}}
                    w={{base: '90%', md: '100%'}}
                    top={{base: "80px", md: "0px"}}
                    left={{base: "absolute", md: "relative"}}
                    textAlign={{base: "left", md: "justify"}}
                    boxShadow={{base: "bg-dark", md: "none"}}
                    alignItems={'center'}
                    alignContent={'center'}>
                    <Link
                        color={{base: "black", md: isDark ? "white" : 'black'}}
                        display={{base: "block"}}
                        ml={10}
                        fontSize={18}
                        fontWeight={'bold'}
                        _hover={{
                            color: "#FEB2B2"
                        }}>Popular</Link>
                    <Link
                        ml={10}
                        color={{base: "black", md: isDark ? "white" : 'black'}}
                        display={{base: "block"}}
                        fontSize={18}
                        fontWeight={'bold'}
                        _hover={{
                            color: "#FEB2B2"
                        }}>Tech</Link>
                    <Link
                        ml={10}
                        color={{base: "black", md: isDark ? "white" : 'black'}}
                        fontSize={18}
                        fontWeight={'bold'}
                        _hover={{
                            color: "#FEB2B2"
                        }}>Random</Link>
                </Box>
            </Flex>
            <Flex
                flexDir={{base:'row', md:"row-reverse"}}
                justifyContent='flex-end'
                alignContent={'center'}
                alignItems={'center'}>
                {
                    isDark ? <SunIcon
                            ml={5}
                            cursor={'pointer'}
                            display={{base: 'block', md: 'block'}}
                            onClick={() => toggleColorMode()}/>
                        : <MoonIcon cursor={'pointer'}
                                    ml={5}
                                    display={{base: 'block', md: 'block'}}
                                    onClick={() => toggleColorMode()}/>
                }
                <SearchIcon cursor={'pointer'}
                            ml={5}
                            display={{base: 'block', md: 'block'}}
                            onClick={() => toggleColorMode()}/>
                {
                    mobileNav
                        ? <CloseIcon
                            ml={5}
                            w={6} h={6}
                            display={{base: 'block', md: 'none'}}
                            onClick={() => setMobileNav(!mobileNav)}
                        />
                        : <HamburgerIcon
                            ml={5}
                            w={6} h={6}
                            display={{base: 'block', md: 'none'}}
                            onClick={() => setMobileNav(!mobileNav)}
                        />
                }
            </Flex>
        </Grid>
    );
};

export default NavBar;
