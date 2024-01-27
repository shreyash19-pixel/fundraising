import React from 'react'
import { CardDesc, CardHeading, CardIcon, CategoriesCardWrap, CategoriesCards, CategoriesDescWrap, CategoriesWrap } from '../../styles/Categories'
import { MdGroups2 } from "react-icons/md";
import { AiOutlineMedicineBox } from "react-icons/ai";
import { FaBook } from "react-icons/fa";
import { FaBowlFood } from "react-icons/fa6";
import { AboutUsDesc, AboutUsHeading, AboutUsHeadingLine, LearnMoreBtn, LearnMoreBtnWrap } from '../../styles/AboutUs';

const Categories = () => {

    const cardInfo = [
        {icon : <MdGroups2 /> ,title : "Human", desc : "Help those who are in need, or in trouble"},
        {icon : <AiOutlineMedicineBox /> ,title : "Medicine", desc : "Help them with supply of medicines or special needs they are suffering from"},
        {icon : <FaBook /> ,title : "Study", desc : "Help them with supplies regarding learning"},
        {icon : <FaBowlFood /> ,title : "Food", desc : "Help them with food or necessities to survive"}

]

  return (
    <CategoriesWrap id = "Categories">
        <CategoriesCardWrap>
            {cardInfo.map((card) => (
            <CategoriesCards>
                <CardIcon>
                    {card.icon}
                </CardIcon>
                <CardHeading>{card.title}</CardHeading>
                <CardDesc>{card.desc}</CardDesc>
            </CategoriesCards>  
            ))}
        </CategoriesCardWrap>
        <CategoriesDescWrap>
            <AboutUsHeading>
                Categories
            </AboutUsHeading>
            <AboutUsHeadingLine>
                Several donation programs that can make it easier for you
            </AboutUsHeadingLine>
            <AboutUsDesc>
                you can donate according to the categories provided, this makes it very easy for you and us to manage the donation so that it
            </AboutUsDesc>
            <LearnMoreBtnWrap>
                <LearnMoreBtn href = "#Programs">Donate now</LearnMoreBtn>
            </LearnMoreBtnWrap>
        </CategoriesDescWrap>
    </CategoriesWrap>
  )
}

export default Categories