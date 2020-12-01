import types from '../Types'
const initialState = {
  dataBanner: [],
}

const BannerReducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case types.FETCH_BANNER:
      return { ...state }
    case types.FETCH_BANNER_SUCCESS:
      return { ...state, dataBanner: action.data }
    case types.FETCH_BANNER_FAIL:
      return action.error
    default:
      return state
  }
}

export default BannerReducer
