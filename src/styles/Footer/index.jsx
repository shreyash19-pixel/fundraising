import styled from "styled-components";


export const FooterWrap = styled.div`
    width: 100%;
    padding: 120px;
    display: flex;
    background-color: #F5F5F5;
    justify-content: space-between;
    gap: 20px;

    @media (max-width: 1000px)
    {
        padding-inline: 80px;
    }

    @media (max-width: 768px)
    {
        flex-direction: column;
        align-items: center;
        text-align: center;
        gap: 90px;
    }

    @media (max-width: 500px)
    {
      padding-inline: 30px;
        
    }
`

export const PersonalInfoWrap = styled.div`
    width: 100%;
    max-width: 350px;
    display: flex;
    flex-direction: column;
    gap: 20px;

    @media (max-width: 500px)
    {
       max-width: 500px;
        
    }
`

export const CompanyLogoWrap = styled.div`
    display: flex;
    gap: 5px;

    @media (max-width: 768px)
    {
        justify-content: center;
    }
`

export const LogoWrap = styled.div`
    
`
export const CompanyLogo = styled.img`
    width: 35px;
    height: 35px;
`

export const CompanyName = styled.h2`
    color: #3F47CC;
    font-weight: 800;
`

export const CompanyDesc = styled.p`
    color: #A5A5A5;
    font-weight: 500;
    font-size: 14px;
`

export const CompanyEmail = styled.a`
    text-decoration: none;
    font-size: 14px;
    font-weight: 400;
    color: black;

    @media (max-width: 420px)
    {
        font-size: ${(props) => (props.op? "12px" : "14px")};
    }
`

export const FooterLinksContainer = styled.div`
    width: 100%;
    display: flex;
    gap: 100px;
    justify-content: center;

    @media (max-width: 1000px)
    {
        gap: 60px;
    }

    @media (max-width: 420px)
    {
        gap: 35px;
    }
`
export const FooterLinksWrap = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
`

export const FooterLinksTitleWrap = styled.div`
`
export const FooterLinksTitle = styled.h4`
    font-weight: 500;

    @media (max-width: 420px)
    {
        font-size: 14px;
    }
`

export const FooterLinks = styled.div`
    display: flex;
    flex-direction: column;
    gap: 22px;
`