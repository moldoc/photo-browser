import * as actions from '../redux/actions';

const error =  new Error('An error was encountered');

describe('success actions', () => {

  describe('fetchPhotosSuccess', () => {
    it('has the correct type', () => {
      const action = actions.fetchPhotosSuccess();

      expect(action.type).toEqual('FETCH_PHOTOS_SUCCESS');
    });

    it('has the correct payload', () => {
      const payload = {
        photos: [{ id: 1, albumId: 1, title: 'Photo' }],
        pagination: { next: '', first: '', last: '' }
      };

      const action = actions.fetchPhotosSuccess(payload);

      expect(action.payload).toEqual(payload);
    });
  });

  describe('fetchAlbumsSuccess', () => {
    it('has the correct type', () => {
      const action = actions.fetchAlbumsSuccess();

      expect(action.type).toEqual('FETCH_ALBUMS_SUCCESS');
    });

    it('has the correct payload', () => {
      const payload = {
        albums: [{ id: 1, userId: 1, title: 'Album' }],
      };

      const action = actions.fetchAlbumsSuccess(payload);

      expect(action.payload).toEqual(payload);
    });
  });

  describe('fetchUsersSuccess', () => {
    it('has the correct type', () => {
      const action = actions.fetchUsersSuccess();

      expect(action.type).toEqual('FETCH_USERS_SUCCESS');
    });

    it('has the correct payload', () => {
      const payload = {
        users: [{ id: 1, name: 'Album' }],
      };

      const action = actions.fetchUsersSuccess(payload);

      expect(action.payload).toEqual(payload);
    });
  });
});

describe('failure actions', () => {

  describe('fetchPhotosFailure', () => {
    it('has the correct type', () => {
      const action = actions.fetchPhotosFailure();

      expect(action.type).toEqual('FETCH_PHOTOS_FAILURE');
    });

    it('has the correct payload', () => {
      const payload = { error };

      const action = actions.fetchPhotosFailure(payload);

      expect(action.payload).toEqual(payload);
    });
  });

  describe('fetchAlbumsFailure', () => {
    it('has the correct type', () => {
      const action = actions.fetchAlbumsFailure();

      expect(action.type).toEqual('FETCH_ALBUMS_FAILURE');
    });

    it('has the correct payload', () => {
      const payload = { error };

      const action = actions.fetchAlbumsFailure(payload);

      expect(action.payload).toEqual(payload);
    });
  });

  describe('fetchUsersFailure', () => {
    it('has the correct type', () => {
      const action = actions.fetchUsersFailure();

      expect(action.type).toEqual('FETCH_USERS_FAILURE');
    });

    it('has the correct payload', () => {
      const payload = { error };

      const action = actions.fetchUsersFailure(payload);

      expect(action.payload).toEqual(payload);
    });
  });
});
