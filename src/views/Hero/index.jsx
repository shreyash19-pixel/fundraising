import React from 'react'
import { Desc, DescWrap, HandsWrap, HeroWrap, TagLine, TagLineWrap, Hands, HeadingsWrap, GetStartedWrap, GetStarted, GetStartedBtnWrap  } from '../../styles/Hero'
import Hand1 from '../../assets/left-hand.png'
import Hand2 from '../../assets/right-hand.png'

const Hero = () => {
  return (
    <HeroWrap>
      <HeadingsWrap>
        <TagLineWrap>
            <TagLine>
                The Slightest help from you, will mean a lot to them
            </TagLine>
        </TagLineWrap>
        <DescWrap>
          <Desc>
            Help others by using Shering, a platform that is safe, transparent, and trusted. and have 10+ years of experience
          </Desc>
        </DescWrap>
        </HeadingsWrap>
        <GetStartedWrap>
          <HandsWrap>
            <Hands src = {Hand1} />
          </HandsWrap>
          <GetStartedBtnWrap>
            <GetStarted href = "#About">Get Started</GetStarted>
          </GetStartedBtnWrap>
          <HandsWrap>
            <Hands src = {Hand2} />
          </HandsWrap>
        </GetStartedWrap>
    </HeroWrap>
  )
}

export default Hero