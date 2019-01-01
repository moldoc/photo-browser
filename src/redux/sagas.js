import { put, call, all, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import * as actions from './actions';

const URL = 'https://jsonplaceholder.typicode.com/photos';

function* fetchPhotosRequest() {
  try {
    const response = yield call(axios.get, [URL]);
    yield put(actions.fetchPhotosSuccess(response.data));
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

export default function* rootSaga() {
  yield all([
    watchFetchPhotosRequest()
  ]);
}
