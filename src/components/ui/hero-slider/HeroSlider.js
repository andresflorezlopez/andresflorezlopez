import React from 'react';

import Container from '../container/Container';

import * as Tags from './HeroSlider.styled';

const HeroSlider = () => (
  <Tags.HeroSliderContainer>
    <Tags.Image>
      <Container>
        <Tags.Comments />
      </Container>
    </Tags.Image>
    <Tags.ClosingIn />
  </Tags.HeroSliderContainer>
);

export default HeroSlider;