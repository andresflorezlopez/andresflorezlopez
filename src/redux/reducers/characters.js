import { createReducer, createActions } from "reduxsauce";
import mockedCharacters from '../../config/mocked-characters';

const { Types, Creators } = createActions({
  giveLikeTo: ["characterId"],
  giveDislikeTo: ["characterId"],
});

export default Creators;

const { characters } = mockedCharacters;

export const INITIAL_STATE = {
  characters,
};

const giveLikeTo = (state = INITIAL_STATE, action) => {
  const characterId = action.characterId;
  const newLikes = state.characters[characterId].voting.like + 1; 
  const newState = {  
    ...state, 
    characters: {
      ...state.characters,
      [characterId]: {
        ...state.characters[characterId],
        voting:{
          ...state.characters[characterId].voting,
          like: newLikes,    
        }
      }
    }
  };
  return newState;
};

const giveDislikeTo = (state = INITIAL_STATE, action) => {
  const characterId = action.characterId;
  const newDislikes = state.characters[characterId].voting.dislike + 1; 
  const newState = {  
    ...state, 
    characters: {
      ...state.characters,
      [characterId]: {
        ...state.characters[characterId],
        voting:{
          ...state.characters[characterId].voting,
          dislike: newDislikes,    
        }
      }
    }
  };
  return newState;
};

export const HANDLERS = {
  [Types.GIVE_LIKE_TO]: giveLikeTo,
  [Types.GIVE_DISLIKE_TO]: giveDislikeTo,
};

export const reducer = createReducer(INITIAL_STATE, HANDLERS);