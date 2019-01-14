import { put, call, all, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import * as actions from './actions';
import parse from 'parse-link-header';

const URL = 'https://jsonplaceholder.typicode.com/';

function* fetchPhotosRequest(action) {
  try {
    const response = yield call(axios.get, [action.payload.request_url]);
    const header = response.headers.link;
    const parsed = parse(header);
    const data = { photos: response.data, pagination: parsed } ;
    yield put(actions.fetchPhotosSuccess(data));
  } catch (error) {
    yield put(actions.fetchPhotosFailure(error));
  }
}

function* fetchAlbumsRequest() {
  try {
    const response = yield call(axios.get, [`${URL}albums`]);
    yield put(actions.fetchAlbumsSuccess(response.data));
  } catch (error) {
    yield put(actions.fetchAlbumsFailure(error));
  }
}

function* fetchUsersRequest() {
  try {
    const response = yield call(axios.get, [`${URL}users`]);
    yield put(actions.fetchUsersSuccess(response.data));
  } catch (error) {
    yield put(actions.fetchUsersFailure(error));
  }
}

function* fetchUsersAndAlbums() {
  try {
    yield all([
      call(fetchUsersRequest),
      call(fetchAlbumsRequest)
    ]);
  } catch (error) {
    console.log(error);
  }
}
function* watchFetchPhotosRequest() {
  yield takeEvery(
    actions.fetchPhotosRequest().type,
    fetchPhotosRequest
  )
}

function* watchFetchAlbumsRequest() {
  yield takeEvery(
    actions.fetchAlbumsRequest().type,
    fetchAlbumsRequest
  )
}

function* watchFetchUsersRequest() {
  yield takeEvery(
    actions.fetchUsersRequest().type,
    fetchUsersRequest
  )
}

function* watchFetchUsersAndAlbums() {
  yield takeEvery(
    actions.fetchUsersAndAlbums().type,
    fetchUsersAndAlbums
  )
}

export default function* rootSaga() {
  yield all([
    watchFetchPhotosRequest(),
    watchFetchAlbumsRequest(),
    watchFetchUsersRequest(),
    watchFetchUsersAndAlbums()
  ]);
}
