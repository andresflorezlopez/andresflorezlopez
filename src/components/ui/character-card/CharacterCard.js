import React from 'react';
import PropTypes from 'prop-types';

import * as Tags from './CharacterCard.styled';

const CharacterCard = ({name}) => (
  <Tags.CharacterCardContainer>
    <Tags.Name>{name}</Tags.Name>
    <Tags.Description />
    <Tags.Rate />
  </Tags.CharacterCardContainer>
);

CharacterCard.propTypes = {
  name: PropTypes.string.isRequired
}

export default CharacterCard;