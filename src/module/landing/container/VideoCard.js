import React from 'react';
import {Box, Heading, Image, Text} from "@chakra-ui/react";
import {useHistory} from "react-router-dom";

const VideoCard = (props) => {
    const {item} = props
    const history = useHistory()
    return (
        <Box
            onClick={()=>history.push(`/watch/${item.video_id}`)}
            key={item.video_id}
            cursor='pointer'
            rounded="10px"
            borderColor="gray.300"
            boxShadow="md"
            bg="lavender"
            color="#2d383c"
            fontSize="2rem"
            textAlign="center"
            w="300px"
            ml={'2%'}
            mb={'2%'}
            h="300px">
            <Image
                alignSelf={'center'}
                m={0}
                p={0}
                w='100%'
                h='50%'
                borderRadius="9px 9px 0 0"
                objectFit="cover"
                src={item.thumbnails_medium ? item.thumbnails_medium : 'https://cdn.pixabay.com/photo/2018/08/24/18/28/background-3628553__480.jpg'}
                alt={item.title}/>
            <Box p={5}>
                <Heading as="h6" size="md" textAlign={'left'}>
                    {item.title && item.title}
                </Heading>
                <Text fontSize="sm" color='gray.500' textAlign={'justify'} mt={2} noOfLines={2}>
                    {item.description && item.title}
                </Text>
                <Text fontSize="xs" color='gray.500' textAlign={'justify'}
                      mt={3}>{item.pretty_date && item.pretty_date}</Text>
            </Box>
        </Box>
    );
};

export default VideoCard;
