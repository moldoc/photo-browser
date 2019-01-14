import * as actions from '../redux/actions';
import reducer from '../redux/reducer';

let action;
let newState;
const error = new Error('An error was encountered');

describe('success actions', () => {

  it('handles actions of type FETCH_PHOTOS_SUCCESS', () => {
    action = {
      type: actions.fetchPhotosSuccess,
      payload: {
        photos: [{ id: 1, albumId: 1, title: 'Photo' }],
        pagination: { next: '', first: '', last: '' }
      }
    };

    newState = reducer({ photos: [] }, action);

    expect(newState).toEqual({
      photos: [{ id: 1, albumId: 1, title: 'Photo' }],
      pagination: { next: '', first: '', last: '' },
      error: null
    });
  });

  it('handles actions of type FETCH_ALBUMS_SUCCESS', () => {
    action = {
      type: actions.fetchAlbumsSuccess,
      payload: [{ id: 1, userId: 1, title: 'album' }]
    };

    newState = reducer({}, action);

    expect(newState).toEqual({
      albums: [{ id: 1, userId: 1, title: 'album' }],
      error: null
    });
  });

  it('handles actions of type FETCH_USERS_SUCCESS', () => {
    action = {
      type: actions.fetchUsersSuccess,
      payload: [{ id: 1, name: 'John Smith', username: 'jsmith' }]
    };

    newState = reducer({}, action);

    expect(newState).toEqual({
      users: [{ id: 1, name: 'John Smith', username: 'jsmith' }],
      error: null
    });
  });
});

describe('failure actions', () => {

  afterEach(() => {
    newState = reducer({}, action);

    expect(newState).toEqual({ error });
  });

  it('handles actions of type FETCH_PHOTOS_FAILURE', () => {
    action = {
      type: actions.fetchPhotosFailure,
      payload: error
    };
  });

  it('handles actions of type FETCH_ALBUMS_FAILURE', () => {
    action = {
      type: actions.fetchAlbumsFailure,
      payload: error
    };
  });

  it('handles actions of type FETCH_USERS_FAILURE', () => {
    action = {
      type: actions.fetchUsersFailure,
      payload: error
    };
  });
});
