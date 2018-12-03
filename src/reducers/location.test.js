import reducer from './location.js'
import ActionTypes from './../constants/redux/location'

describe('Location reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      latitude: 53.896507,
      longitude: 27.547596
    })
  });

  it('updates location with UPDATE_LOCATION action', () => {
    expect(reducer([], {
      type: ActionTypes.UPDATE_LOCATION,
      location: {
        latitude: 42,
        longitude: 43
      }
    })).toEqual({
      latitude: 42,
      longitude: 43
    })
  })
})
