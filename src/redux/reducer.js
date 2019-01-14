import {
  handleActions
} from 'redux-actions';

import * as actions from './actions';

const initialState = {
  photos: [],
  albums: [],
  users: [],
  pagination: {},
  error: null
};

export default handleActions({
  [actions.fetchPhotosSuccess]: (state, action) => ({
    ...state,
    photos: state.photos.concat(action.payload.photos),
    pagination: action.payload.pagination,
    error: null
  }),
  [actions.fetchPhotosFailure]: (state, action) => ({
    ...state,
    error: action.payload
  }),
  [actions.fetchAlbumsSuccess]: (state, action) => ({
    ...state,
    albums: action.payload,
    error: null
  }),
  [actions.fetchAlbumsFailure]: (state, action) => ({
    ...state,
    error: action.payload
  }),
  [actions.fetchUsersSuccess]: (state, action) => ({
    ...state,
    users: action.payload,
    error: null
  }),
  [actions.fetchUsersFailure]: (state, action) => ({
    ...state,
    error: action.payload
  })
  },
  initialState
);
