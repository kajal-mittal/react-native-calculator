export const performAction = action => {
	return {
		type: action.type,
		value: action.value
	};
};
