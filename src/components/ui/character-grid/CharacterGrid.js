import React from 'react';

import CharacterCard from '../character-card/CharacterCard';
import Container from '../container/Container';

import * as Tags from './CharacterGrid.styled';

const CharacterGrid = () => (
  <>
    <Container>
      <Tags.Title>Previous Rulings</Tags.Title>
      <Tags.CharacterCardContainer>
        <CharacterCard name="Kaney West" />
        <CharacterCard name="Kaney West" />
        <CharacterCard name="Kaney West" />
        <CharacterCard name="Kaney West" />
      </Tags.CharacterCardContainer>
    </Container>
  </>
);

export default CharacterGrid;