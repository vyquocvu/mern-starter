
import Immutable from 'seamless-immutable';
import { createReducer } from 'reduxsauce';

import {
  FETCH_BOOKS,
  // CREATE_BOOK,
  // DELETE_BOOK,
  // UPDATE_BOOK,
  // GET_A_BOOK 
} from 'actions/constants';

export const INITIAL_STATE = Immutable({
  data: [],
});

const onFetchBooks = (state, { data }) => {
  return ({ ...state, data });
}

const ACTION_HANDLERS = {
  [FETCH_BOOKS]: onFetchBooks,
};


export default createReducer(INITIAL_STATE, ACTION_HANDLERS);
