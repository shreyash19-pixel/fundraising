import React from 'react'
import { CompanyDesc, CompanyEmail, CompanyLogo, CompanyLogoWrap, CompanyName, FooterLinks, FooterLinksContainer, FooterLinksTitle, FooterLinksTitleWrap, FooterLinksWrap, FooterWrap, LogoWrap, PersonalInfoWrap } from '../../styles/Footer'
import Logo from '../../assets/logo.png'

const Footer = () => {

    const navlinks = [
        {title : "Home", link1 : "About Us", link2 : "Programs", link3 : "Apps"},
        {title : "Resources", link1 : "Contact Us", link2 : "FAQ", link3 : "Featured"},
        {title : "Legal", link1 : "Privacy policy", link2 : "Terms & Conditions"},
    ]
  return (
    <FooterWrap id = "Contact">
        <PersonalInfoWrap>
            <CompanyLogoWrap>
                <LogoWrap>
                    <CompanyLogo src = {Logo} />
                </LogoWrap>
                <CompanyName>Shering</CompanyName>
            </CompanyLogoWrap>
            <CompanyDesc>
                Help others by using Shering, a platform that is safe, transparent, and trusted.
            </CompanyDesc>
            <CompanyEmail>
                Hello@shering.mail.com
            </CompanyEmail>
            <CompanyEmail>
                028-231-311-095
            </CompanyEmail>
        </PersonalInfoWrap>
        <FooterLinksContainer>
            {navlinks.map((link) => (
            <FooterLinksWrap>
                <FooterLinksTitleWrap>
                    <FooterLinksTitle>
                       {link.title}
                    </FooterLinksTitle>
                </FooterLinksTitleWrap>
                <FooterLinks>
                    <CompanyEmail op = {true} href = "#">{link.link1}</CompanyEmail>
                    <CompanyEmail op = {true} href = "#">{link.link2}</CompanyEmail>
                    <CompanyEmail op = {true} href = "#">{link.link3}</CompanyEmail>
                </FooterLinks>
            </FooterLinksWrap>
            ))}
        </FooterLinksContainer>
    </FooterWrap>
  )
}

export default Footer