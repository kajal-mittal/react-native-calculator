const Colors = {
	COLOR_BLACK: 'rgb(0,0,0)',
	COLOR_WHITE: 'rgb(255,255,255)',
	COLOR_ACTION_BUTTON: 'orange',
	COLOR_NUMBER_BUTTON: '#333333'
};
const ViewStyles = {
	circle: {
		borderStyle: 'solid',
		borderRightWidth: 1,
		borderBottomWidth: 1,
		width: 60,
		height: 60,
		borderRadius: 30,
		margin: 10
	},
	container: {
		flex: 1
	},
	row: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center'
	}
};
module.exports = {
	Colors,
	ViewStyles
};
