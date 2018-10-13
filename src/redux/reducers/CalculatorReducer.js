import CalculatorLogic from './CalculatorLogic';

const INITIAL_STATE = {
	value: ''
};

const calculatorLogic = new CalculatorLogic();

export default (state = INITIAL_STATE, action) => {
	/*
			slice of state (that the reducer last published)  +  action
						   |
					  into the reducer
						   |
				returns a new slice of state
		 After our reducer runs, redux looks at the old value of the state and the
		 new one. `is newState === oldState?` (matches the object) we must return a
		 new object. (have to take care of immutable objects)
		 Make a new object, take all the properties from the existing state object
		 and throw that into our new object then define the property `text`, give it
		 a value of action.payload and put it one top of whatever properties we had
		 on the old state object.
		 Now, since old state object already has a text property so, it will be
		 overwritten with a new value.
		 */

	const result = calculatorLogic.insert(action.type, action.value);
	return { value: result };
};
