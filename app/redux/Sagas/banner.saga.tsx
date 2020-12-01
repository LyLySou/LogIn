import { put, takeEvery, all, call, takeLatest } from 'redux-saga/effects'
// import { bannerRef } from '../../services/data.service'
import Types from '../Types'

function* getBanner() {
  try {
    let data: any = []
    // yield bannerRef()
    //   .get()
    //   .then((item:any) => {
    //     data = item.data()
    //   })
    yield data = [1,2,3]
    yield put({ type: Types.FETCH_BANNER_SUCCESS, data })
  } catch (error) {
    yield put({ type: Types.FETCH_BANNER_FAIL, error })
  }
}




export const BannerSagas = [takeEvery(Types.FETCH_BANNER, getBanner)]
