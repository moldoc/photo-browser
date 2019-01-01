import {
  createAction
} from 'redux-actions';

export const fetchPhotosRequest = createAction('FETCH_PHOTOS_REQUEST');
export const fetchPhotosSuccess = createAction('FETCH_PHOTOS_SUCCESS');
