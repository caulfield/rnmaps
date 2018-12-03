/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider, connect } from 'react-redux';
import logger from 'redux-logger'
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { middleware } from './src/utils/redux';

import AppContainer from './src/containers/AppContainer'
import AppReducer from './src/reducers';

const store = createStore(
  AppReducer,
  composeWithDevTools(applyMiddleware(thunk, middleware, logger))
)

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}
