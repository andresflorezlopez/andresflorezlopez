import React from 'react';

import CharacterCard from '../character-card/CharacterCard';
import Container from '../container/Container';

import * as Tags from './CharacterGrid.styled';

const mockedCharacter = {
  name: 'Kaney West'
};

const CharacterGrid = () => (
  <>
    <Container>
      <Tags.Title>Previous Rulings</Tags.Title>
      <Tags.CharacterCardContainer>
        <CharacterCard character={mockedCharacter} />
        <CharacterCard character={mockedCharacter} />
        <CharacterCard character={mockedCharacter} />
        <CharacterCard character={mockedCharacter} />
      </Tags.CharacterCardContainer>
    </Container>
  </>
);

export default CharacterGrid;