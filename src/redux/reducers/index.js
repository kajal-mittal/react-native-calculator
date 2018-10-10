import { combineReducers } from 'redux';
import CalculatorReducer from './CalculatorReducer';

export default combineReducers({
	// the keys here are going to be the property of state that we are producing.
	calculator_reducer: CalculatorReducer
});
