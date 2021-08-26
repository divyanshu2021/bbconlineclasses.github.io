 import React from 'react';
 import { NavLink } from 'react-router-dom';
 const Navbar = () => {
     return (
         <>

    <div className="container-fluid nav_bg" >div
        <div className='row'>
            <div className='col-10' mx-auto>
    
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <NavLink className="navbar-brand" 
    t0="/">
        Divyanshu world
    </NavLink>
    <button className="navbar-toggler" 
    type="button" 
    data-bs-toggle="collapse" 
    data-bs-target="#navbarSupportedContent" 
    aria-controls="navbarSupportedContent" 
    aria-expanded="false"
     aria-label="Toggle navigation">
      <span className="navbar-toggler-icon">

      </span>
    </button> 
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto  mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink activeclassName ='menu_active'
          className="nave-link active" 
          aria-current="page" 
          t0="/">
              Home
              </NavLink>
        </li>
        
        <li className="nav-item">
          <NavLink activeclassName="menu_active" 
          className="nav-link"
          t0="/service">
              Service
              </NavLink>
        </li>
        <li className="nav-item">
          <NavLink  activeclassName="menu_active"
           className="nav-link" 
          t0="/about">
              About
              </NavLink>
        </li>   
        <li className="nav-item">
          <NavLink active className="menu_active"
           className="nav-link" 
          t0="/contact">
              Contact
              </NavLink>
        </li> 
         
         
      </ul>
      
    </div>
  </div>
</nav>
</div>
        </div>
    </div>
         </>
     );
 };
 export default Navbar;