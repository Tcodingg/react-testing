import React from 'react';
import Counter from '../counter/Counter';
import {
	getByTestId,
	render,
	fireEvent,
	getByDisplayValue,
} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

test('header renders with correct text', () => {
	// const component = render(<Counter />);
	// const headerEl = component.getByTestId('header');

	//second method -> destructure the getByTestId from render
	const { getByTestId } = render(<Counter />);
	const headerEl = getByTestId('header');

	expect(headerEl.textContent).toBe('Counter');
});

test('counter initially start with text of 1', () => {
	const { getByTestId } = render(<Counter />);
	const counterEl = getByTestId('counter');
	expect(counterEl.textContent).toBe('1');
});

test('add button renders with +', () => {
	const { getByTestId } = render(<Counter />);
	const counterEl = getByTestId('add-button');
	expect(counterEl.textContent).toBe('+');
});
test('subtract button renders with -', () => {
	const { getByTestId } = render(<Counter />);
	const counterEl = getByTestId('subtract-button');
	expect(counterEl.textContent).toBe('-');
});
test('input countains 1 initially', () => {
	const { getByTestId } = render(<Counter />);
	const counterEl = getByTestId('input');
	expect(counterEl.value).toBe(1);
});
test('change of input value event', () => {
	const { getByTestId } = render(<Counter />);
	const inputEl = getByTestId('input');
	fireEvent.change(inputEl, {
		target: {
			value: '1',
		},
	});
	expect(inputEl.value).toBe('1');
});

test('increase counter value by 1 when add button is clicked', () => {
	const { getByTestId } = render(<Counter />);
	const btnEl = getByTestId('add-button');
	const counterEl = getByTestId('counter');

	expect(counterEl.textContent).toBe(0);
	fireEvent.click(btnEl);
	expect(counterEl.textContent).toBe(1);
});
test('decrease counter value by 1 when subtract button is clicked', () => {
	const { getByTestId } = render(<Counter />);
	const btnEl = getByTestId('subtract-button');
	const counterEl = getByTestId('counter');

	expect(counterEl.textContent).toBe(0);
	fireEvent.click(btnEl);
	expect(counterEl.textContent).toBe(-1);
});

test('change the counter color from green to red when counter value is > 5', () => {
	const { getByTestId } = render(<Counter />);
	const btnEl = getByTestId('add-button');
	const counterEl = getByTestId('counter');

	fireEvent.click(btnEl);
	fireEvent.click(btnEl);
	fireEvent.click(btnEl);
	fireEvent.click(btnEl);
	fireEvent.click(btnEl);
	expect(counterEl.className).toBe('red');
});
