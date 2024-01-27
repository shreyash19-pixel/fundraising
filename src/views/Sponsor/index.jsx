import React from 'react'
import { SponsorImg, SponsorImgWrap, SponsorWrap } from '../../styles/Sponsor'
import Attentive from '../../assets/attentive.png'
import Slack from '../../assets/slack.png'
import Fireband from '../../assets/fireband.png'
import Sqaure from '../../assets/square.png'
import Active from '../../assets/active-capital.png'

const Sponsor = () => {
  return (
   <SponsorWrap>
    <SponsorImgWrap>
        <SponsorImg src = {Attentive}/>
    </SponsorImgWrap>
    <SponsorImgWrap>
        <SponsorImg src = {Slack}/>
    </SponsorImgWrap>
    <SponsorImgWrap>
        <SponsorImg src = {Fireband}/>
    </SponsorImgWrap>
    <SponsorImgWrap>
        <SponsorImg src = {Sqaure}/>
    </SponsorImgWrap>
    <SponsorImgWrap>
        <SponsorImg src = {Active}/>
    </SponsorImgWrap>
   </SponsorWrap>
  )
}

export default Sponsor