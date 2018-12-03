import { DEFAULT_LATITUDE, DEFAULT_LONGITUDE } from './../constants/location'
import ActionTypes from './../constants/redux/location'

const initialState = {
  latitude: DEFAULT_LATITUDE,
  longitude: DEFAULT_LONGITUDE,
  displayName: null,
  myLocation: {
    latitude: DEFAULT_LATITUDE,
    longitude: DEFAULT_LONGITUDE,
  }
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.UPDATE_LOCATION:
      return {
        ...state, ...action.location
      };
    case ActionTypes.UPDATE_MY_LOCATION:
      return {
        ...state, myLocation: {
          ...state.myLocation,
          ...action.location
        }
      };
    default:
      return state
  }
}
