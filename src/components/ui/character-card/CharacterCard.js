import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsDown, faThumbsUp } from '@fortawesome/free-solid-svg-icons'

import * as Tags from './CharacterCard.styled';

import KaneyWest from '../../../assets/images/characters/kaney-west.png';


const CharacterCard = ({character, onVotingLike, onVotingDisike}) => {
  const { voting: {
      like, 
      dislike
    }
  } = character;
  const totalVotes = like + dislike;
  const likePercentage = Math.floor(like/totalVotes*100);
  const dislikePercentage = Math.floor(dislike/totalVotes*100);

  const renderFinalResult = () => {
    if (like > dislike){
      return (
        <Tags.Finalresult color="rgba(254, 145, 40, 0.7)" >
          <FontAwesomeIcon color="white" icon={faThumbsUp} size="1x" />
        </Tags.Finalresult>
      );
    }
    return (
      <Tags.Finalresult color="rgba(66, 168, 161, 0.7)">
        <FontAwesomeIcon color="white" icon={faThumbsDown} size="1x" flip="horizontal" pull="right" />
      </Tags.Finalresult>
    );
  }
  return (
    <Tags.CharacterCardContainer>
      <Tags.Image alt="pope" src={KaneyWest} />
      {renderFinalResult()}
      <Tags.InformationContainer>
        <Tags.Name>{character.name}</Tags.Name>
        <Tags.Description>
          {character.description}
        </Tags.Description>
        <Tags.FooterCharacterCard>
          <Tags.ViewProfile>View Full Report</Tags.ViewProfile>
          <Tags.TimeAgo>{character.startDateInEntertaiment}</Tags.TimeAgo>
        </Tags.FooterCharacterCard>
      </Tags.InformationContainer>
      <Tags.Rate>
        <Tags.ThumbsUp percentage={likePercentage} onClick={onVotingLike}>
          <FontAwesomeIcon color="white" icon={faThumbsUp} size="2x" />
          <Tags.RightPercentage>
            {likePercentage}%
          </Tags.RightPercentage>
        </Tags.ThumbsUp>
        <Tags.ThumbsDown percentage={dislikePercentage} onClick={onVotingDisike} >
          <Tags.LeftPercentage>
            {dislikePercentage}%
          </Tags.LeftPercentage>
          <FontAwesomeIcon color="white" icon={faThumbsDown} size="2x" flip="horizontal" pull="right" />
        </Tags.ThumbsDown>
      </Tags.Rate>
    </Tags.CharacterCardContainer>
  )
};

CharacterCard.propTypes = {
  character: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    startDateInEntertaiment: PropTypes.string.isRequired,
    voting: PropTypes.shape({
      like: PropTypes.number.isRequired,
      dislike: PropTypes.number.isRequired
    })
  }).isRequired,
  onVotingLike: PropTypes.func.isRequired,
  onVotingDisike: PropTypes.func.isRequired,
}

export default CharacterCard;