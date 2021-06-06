import React from 'react';
import CRoute from "../../route";
import {landingRoute} from "./landingRoute";
import AppHeader from "./components/AppHeader";
import {useLocation} from 'react-router-dom'
import NavBar from "./components/NavBar";

const Landing = () => {
    const location = useLocation()
    const {pathname} = location
    return (
        <>
            {
                pathname === '/' ? <AppHeader/> : <NavBar/>
            }
            <CRoute routeItem={landingRoute}/>
        </>

    );
};

export default Landing;
