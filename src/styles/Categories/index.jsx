import styled from "styled-components";

export const CategoriesWrap = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 100px 150px;
    background-color: #fafafa; 
    gap: 40px;

    @media (max-width: 768px)
    {
        flex-direction: column;
        padding-inline: 25px;
    }
`

export const CategoriesCardWrap = styled.div`
    width: 100%;
    max-width: 900px;
    display: grid;
    grid-gap: 16px;
    grid-template-columns: 1fr 1fr;

    @media (max-width: 480px)
    {
        grid-template-columns: 1fr;
    }
`

export const CategoriesCards = styled.div`
    background-color: white;
    border-radius: 30px;
    padding: 20px 30px;
    box-shadow: 0 8px 10px rgba(0, 0, 0, 0.1); 
    cursor: pointer;
    display: flex;
    flex-direction: column;
    gap: 30px;
    transition: transform 0.3s ease-in-out;

    &:hover{
        transform: scale(1.05);
    }
`;

export const CardIcon = styled.div`
    color: white;
    font-size: 30px;
    background-color: #3F47CC;
    border-radius: 100%;
    width: 90px;
    height: 90px;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const CardHeading = styled.h3`
    
`

export const CardDesc = styled.p`
    font-size: 14px;
`

export const CategoriesDescWrap = styled.div`
    width: 100%;
    max-width: 400px;
    display: flex;
    flex-direction: column;
    gap: 20px;

    @media (max-width: 768px)
    {
        text-align: center;
    }
`



