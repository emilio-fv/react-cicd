import React from 'react';
import Counter from './Counter';
import { render, cleanup, fireEvent, screen } from '@testing-library/react';

afterEach(() => {
  cleanup();
})

describe('Counter component', () => {
  test('Counter component display text with default initial value of 0 ', () => {
    // Arrange
    render(<Counter />);

    // Act
    const counterText = screen.getByText(/Counter: 0/i);

    // Assert
    expect(counterText).toBeInTheDocument();
  });

  test('Counter component display text with initial value of 5', () => {
    render(<Counter initialValue={5}/>)

    const counterText = screen.getByText(/Counter: 5/i);

    expect(counterText).toBeInTheDocument();
  });

  test('Increment button increases counter by 1', async () => {
    render(<Counter />)

    await fireEvent.click(screen.getByText(/Increment/i))

    const counterText = screen.getByText(/Counter: 1/i);

    expect(counterText).toBeInTheDocument();
  });

  test('Decrement button decreases counter by 1', async () => {
    render(<Counter />)

    await fireEvent.click(screen.getByText(/Decrement/i))

    const counterText = screen.getByText(/Counter: -1/i);

    expect(counterText).toBeInTheDocument();
  });

  test('Reset button sets counter to 0 with initial value of 5', async () => {
    render(<Counter initialValue={5}/>)

    await fireEvent.click(screen.getByText(/Reset/i))

    const counterText = screen.getByText(/Counter: 0/i);

    expect(counterText).toBeInTheDocument();
  });
})