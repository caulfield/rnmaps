import {
  reduxifyNavigator,
  createReactNavigationReduxMiddleware,
  createNavigationReducer,
} from 'react-navigation-redux-helpers';

import { AppNavigator } from './../containers/AppContainer'

const reducer = createNavigationReducer(AppNavigator)

export default reducer
