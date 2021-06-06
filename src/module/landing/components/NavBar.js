import React from 'react';
import {Flex, Heading, IconButton, Spacer} from "@chakra-ui/react";
import {FaMoon, FaSun} from "react-icons/fa";
import {useColorMode} from "@chakra-ui/color-mode";

const NavBar = () => {
    const {colorMode, toggleColorMode} = useColorMode()
    const isDark = colorMode === 'dark'
    return (
        <Flex py={5} px={10} boxShadow={'0px 2px 16px -2px rgba(0,0,0,0.75)'}>
            <Heading fontWeight="semibold">
                Youtube Api
            </Heading>
            <Spacer/>
            <IconButton
                icon={isDark ? <FaSun/> : <FaMoon/>}
                isRound={true}
                onClick={toggleColorMode}
                aria-label={'light mode'}/>
        </Flex>
    );
};

export default NavBar;
