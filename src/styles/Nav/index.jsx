import styled from "styled-components";

export const NavWrap = styled.div`
    width: 100%;
    padding: 15px 80px;
    background-color: #F1F3F5;
    position: relative;

    @media (max-width: 1000px)
    {
        padding: 15px 30px;
    }

    @media (max-width: 500px)
    {
        padding: 15px;
    }
`

export const NavBar = styled.div`
    width: 100%;
    min-height: 70px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
export const NavLogoWrap = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
`

export const NavLogo = styled.img`
    width: 40px;
    height: 40px;
`

export const CompanyName = styled.h2`
    color: #3F47CC;
    font-weight: 800;
`
export const NavLinksWrap = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 60px;


    @media (max-width: 1000px)
    {
        gap: 40px;
    }

    @media (max-width: 768px)
    {
        display: none;
    }
`

export const NavLinks = styled.a`
    color: #3F47CC;
    text-decoration: none;  
    font-weight: ${(props) => (props.about ? 800 : 500)};
`

export const ContactUs = styled.a`
    color: white;
    background-color: #3F47CC;
    text-decoration: none;
    padding: 10px 20px;
    border-radius: 30px;

    @media (max-width: 768px)
    {
        background-color: transparent;
        color: #3F47CC;
    }
  
`
export const HamburgerWrap = styled.div`
    display: none;

    @media (max-width: 768px)
    {
        display: flex;
        color: #3F47CC;
        font-size: 30px;
        cursor: pointer;
    }
`

export const ResponsiveNav = styled.div`
    display: none;

    @media (max-width: 768px)
    {
        width: 100%;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        flex-direction: column;
        gap: 60px;
        background-color: #F1F3F5;
        position: absolute;
        top: 100px;
        left:0px;
        font-size: 22px;
        padding-top: 40px;
        z-index: 3;
    }
`