import styled from "styled-components";

export const HeroWrap = styled.div`
    width: 100%;
    background-color: #F1F3F5;
    display: flex;
    flex-direction: column;
    padding-top: 60px;
    padding-bottom: 20px;
    gap: 60px;
`
export const HeadingsWrap = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 20px;
`

export const TagLineWrap = styled.div`
    width: 100%;
    max-width: 990px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-weight: 800;
    padding-inline: 15px;
`

export const TagLine = styled.h1`
    color: #3F47CC;
    font-size: 65px;
    line-height: 1;

    @media (max-width: 1000px)
    {
        font-size: 55px;
    }

    @media (max-width: 768px)
    {
        font-size: 40px;
    }

    @media (max-width: 562px)
    {
        font-size: 35px;
    }

    @media (max-width: 425px)
    {
        font-size: 30px;
    }
`

export const DescWrap = styled.div`
    width: 100%;
    max-width: 630px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding-inline: 10px;
`

export const Desc = styled.p`
    color: #999999;
    font-size: 14px;

    @media (max-width: 768px)
    {
        font-size: 12px;
        padding-inline: 15px;
    }

    @media (max-width: 633px)
    {
        font-size: 11px;
    }
`

export const GetStartedWrap = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    gap: 12px;
`


export const HandsWrap = styled.div`
    
`

export const Hands = styled.img`
      width: 100%;
`
export const GetStartedBtnWrap = styled.div`
    width: 100%;
    max-width: 200px;
    display: flex;
    align-items: flex-start;
    justify-content: center;
`

export const GetStarted = styled.a`
    background-color: #3F47CC;
    text-decoration: none;
    color: white;
    border-radius: 30px;
    cursor: pointer;
    box-shadow: 0 8px 10px rgba(0, 0, 0, 0.1); 
    text-align: center;
    padding: 15px 30px;

    @media (max-width: 1146px)
    {
        padding: 8px 16px;
        font-size: 12px;
    }

    @media (max-width: 388px)
    {
        padding: 6px 14px;
        font-size: 8px;
    }

    
    @media (max-width: 322px)
    {
        padding: 6px 12px;
        font-size: 8px;
    }
`;