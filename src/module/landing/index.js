import React from 'react';
import CRoute from "../../route";
import {landingRoute} from "./landingRoute";
import AppHeader from "./components/AppHeader";


const Landing = () => {
    return (
        <>
            <AppHeader/>
            <CRoute routeItem={landingRoute}/>
        </>

    );
};

export default Landing;
