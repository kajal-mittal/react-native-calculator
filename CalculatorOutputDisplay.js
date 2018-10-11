import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { connect } from 'react-redux';

class CalculatorOutputDisplay extends Component {
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
				<Text style={{ color: 'white', fontSize: 50, fontWeight: 'bold', alignItems: 'center' }}>
					{this.props.value}
				</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({});
// Pass it as the first argument to our connect function.
const mapStateToProps = state => {
	return {
		value: state.calculator_reducer.value
	};
};

export default connect(mapStateToProps)(CalculatorOutputDisplay);
