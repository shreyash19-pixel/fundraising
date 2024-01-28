import React from 'react'
import { DonateAmount, DonateAmountWrap, DonateBtn, DonateBtnWrap, DonateCards, DonateCardsWrap, DonateDesc, DonateHeading, DonateHeadingWrap, DonateImage, DonateTopic, DonateWrap, ImageInfoWrap, ImageWrap, InfoWrap, ProgressBar, TargetWrap } from '../../styles/Donate'
import DonationImg1 from '../../assets/donation-image1.jpg'
import DonationImg2 from '../../assets/donation-image2.jpg'
import DonationImg3 from '../../assets/donation-image3.jpg'
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';  



const Donate = () => {

    const donations = [
        {img: DonationImg1, title: "Help orphans to live happily", desc : "Water is life, Water is basic human need", target: "Target: $1.000"},
        {img: DonationImg2, title: "Help orphans to live happily", desc : "Water is life, Water is basic human need",target: "Target: $2.000"},
        {img: DonationImg3, title: "Help orphans to live happily", desc : "Water is life, Water is basic human need",target: "Target: $3.000"}
    
    ]

    const responsiveOptions = {
      0: {
          items: 1,
          autoWidth: false  
      },
      400: {
          items: 1,
          autoWidth: true  
      },
      768: {
          items: 2,
          autoWidth: true  
      },
      1000: {
          items: 3,
          autoWidth: true   
      },
  };

  return (
    <DonateWrap id = "Programs">
        <DonateHeadingWrap>
            <DonateHeading>Some Urgent donation programs</DonateHeading>
        </DonateHeadingWrap>
        <DonateCardsWrap>
        <OwlCarousel   
            items = {1}
          className="owl-theme"  
          loop  
          nav 
          margin={20}
          responsive={responsiveOptions} 
          center={true}
        > 
        {donations.map((donate) => (
            <DonateCards>
                <ImageInfoWrap>
                    <ImageWrap>
                        <DonateImage src = {donate.img}/>
                    </ImageWrap>
                    <InfoWrap>
                        <DonateTopic>{donate.title}</DonateTopic>
                        <DonateDesc>{donate.desc}</DonateDesc>
                    </InfoWrap>
                </ImageInfoWrap>
                <TargetWrap>
                    <ProgressBar value="50" max="100"></ProgressBar>
                    <DonateAmountWrap>
                    <DonateAmount>{donate.target}</DonateAmount>
                    <DonateAmount>50%</DonateAmount>
                </DonateAmountWrap>
                </TargetWrap>
                <DonateBtnWrap >
                    <DonateBtn>Donate now</DonateBtn>
                </DonateBtnWrap>
            </DonateCards>
              ))}
              </OwlCarousel>
        </DonateCardsWrap>
    </DonateWrap>
  )
}

export default Donate