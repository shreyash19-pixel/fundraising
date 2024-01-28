import styled from "styled-components";


export const DonateWrap = styled.div`
    width: 100%;
    background-color: #F5F5F5;
    padding: 100px 120px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;

    @media (max-width: 1032px) {
        padding-inline: 60px;
    }

    @media (max-width: 900px) {
        padding-inline: 40px;
    }

    @media (max-width: 500px) {
        padding-inline: 10px;
    }

    @media (max-width: 400px) {
        padding-inline: 5px;
    }
`

export const DonateHeadingWrap = styled.div`
    width: 100%;
    text-align: center;
`

export const DonateHeading = styled.h1`
    color: #333333;

    @media (max-width: 420px)
    {
        font-size: 24px;
    }
`



export const DonateCardsWrap = styled.div`
    width: 100%;
    display: flex;
    gap: 30px;
    justify-content: center;
    padding-inline: 20px;

    @media (max-width: 900px)
    {
        padding-inline: 12px;
    }

`

export const DonateCards = styled.div`
    width: 100%;
    max-width: 350px;
    min-height: 400px;
    padding: 15px;
    background-color: white;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    gap: 30px;
    cursor: pointer;
    
`

export const ImageInfoWrap = styled.div`
     display: flex;
    flex-direction: column;
    gap: 10px;
`

export const ImageWrap = styled.div`
    
`

export const DonateImage = styled.img`
    width: 100%;
    border-radius: 10px;
    object-fit: cover;
`

export const InfoWrap = styled.div`
    width: 100%;
     display: flex;
    flex-direction: column;
    gap: 10px;
`

export const DonateTopic = styled.h4`
    
`

export const DonateDesc = styled.p`
    font-size: 12px;
    color: rgb(160, 151, 151);
`
export const TargetWrap = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
`

export const ProgressBar = styled.progress`
    width: 100%;
    color: #3F47CC; 
`;

export const DonateAmountWrap = styled.div`
    display: flex;
    justify-content: space-between;
`

export const DonateAmount = styled.h5`
`
export const DonateBtnWrap = styled.div`
    display: flex;
    justify-content: center;

    @media (max-width: 768px)
    {
        justify-content: center;
    }
`

export const DonateBtn = styled.div`
    background-color: #3F47CC;
    color: white;
    padding: 15px 30px;
    border-radius: 30px;
    cursor: pointer;

    @media (max-width: 1000px)
    {
        padding: 10px 20px;
        font-size: 14px;
    }

    @media (max-width: 768px)
    {
        padding: 15px 30px;
        font-size: 15px;
    }
`

