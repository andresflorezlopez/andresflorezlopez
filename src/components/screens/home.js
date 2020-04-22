import React from 'react';

import { useDispatch, useSelector } from "react-redux";

import MainContainer from '../ui/main-container/MainContainer';
import HeroSlider from '../ui/hero-slider/HeroSlider';
import SpeakOut from '../ui/speak-out/SpeakOut';
import CharacterGrid from '../ui/character-grid/CharacterGrid';

import actions from '../../redux/reducers/characters';

const Home = () => {
  const characters = useSelector(({characters}) =>
    characters.characters
  );

  const dispatch = useDispatch();

  const voteLikeByCharacterId = characterId => {
    dispatch(actions.giveLikeTo(characterId));
  };

  const voteDislikeByCharacterId = characterId => {
    dispatch(actions.giveDislikeTo(characterId));
  };

  return (
    <MainContainer>
      <HeroSlider />
      <SpeakOut />
      <CharacterGrid 
        title="Previous Rulings"
        onVotingLike={voteLikeByCharacterId}
        onVotingDisike={voteDislikeByCharacterId}
        characters={characters} />
    </MainContainer>
  );
}

export default Home;
