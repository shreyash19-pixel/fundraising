import React, { useState, useEffect } from 'react'
import { CompanyName, ContactUs, HamburgerWrap, NavBar, NavLinks, NavLinksWrap, NavLogo, NavLogoWrap, NavWrap, ResponsiveNav } from '../../styles/Nav'
import Logo from '../../assets/logo.png'
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";

const Nav = () => {

    const [nav, setNav] = useState(true)
    const [buttonClicked, setButtonClicked] = useState(false);

    !nav?document.body.style.overflow="hidden":document.body.style.overflow="auto";

    const handleNav = () => {
        setNav(!nav)
    }

    const handleOverflow = () => {
        setNav(true)
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
                <NavLinks href = "https://play.google.com/store/apps/details?id=com.shopwithscrip.app&hl=en&gl=US"  target = "_blank">Download</NavLinks>
                <ContactUs href = "#Contact">Contact Us</ContactUs>
            </NavLinksWrap>
            <HamburgerWrap onClick = {handleNav}>
                    {nav ? 
                    <GiHamburgerMenu /> : <RxCross2 />}
            </HamburgerWrap>
            {!nav && (<ResponsiveNav>
                <NavLinks about href = "#About" onClick = {handleOverflow}>About Us</NavLinks>
                <NavLinks href = "#Programs" onClick = {handleOverflow}>Programs</NavLinks>
                <NavLinks href = "https://play.google.com/store/apps/details?id=com.shopwithscrip.app&hl=en&gl=US"  target = "_blank">Download</NavLinks>
                <ContactUs href = "#Contact" onClick = {handleOverflow}>Contact Us</ContactUs>
            </ResponsiveNav>)}
        </NavBar>
    </NavWrap>
  )
}

export default Nav