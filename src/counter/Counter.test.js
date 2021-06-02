import React from 'react';
import Counter from '../counter/Counter';
import { getByTestId, render } from '@testing-library/react';
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
	expect(counterEl.textContent).toBe(1);
});
