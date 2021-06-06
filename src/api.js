import axios from 'axios';
import {toast} from 'react-toast'

export const BASE_URL = 'https://www.googleapis.com/youtube/v3/';
export const callApi = async (apiConst) => {
    const {method, url, params,data, } = apiConst
    const config = {
        method,
        url: BASE_URL + url,
        params: {
            key: process.env.REACT_APP_YOUTUBE_KEY,
            part:'snippet',
            maxResults: 20,
            ...params
        },
        data,
    };
    return axios(config)
        .then((response) => response)
        .catch((error) => {
            // eslint-disable-next-line no-console
            console.log({error});
            toast.error('!!Oops Something went wrong');
        });
};
