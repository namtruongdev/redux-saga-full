import { call, put, takeEvery } from 'redux-saga/effects';

import { fetchImages } from '../../api/index';
import { IMAGES } from '../constants';
import { setImages, setError } from '../actions/';

function* handleImagesLoad() {
  try {
    const images = yield call(fetchImages);
    yield put(setImages(images));
  } catch (error) {
    yield put(setError(error.message.toString()));
  }
}

export default function* watchImagesLoad() {
  yield takeEvery(IMAGES.LOAD, handleImagesLoad);
}
