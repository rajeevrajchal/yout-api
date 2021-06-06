import React, {createContext, useContext} from 'react';
import PropTypes from 'prop-types';

import UseVideo from "./data/UseVideo";
const appContext = createContext({})
const {Provider} = appContext

const UseAppData = () => {
    const videoPlaylist =UseVideo()
    return {videoPlaylist}
};

export const AppProvider = ({children}) => {
    const data = UseAppData()
    return <Provider value={data}>{children}</Provider>
}
AppProvider.propTypes = {
    children: PropTypes.any.isRequired,
};

export const UseApp = () => useContext(appContext);
