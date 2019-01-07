import {
  createAction
} from 'redux-actions';

export const fetchPhotosRequest = createAction('FETCH_PHOTOS_REQUEST');
export const fetchPhotosSuccess = createAction('FETCH_PHOTOS_SUCCESS');

export const fetchAlbumsRequest = createAction('FETCH_ALBUMS_REQUEST');
export const fetchAlbumsSuccess = createAction('FETCH_ALBUMS_SUCCESS');
