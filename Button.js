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

export default class Button extends Component {
	render() {
		const { style, text, textStyle, onPress } = this.props;

		return (
			<TouchableOpacity style={[style]}>
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
