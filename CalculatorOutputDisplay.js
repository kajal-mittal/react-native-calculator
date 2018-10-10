import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class CalculatorOutputDisplay extends Component {
	render() {
		return (
			<View
				style={{
					backgroundColor: '#333333',
					height: 200,
					width: '100%',
					alignItems: 'center',
					justifyContent: 'center'
				}}
			>
				<Text style={{ color: 'white', fontSize: 50, fontWeight: 'bold', alignItems: 'center' }}>0</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({});
