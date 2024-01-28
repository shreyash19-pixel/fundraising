import styled from "styled-components";


export const AboutUsWrap = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding-top: 60px;
    padding: 100px 150px;
    gap: 50px;

    @media (max-width: 768px)
    {
        padding-inline: 90px;
    }

    @media (max-width: 550px)
    {
        padding-inline: 50px;
    }

    @media (max-width: 420px)
    {
        padding-inline: 30px;
    }

    
    @media (max-width: 375px)
    {
        padding-inline: 15px;
    }
`

export const AboutUsHeadingWrap = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    gap: 40px;

    @media (max-width: 768px)
    {
        flex-direction: column;
        align-items: center;
    }

`
export const AboutUsHeadingLineWrap = styled.div`
    width: 100%;
    max-width: 280px;

    @media (max-width: 768px)
    {
       text-align: center;
    }
` 

export const AboutUsHeading = styled.h3`
    color: #3F47CC;
`

export const AboutUsHeadingLine = styled.h1`
    font-weight: 900;
    font-size: 36px;
    color : #333333;

    @media (max-width: 1000px)
    {
        font-size: 28px;
    }

    @media (max-width: 780px)
    {
        font-size: 24px;
    }
`

export const AboutUsDescWrap = styled.div`
    width: 100%;
    max-width: 400px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 30px;
`

export const AboutUsDesc = styled.p`
    color: #808080;
    font-size: 13px;
    font-weight: 500;

    @media (max-width: 768px)
    {
        text-align: center;
    }
`
export const LearnMoreBtnWrap = styled.div`
    display: flex;
    justify-content: flex-start;

    @media (max-width: 768px)
    {
        justify-content: center;
    }
`

export const LearnMoreBtn = styled.a`
    background-color: #3F47CC;
    color: white;
    padding: 15px 30px;
    border-radius: 30px;
    cursor: pointer;
    text-decoration: none;
`

export const AboutUsImageWrap = styled.div`
  width: 100%;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;

    &:hover{
        transform: scale(1.01);
    }
`

export const AboutUsImage = styled.img`
  width: 100%;
  border-radius: 30px;
  filter: brightness(0.5); 
  object-fit: cover;
`