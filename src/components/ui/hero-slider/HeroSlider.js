import React from 'react';

import Container from '../container/Container';

import * as Tags from './HeroSlider.styled';

import PopeImg from '../../../assets/images/hero/pope.jpg';

const HeroSlider = () => (
  <Tags.HeroSliderContainer>
    <Tags.ImageContainer>
      <Tags.Image alt="pope" src={PopeImg} />
      <Container>
        <Tags.Comments>
          <Tags.OpinionTitle>What's your opinion on </Tags.OpinionTitle>
          <Tags.OpinionName>Pope Francis?</Tags.OpinionName>
          <Tags.OpinionDescription>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Sed tellus urna, viverra a tempus eget, eleifend eget quam.
            Donec aliquam rhoncus mauris, tincidunt vulputate erat venenatis nec.
            Fusce congue felis eros, at malesuada sem lobortis a. </Tags.OpinionDescription>
          <Tags.OpinionMoreInformation>W More information</Tags.OpinionMoreInformation>
          <Tags.OpinionRate>What's Your Veredict?</Tags.OpinionRate>
          <Tags.RateContainer>
            <Tags.Like/>
            <Tags.Unlike/>
          </Tags.RateContainer>
        </Tags.Comments>
      </Container>
    </Tags.ImageContainer>
    <Tags.ClosingIn>
      <Tags.ClosingInTitle>CLOSING IN</Tags.ClosingInTitle>
      <Tags.ClosingInDays>22 days</Tags.ClosingInDays>
    </Tags.ClosingIn>
    
  </Tags.HeroSliderContainer>
);

export default HeroSlider;