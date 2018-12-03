import ActionTypes from './../constants/redux/location'
import { get } from './../services/api/reverseGeocoding' 
export const onRegionChangeComplete = ({
  latitude,
  longitude
}) => async (dispatch) => {
  dispatch({
    type: ActionTypes.UPDATE_LOCATION,
    location: {
      latitude,
      longitude
    }
  })

  const { display_name } = await get({ latitude, longitude })

  dispatch({
    type: ActionTypes.UPDATE_LOCATION,
    location: {
      displayName: display_name
    }
  })
}

export const getMyLocation = () => (dispatch) => {
  const geolocation = navigator.geolocation;
  const watchId = geolocation.getCurrentPosition(({
    coords: { latitude, longitude }
  }) => {
    dispatch({
      type: ActionTypes.UPDATE_MY_LOCATION,
      location: {
        latitude,
        longitude
      }
    })
  })
  // TODO: save watchid
}
