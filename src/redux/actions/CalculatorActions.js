import { ADD_NUMBER, OPERATION } from './types';
export const number = number => {
	return {
		type: ADD_NUMBER,
		number: number
	};
};
export const operation = operation => {
	return {
		type: OPERATION,
		operation: operation
	};
};
