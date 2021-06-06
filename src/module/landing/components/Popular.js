import React, {useEffect} from 'react';
import {Flex, Box, Heading,} from "@chakra-ui/react";
import {map} from "lodash";
import VideoCard from "../container/VideoCard";
import {UseApp} from "../../../hooks/UseAppData";

const Popular = () => {
    const {videoPlaylist} = UseApp()
    const {getPopularPlayList, playList} = videoPlaylist
    const fetchPlayList = async () => {
        await getPopularPlayList()
    }
    useEffect(() => {
        fetchPlayList()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <Box>
            <Box>
                <Heading as="h3" size="md" fontWeight={'bold'}>Popular Movies</Heading>
            </Box>
            <Flex mt={5} maxW={'100%'} overflowX={'scroll'}>
                {
                    map(playList, (item) => (
                        <VideoCard key={item} item={item}/>
                    ))
                }
            </Flex>
        </Box>
    );
};

export default Popular;
