import React from "react";
import { NavLink } from 'react-router-dom';
import Web from "../images/white-background-technology-hexagon-line-600w-1142483600";
const About = () => {
    return (
        <>
       <Common
        name="Welcome to About page "
       imgsrc={Web}
       visite="/contact"
       btname=" contact now   "/>
       <NavLink/>
        </>
    );
};
export default About; 