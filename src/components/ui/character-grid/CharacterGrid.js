import React from 'react';
import { useDispatch, useSelector } from "react-redux";

import CharacterCard from '../character-card/CharacterCard';
import Container from '../container/Container';

import * as Tags from './CharacterGrid.styled';

const CharacterGrid = () => {
  const characters = useSelector(({characters}) =>
    characters.characters
  );
  return (
    <>
      <Container>
        <Tags.Title>Previous Rulings</Tags.Title>
        <Tags.CharacterCardContainer>
          {Object.values(characters).map(character => <CharacterCard character={character} />)}
        </Tags.CharacterCardContainer>
      </Container>
    </>
  )
};

export default CharacterGrid;