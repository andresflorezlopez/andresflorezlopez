import { createReducer, createActions } from "reduxsauce";
import mockedCharacters from '../../config/mocked-characters';

const { Types, Creators } = createActions({
  setUserData: ["name", "last_name", "email", "phone_number", "administrators"]
});

export default Creators;

const { characters } = mockedCharacters;

export const INITIAL_STATE = {
  characters,
};

const setUser = () => {};

export const HANDLERS = {
  [Types.SET_USER_DATA]: setUser,
};

export const reducer = createReducer(INITIAL_STATE, HANDLERS);