import React from "react";
import { NavLink } from 'react-router-dom';
import Web from "../images/Cosmic1.jpg";
const Home = () => {
    return (
        <>
       <Common
        name="Grow Your Business with "
       imgsrc={Web}
       visite="/Service"
       btname=" Get Started  "/>
       <NavLink/>
        </>
    );
};
export default Home; 