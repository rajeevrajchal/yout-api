import React from 'react';
import {useParams}  from 'react-router-dom'
import {Box, VStack} from "@chakra-ui/react";

const Watch = () => {
    const {videoID} = useParams()
    return (
        <VStack>
            <Box>
                <iframe width="1000px" height="500" src={`https://www.youtube.com/embed/${videoID}`} frameBorder="0"
                        allow="autoplay; encrypted-media" allowFullScreen></iframe>
            </Box>
        </VStack>
    );
};

export default Watch;
