import { all } from 'redux-saga/effects'
import { BannerSagas } from './banner.saga'

export default function* rootSaga() {
  yield all([
    ...BannerSagas
  ])
}
