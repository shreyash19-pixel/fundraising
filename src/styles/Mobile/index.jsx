import styled from "styled-components";


export const MobileWrap = styled.div`
    width: 100%;
    background-color: #3F47CC;
    padding-inline: 120px;
    padding-top: 30px;
    display: flex;
    gap: 20px;

    @media (max-width: 768px)
    {
        flex-direction: column;
        gap: 35px;
        padding-inline: 80px;
    }

    @media (max-width: 500px)
    {
        padding-inline: 60px;
    }

    @media (max-width: 362px)
    {
        padding-inline: 35px;
    }
`

export const MobileInfoWrap = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 25px;

    @media (max-width: 850px)
    {
        gap: 20px;
    }

    @media (max-width: 768px)
    {
       text-align: center;
       align-items: center;
       gap: 25px;
    }
`

export const MobileHeading = styled.h4`
    color: white;
`

export const MobileTagline = styled.h1`
    color: white;

    @media (max-width: 1024px)
    {
        font-size: 22px;
    }

    @media (max-width: 850px)
    {
        font-size: 18px;
    }

    @media (max-width: 768px)
    {
        font-size: 26px;
    }

    @media (max-width: 500px)
    {
        font-size: 18px;
    }
`

export const MobileDesc = styled.p`
    color: white;

    @media (max-width: 1024px)
    {
        font-size: 14px;
    }

    @media (max-width: 850px)
    {
        font-size: 12px;
    }

    @media (max-width: 768px)
    {
        font-size: 13px;
    }

    @media (max-width: 500px)
    {
        font-size: 12px;
    }
`

export const MobileBtnWrap = styled.div`
    display: flex;
    justify-content: flex-start;
`

export const MobileBtn = styled.a`
    text-decoration: none;
    background-color: white;
    color: #3F47CC;
    padding: 15px 30px;
    border-radius: 30px;
    cursor: pointer;

    @media (max-width: 1024px)
    {
        padding: 10px 20px;
        font-size: 12px;
    }

    @media (max-width: 768px)
    {
        font-size: 12px 24px;
        font-size: 14px;
    }

    @media (max-width: 500px)
    {
        font-size: 8px 16px;
        font-size: 12px;
    }
`

export const MobileImgSec = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`

export const MobileImg1Wrap = styled.div`
      display: flex;
    align-items: flex-end;
    position: relative;
    bottom:0px;
`

export const MobileImg1 = styled.img`
    width: 100%;
`

export const MobileImg2Wrap = styled.div`
    display: flex;
    align-items: flex-end;
    position: relative;
    bottom:0px;
    left: -3px;
`

export const MobileImg2 = styled.img`
    width: 100%;
`