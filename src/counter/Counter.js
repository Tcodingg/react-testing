import React, { useState } from 'react';

export default function Counter() {
	const [counterValue, setCounterValue] = useState(0);
	const [inputValue, setInputValue] = useState(0);
	return (
		<div>
			<h1 data-testid='header'>Counter</h1>
			<h1 data-testid='counter'>
				{() => setCounterValue(inputValue + counterValue)}
			</h1>
			<button data-testid='add-button'>+</button>
			<input data-testid='input' type='number' value={inputValue} />
			<button data-testid='subtract-button'>-</button>
		</div>
	);
}
