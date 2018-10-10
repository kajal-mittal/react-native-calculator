/** @format */

import { AppRegistry } from 'react-native';
import Calculator from './Calculator';
import { name as appName } from './app.json';

import React, { PureComponent } from 'react';

import { Provider } from 'react-redux';
import store from './src/redux/store';

class RNRedux extends PureComponent {
	render() {
		return (
			<Provider store={store}>
				<Calculator />
			</Provider>
		);
	}
}
AppRegistry.registerComponent(appName, () => RNRedux);
