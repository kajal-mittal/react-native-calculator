import React, { Component } from 'react';
import {
	GestureResponderEvent,
	StyleProp,
	StyleSheet,
	Text,
	TextStyle,
	TouchableOpacity,
	View,
	ViewStyle
} from 'react-native';
import { connect } from 'react-redux';
import * as actions from './src/redux/actions';

class Button extends Component {
	render() {
		const { style, text, textStyle, onPress, type } = this.props;

		return (
			<TouchableOpacity
				style={[style]}
				onPress={() => {
					let value = {
						type: type,
						value: text
					};
					this.props.value(value);
				}}
			>
				<View style={styles.container}>
					<Text style={textStyle}>{text}</Text>
				</View>
			</TouchableOpacity>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	}
});
const mapStateToProps = state => {
	return {
		value: state.calculator_reducer.value
	};
};
const mapDispatchToProps = dispatch => {
	return {
		value: value => dispatch(actions.performAction(value))
	};
};
// Pass it as the first argument to our connect function.

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Button);
