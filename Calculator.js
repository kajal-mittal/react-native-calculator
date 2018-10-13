/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import Button from './Button';
import CalculatorOutputDisplay from './CalculatorOutputDisplay';

export default class Calculator extends Component {
	render() {
		return (
			<View style={styles.container}>
				<View style={styles.outputContainer}>
					<CalculatorOutputDisplay />
				</View>
				<View style={styles.actionContainer}>
					<View style={styles.row}>
						{this.renderNumberButton('7')}
						{this.renderNumberButton('8')}
						{this.renderNumberButton('9')}
						{this.renderActionButton('*')}
					</View>
					<View style={styles.row}>
						{this.renderNumberButton('4')}
						{this.renderNumberButton('5')}
						{this.renderNumberButton('6')}
						{this.renderActionButton('-')}
					</View>
					<View style={styles.row}>
						{this.renderNumberButton('1')}
						{this.renderNumberButton('2')}
						{this.renderNumberButton('3')}
						{this.renderActionButton('+')}
					</View>
					<View style={styles.row}>
						{this.renderNumberButton('0')}
						{this.renderActionButton('=')}
						{this.renderActionButton('/')}
						{this.renderActionButton('C')}
					</View>
				</View>
			</View>
		);
	}
	renderNumberButton(value) {
		return (
			<Button
				style={[
					styles.circle,
					{
						backgroundColor: '#333333',
						width: 60,
						height: 60,
						borderRadius: 30,
						margin: 10
					}
				]}
				textStyle={{ color: 'white', fontSize: 24, fontWeight: 'bold' }}
				text={value}
				type={'NUMBER'}
			/>
		);
	}
	renderActionButton(operation) {
		return (
			<Button
				style={[
					styles.square,
					{
						backgroundColor: 'orange',
						width: 60,
						height: 60,
						borderRadius: 30,
						margin: 10
					}
				]}
				textStyle={{ color: 'white', fontSize: 30, fontWeight: 'bold' }}
				text={operation}
				type={'OPERATION'}
			/>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column'
	},
	actionContainer: {
		flex: 0.7,
		backgroundColor: 'black',
		justifyContent: 'center',
		alignItems: 'center'
	},
	outputContainer: {
		flex: 0.3,
		backgroundColor: '#333333',
		justifyContent: 'center',
		alignItems: 'center'
	},
	circle: {
		borderStyle: 'solid',
		borderRightWidth: 1,
		borderBottomWidth: 1
	},
	row: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center'
	}
});
