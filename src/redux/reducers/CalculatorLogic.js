class CalculatorLogic {
	firstValue = '';
	secondValue = '';
	operation = '';

	insert = (type, value) => {
		if (this.firstValue === 'undefined') {
			this.resetFirstValue();
		}

		switch (type) {
			case 'NUMBER':
				this.numberInsert(value);
				break;
			case 'OPERATION':
				this.operationInsert(value);
				break;
		}

		if (this.isFirstValueEmpty() && this.isSecondValueEmpty() && this.isOperationEmpty()) {
			return '0';
		}

		return `${this.firstValue}${this.operation}${this.secondValue}`;
	};

	numberInsert = number => {
		if (this.isSecondValueEmpty() && this.isOperationEmpty()) {
			this.pushFirstValue(number);
		} else if (!this.isOperationEmpty()) {
			this.pushSecondValue(number);
		}
	};

	operationInsert = operation => {
		if (operation === 'C') {
			this.resetFirstValue();
			this.resetSecondValue();
			this.resetOperation();
			return;
		}

		// //	Check if first value and second value are not empty.
		if (this.isFirstValueEmpty() && this.isSecondValueEmpty()) {
			return;
		}

		if (!this.isFirstValueEmpty() && !this.isSecondValueEmpty()) {
			this.firstValue = this.performCalculation();
			this.resetSecondValue();
			if (operation === '=' || this.firstValue === 'undefined') {
				this.resetOperation();
			} else {
				this.pushOperation(operation);
			}
		} else if (operation !== '=') {
			this.pushOperation(operation);
		}
	};

	performCalculation = () => {
		const first = Number(this.firstValue);
		const second = Number(this.secondValue);

		const add = () => {
			const result = first + second;
			return String(result);
		};

		const subtract = () => {
			const result = first - second;
			return String(result);
		};

		const multiply = () => {
			const result = first * second;
			return String(result);
		};

		const divide = () => {
			if (second === 0) return 'undefined';
			const result = first / second;
			return String(result);
		};

		switch (this.operation) {
			case '+':
				return add();
			case '-':
				return subtract();
			case '*':
				return multiply();
			case '%':
				return divide();
			default:
				throw new Error(`Invalid operation: ${this.operation}`);
		}
	};

	pushFirstValue = value => {
		this.firstValue += value;
	};

	pushSecondValue = value => {
		this.secondValue += value;
	};

	pushOperation = operation => {
		this.operation = operation;
	};

	resetFirstValue = () => {
		this.firstValue = '';
	};

	resetSecondValue = () => {
		this.secondValue = '';
	};

	resetOperation = () => {
		this.operation = '';
	};

	isFirstValueEmpty = () => this.firstValue === '';

	isSecondValueEmpty = () => this.secondValue === '';

	isOperationEmpty = () => this.operation === '';
}

export default CalculatorLogic;
