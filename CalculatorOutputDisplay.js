import React, { Component } from 'react';
import { StyleSheet, View, Text, ScrollView, Platform, Dimensions } from 'react-native';
import { connect } from 'react-redux';
const { height } = Dimensions.get('window');

class CalculatorOutputDisplay extends Component {
	render() {
		return (
			<ScrollView centerContent={true}>
				<Text style={styles.textStyle}>{this.props.value}</Text>
			</ScrollView>
		);
	}
}

const styles = StyleSheet.create({
	textStyle: {
		color: 'white',
		fontSize: 50,
		fontWeight: 'bold',
		...Platform.select({
			ios: {
				padding: height === 812 ? 30 : 20
			},
			android: {
				padding: 20
			}
		})
	}
});
// Pass it as the first argument to our connect function.
const mapStateToProps = state => {
	return {
		value: state.calculator_reducer.value
	};
};

export default connect(mapStateToProps)(CalculatorOutputDisplay);
