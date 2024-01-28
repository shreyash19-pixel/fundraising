import React from 'react'
import { MobileBtn, MobileBtnWrap, MobileDesc, MobileHeading, MobileImg1, MobileImg1Wrap, MobileImg2, MobileImg2Wrap, MobileImgSec, MobileInfoWrap, MobileTagline, MobileWrap } from '../../styles/Mobile'
import MobileImage1 from '../../assets/mobile.png'
import MobileImage2 from '../../assets/mobile2.png'

const Mobile = () => {
  return (
    <MobileWrap>
        <MobileInfoWrap>
            <MobileHeading>
                Apps
            </MobileHeading>
            <MobileTagline>
                Donating is easier just by using a smartphone
            </MobileTagline>
            <MobileDesc>
                Donating can now be done anywhere, anytime and very easily just by using a smartphone, download now for free
            </MobileDesc>
            <MobileBtnWrap>
                <MobileBtn href = "https://play.google.com/store/apps/details?id=com.shopwithscrip.app&hl=en&gl=US" target = "_blank">Download now</MobileBtn>
            </MobileBtnWrap>
        </MobileInfoWrap>
        <MobileImgSec>
            <MobileImg1Wrap>
                <MobileImg1 src = {MobileImage1} />
            </MobileImg1Wrap>
            <MobileImg2Wrap>
                <MobileImg2 src = {MobileImage2} />
            </MobileImg2Wrap>
        </MobileImgSec>
    </MobileWrap>
  )
}

export default Mobile