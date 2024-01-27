import React, { useState } from 'react'
import { CompanyName, ContactUs, HamburgerWrap, NavBar, NavLinks, NavLinksWrap, NavLogo, NavLogoWrap, NavWrap, ResponsiveNav } from '../../styles/Nav'
import Logo from '../../assets/logo.png'
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";

const Nav = () => {

    const [nav, setNav] = useState(true)

    !nav?document.body.style.overflow="hidden":document.body.style.overflow="auto";

    const handleNav = () => {
        setNav(!nav)
    }
  return (
    <NavWrap>
        <NavBar>
            <NavLogoWrap>
                <NavLogo src = {Logo} />
                <CompanyName>Shering</CompanyName>
            </NavLogoWrap>
            <NavLinksWrap>
                <NavLinks about href = "#About">About Us</NavLinks>
                <NavLinks href = "#Programs">Programs</NavLinks>
                <NavLinks href = "#">Download</NavLinks>
                <ContactUs href = "#Contact">Contact Us</ContactUs>
            </NavLinksWrap>
            <HamburgerWrap onClick = {handleNav}>
                    {nav ? 
                    <GiHamburgerMenu /> : <RxCross2 />}
            </HamburgerWrap>
            {!nav && (<ResponsiveNav>
                <NavLinks about href = "#">About Us</NavLinks>
                <NavLinks href = "#">Programs</NavLinks>
                <NavLinks href = "#">Download</NavLinks>
                <ContactUs href = "#">Contact Us</ContactUs>
            </ResponsiveNav>)}
        </NavBar>
    </NavWrap>
  )
}

export default Nav