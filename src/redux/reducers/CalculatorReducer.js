import { ADD_NUMBER } from '../actions/types';
import CalculatorLogic from './CalculatorLogic';
/* Remember that TEXT_CHANGED should be defined and must have a value otherwise it
  will be undefined and no error would popup and in the reducer we will have a
  case of undefined
  case undefined:
	 return ...
  which is not what we want.
  */

const INITIAL_STATE = {
	value: '',
	operation: ''
};

const calculatorLogic = new CalculatorLogic();

export default (state = INITIAL_STATE, action) => {
	const result = calculatorLogic.insert(action.type, action.value);
	//console.warn(`result: ${result}`);
	return { value: result };
};
