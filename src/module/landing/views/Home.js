import React, {useEffect} from 'react';
import {Grid} from "@chakra-ui/react";
import {map} from 'lodash'
import {UseApp} from "../../../hooks/UseAppData";
import VideoCard from "../container/VideoCard";


const Home = () => {
    const {videoPlaylist} = UseApp()
    const {
        playList,
        getPopularPlayList
    } = videoPlaylist
    useEffect(() => {
        getPopularPlayList()
    }, [getPopularPlayList])
    return (
        <Grid templateColumns="repeat(4, min-content)" gap={6} p={10}>
            {
                playList.length ? map(playList, item => (
                    <VideoCard item={item}/>
                )) : <p>No Content</p>
            }
        </Grid>
    );
};

export default Home;
