import React from "react";

const Navbar = () => {
    return (
        <>
            <div class="navbar__container">
                <div class="logo__container">
                    <img src="logo.png" alt="" class="logo__img"/>
                </div>
                <div class="nav__links__container">
                    <a class="links" href="#">Home</a> 
                    <a class="links" href="#About">About</a> 
                    <a class="links" href="#contact">Contact</a> 
                    <a class="links" href="#hireMe">Hire me</a> 
                    
                </div>
            </div>

        </>
    );
};

export default Navbar;