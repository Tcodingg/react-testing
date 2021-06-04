import React, { useState } from 'react';
import '../style.css';

export default function Counter() {
	const [counterValue, setCounterValue] = useState(0);
	const [inputValue, setInputValue] = useState(0);
	return (
		<div>
			<h1 data-testid='header'>Counter</h1>
			<h1 data-testid='counter' className={counterValue > 5 ? 'red' : 'green'}>
				{counterValue}
			</h1>
			<button
				data-testid='add-button'
				onClick={() => setCounterValue(counterValue + 1)}
			>
				+
			</button>
			<input data-testid='input' type='number' value={inputValue} />
			<button
				data-testid='subtract-button'
				onClick={() => setCounterValue(counterValue - 1)}
			>
				-
			</button>
		</div>
	);
}
