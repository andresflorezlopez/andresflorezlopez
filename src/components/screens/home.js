import React from 'react';

import MainContainer from '../ui/main-container/MainContainer';
import HeroSlider from '../ui/hero-slider/HeroSlider';
import SpeakOut from '../ui/speak-out/SpeakOut';

const Home = () => {
  return (
    <MainContainer>
      <HeroSlider />
      <SpeakOut />
    </MainContainer>
  );
}

export default Home;
