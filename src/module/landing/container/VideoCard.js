import React from 'react';
import {Box, Heading, Image, Text} from "@chakra-ui/react";
import {useHistory} from "react-router-dom";

const VideoCard = (props) => {
    const {item} = props
    const history = useHistory()
    return (
        <Box
            minW={{base: '100%', md: "350px"}}
            key={item.video_id}
            cursor={'pointer'}
            experimental_spaceX={2}
            _notFirst={{
                marginLeft: "2%",
            }}
            onClick={() => history.push(`/watch/${item.video_id}`)}
        >
            <Image
                borderRadius="5px"
                src={item.thumbnails_medium}
                alt={item.title}/>
            <Box p='15px'>
                <Heading as="h4" size="sm" fontWeight={'bold'}>{item.title}</Heading>
                <Text fontSize="sm" mt={2}>{item.channelTitle}</Text>
                <Text fontSize="sm" mt={2}>{item.pretty_date}</Text>
            </Box>
        </Box>
    );
};


export default VideoCard;
