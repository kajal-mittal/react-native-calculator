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
import { Colors, ViewStyles } from './src/theme';
export default class Calculator extends Component {
	render() {
		return (
			<View style={styles.container}>
				<View style={styles.outputContainer}>
					<CalculatorOutputDisplay />
				</View>
				<View style={styles.actionContainer}>
					<View style={ViewStyles.row}>
						{this.renderNumberButton('7')}
						{this.renderNumberButton('8')}
						{this.renderNumberButton('9')}
						{this.renderActionButton('*')}
					</View>
					<View style={ViewStyles.row}>
						{this.renderNumberButton('4')}
						{this.renderNumberButton('5')}
						{this.renderNumberButton('6')}
						{this.renderActionButton('-')}
					</View>
					<View style={ViewStyles.row}>
						{this.renderNumberButton('1')}
						{this.renderNumberButton('2')}
						{this.renderNumberButton('3')}
						{this.renderActionButton('+')}
					</View>
					<View style={ViewStyles.row}>
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
					ViewStyles.circle,
					{
						backgroundColor: Colors.COLOR_NUMBER_BUTTON
					}
				]}
				textStyle={{ color: Colors.COLOR_WHITE, fontSize: 24, fontWeight: 'bold' }}
				text={value}
				type={'NUMBER'}
			/>
		);
	}
	renderActionButton(operation) {
		return (
			<Button
				style={[
					ViewStyles.circle,
					{
						backgroundColor: Colors.COLOR_ACTION_BUTTON
					}
				]}
				textStyle={{ color: Colors.COLOR_WHITE, fontSize: 30, fontWeight: 'bold' }}
				text={operation}
				type={'OPERATION'}
			/>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		...ViewStyles.container,
		flexDirection: 'column'
	},
	actionContainer: {
		flex: 0.7,
		backgroundColor: Colors.COLOR_BLACK,
		justifyContent: 'center',
		alignItems: 'center'
	},
	outputContainer: {
		flex: 0.3,
		backgroundColor: '#333333',
		justifyContent: 'center',
		alignItems: 'center'
	}
});
