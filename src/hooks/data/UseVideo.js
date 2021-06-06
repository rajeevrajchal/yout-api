import  {useState} from 'react';
import {callApi} from "../../api";
import {toast} from "react-toast";
import moment from "moment";
import {map} from'lodash'

const UseVideo = () => {
    const [playList, setPlayList] = useState([]);
    const getPopularPlayList = async () => {
        const res = await callApi({
            method:'GET',
            url:'videos',
            params: {
                chart: 'mostPopular',
                maxResults: 5,
            }
        })
        if(res && res.status){
            const objs = []
            map(res.data.items, (item) => {
                objs.push(
                    {
                        video_id: item.id,
                        channelId: item.snippet.channelId,
                        channelTitle: item.snippet.channelTitle,
                        publishedAt:item.snippet.publishedAt,
                        description: item.snippet.description,
                        pretty_date: moment(item.snippet.publishedAt).format('lll'),
                        title: item.snippet.title,
                        thumbnails_default: item.snippet.thumbnails.default.url,
                        thumbnails_medium: item.snippet.thumbnails.medium.url,
                        tags: item.snippet.tags
                    }
                )
            })
            setPlayList(objs)
        }else {
            toast.error('Failed to fetch playlist!');
        }
    }
    return {
        playList ,
        getPopularPlayList
    }
};

export default UseVideo;
