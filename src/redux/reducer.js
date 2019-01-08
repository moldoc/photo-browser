import {
  handleActions
} from 'redux-actions';

import * as actions from './actions';

const initialState = {
  photos: [],
  albums: [],
  users: [],
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
  }),
  [actions.fetchAlbumsRequest]: (state, action) => ({
    ...state,
    error: null
  }),
  [actions.fetchAlbumsSuccess]: (state, action) => ({
    ...state,
    albums: action.payload,
    error: null
  }),
  [actions.fetchUsersRequest]: (state, action) => ({
    ...state,
    error:null
  }),
  [actions.fetchUsersSuccess]: (state, action) => ({
    ...state,
    users: action.payload,
    error: null
  })
  },
  initialState
);
