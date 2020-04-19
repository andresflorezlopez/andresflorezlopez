import React from 'react';

import MainContainer from '../ui/main-container/MainContainer';
import HeroSlider from '../ui/hero-slider/HeroSlider';
import SpeakOut from '../ui/speak-out/SpeakOut';
import CharacterGrid from '../ui/character-grid/CharacterGrid';

const Home = () => {
  return (
    <MainContainer>
      <HeroSlider />
      <SpeakOut />
      <CharacterGrid title="Previous Rulings"/>
    </MainContainer>
  );
}

export default Home;
