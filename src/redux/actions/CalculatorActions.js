import { ADD_NUMBER, OPERATION } from './types';
export const performAction = action => {
	return {
		type: action.type,
		value: action.value
	};
};
