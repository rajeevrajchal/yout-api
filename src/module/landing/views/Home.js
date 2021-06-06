import React from 'react';
import Popular from "../components/Popular";
import {Box} from "@chakra-ui/react";


const Home = () => {
    return (
        <Box
             p={[5, 10]}
             mx={[0, 20]}>
            <Popular/>
        </Box>
    );
};

export default Home;
