import React from 'react';
import NavBar from "./components/NavBar";
import CRoute from "../../route";
import {landingRoute} from "./landingRoute";


const Landing = () => {
    return (
        <>
            <NavBar/>
            <CRoute routeItem={landingRoute} />
        </>
    );
};

export default Landing;
