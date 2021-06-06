import React from 'react';
import {Box, Grid, Heading, Text} from "@chakra-ui/react";
import background from "../../../assets/svgs/bg-pattern-intro.svg";
import {useColorMode} from "@chakra-ui/color-mode";
import NavBar from "./NavBar";

const AppHeader = () => {
    const {colorMode} = useColorMode()
    const isDark = colorMode === 'dark'
    return (
        <Box>
            <Box
                background={isDark ? 'none' : `url(${background}),linear-gradient(120deg, hsl(13, 100%, 77%), hsl(353, 100%, 54%))`}
                backgroundPosition="center"
                backgroundSize={'cover'}
                backgroundRepeat="no-repeat"
                minH={'77vh'}
                brightness={0.3}
            >
                <NavBar/>
                <Grid placeContent={'center'} h={'50vh'} gap={10} mx={5}>
                    <Heading as={"h3"} textAlign='center' alignSelf={'center'}>
                        Your Second Youtube App
                    </Heading>
                    <Text as={"p"}  textAlign={'justify'} maxW={'500px'} fontSize={'lg'} alignSelf={'center'}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium consequatur nam omnis
                        perferendis quibusdam, quis sequi sint. A, aliquam, quaerat.
                    </Text>
                </Grid>
            </Box>
        </Box>
    );
};

export default AppHeader;
