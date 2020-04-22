import React from 'react';
import { useDispatch, useSelector } from "react-redux";

import CharacterCard from '../character-card/CharacterCard';
import Container from '../container/Container';

import actions from '../../../redux/reducers/characters';

import * as Tags from './CharacterGrid.styled';

const CharacterGrid = () => {
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
    <>
      <Container>
        <Tags.Title>Previous Rulings</Tags.Title>
        <Tags.CharacterCardContainer>
          {Object.values(characters).map(character => 
            <CharacterCard
              character={character}
              onVotingLike={() => voteLikeByCharacterId(character.id)}
              onVotingDisike={() => voteDislikeByCharacterId(character.id)} />
          )}
        </Tags.CharacterCardContainer>
      </Container>
    </>
  )
};

export default CharacterGrid;