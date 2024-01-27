import React from 'react'
import { AboutUsDesc, AboutUsDescWrap, AboutUsHeading, AboutUsHeadingLine, AboutUsHeadingLineWrap, AboutUsHeadingWrap, AboutUsImage, AboutUsImageWrap, AboutUsWrap, LearnMoreBtn, LearnMoreBtnWrap } from '../../styles/AboutUs'
import ChildrenImg from '../../assets/child-img.jpg'

const AboutUs = () => {
  return (
    <AboutUsWrap id = "About">
        <AboutUsHeadingWrap>
            <AboutUsHeadingLineWrap>
                <AboutUsHeading>
                    About Us
                </AboutUsHeading>
                <AboutUsHeadingLine>
                    your help will be very useful for them
                </AboutUsHeadingLine>
            </AboutUsHeadingLineWrap>
            <AboutUsDescWrap>
                <AboutUsDesc>
                    We are safe, transparent and trusted donation platform with more than 10+ years of experience. we have helped people around the world to live safely and in peace
                </AboutUsDesc>
                <LearnMoreBtnWrap>
                <LearnMoreBtn href = "#Categories">Learn More</LearnMoreBtn>
                </LearnMoreBtnWrap>
            </AboutUsDescWrap>
        </AboutUsHeadingWrap>
        <AboutUsImageWrap>
            <AboutUsImage src = {ChildrenImg}/>
        </AboutUsImageWrap>
    </AboutUsWrap>
  )
}

export default AboutUs