import {
  handleActions
} from 'redux-actions';

import * as actions from './actions';

const initialState = {
  photos: [],
  error: null
};

export default handleActions({
  [actions.fetchPhotosRequest]: (state, action) => ({
    ...state,
    error: null
  }),
  [actions.fetchPhotosSuccess]: (state, action) => ({
    ...state,
    photos: action.payload,
    error: null
  })
  },
  initialState
);
