import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsDown, faThumbsUp } from '@fortawesome/free-solid-svg-icons'

import * as Tags from './CharacterCard.styled';

import KaneyWest from '../../../assets/images/characters/kaney-west.png';

const CharacterCard = ({character}) => (
  <Tags.CharacterCardContainer>
    <Tags.Image alt="pope" src={KaneyWest} />
    <Tags.InformationContainer>
      <Tags.Name>{character.name}</Tags.Name>
      <Tags.TimeAgo>1 mont ago in Entertaiment</Tags.TimeAgo>
      <Tags.Description>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tellus urna, viverra a tempus eget, eleifend eget quam.
      </Tags.Description>
    </Tags.InformationContainer>
    <Tags.Rate>
      <Tags.ThumbsUp>
        <FontAwesomeIcon color="white" icon={faThumbsUp} size="2x" />
        <Tags.RightPercentage>
        60%
        </Tags.RightPercentage>
      </Tags.ThumbsUp>
      <Tags.ThumbsDown>
        <Tags.LeftPercentage>
        40%
        </Tags.LeftPercentage>
        <FontAwesomeIcon color="white" icon={faThumbsDown} size="2x" flip="horizontal" pull="right" />
      </Tags.ThumbsDown>
    </Tags.Rate>
  </Tags.CharacterCardContainer>
);

CharacterCard.propTypes = {
  character: PropTypes.shape({
    name: PropTypes.string.isRequired
  }).isRequired
}

export default CharacterCard;