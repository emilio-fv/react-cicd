import React from 'react';
import Counter from './Counter';
import { render, cleanup, fireEvent, screen } from '@testing-library/react';

afterEach(() => {
  cleanup();
})

describe('Counter component', () => {
  test('Counter component display text with default initial value of 0 ', () => {
    // Arrange
    render(<Counter />)

    // Act
    const counterText = screen.getByText('Counter: 0')

    // Assert
    expect(counterText).toBeInTheDocument()
  });

  test('Counter component display text with initial value of 5', () => {
    render(<Counter initialValue={5}/>)

    const counterText = screen.getByText('Counter: 5');

    expect(counterText).toBeInTheDocument();
  });

  test('Decrement button decreases counter by 1', async () => {
    render(<Counter />)

    await fireEvent.click(screen.getByText('Decrement'))

    const counterText = screen.getByText('Counter: -1')

    expect(counterText).toBeInTheDocument()
  });

  test('Decrement by 5 button decreases counter by 5', async () => {
    render(<Counter />)

    await fireEvent.click(screen.getByText('Decrement by 5'))

    const counterText = screen.getByText('Counter: -5')

    expect(counterText).toBeInTheDocument()
  })

  test('Increment button increases counter by 1', async () => {
    render(<Counter />)

    await fireEvent.click(screen.getByText('Increment'))

    const counterText = screen.getByText('Counter: 1');

    expect(counterText).toBeInTheDocument()
  });

  test('Increment by 5 button increases counter by 5', async () => {
    render(<Counter />)

    await fireEvent.click(screen.getByText('Increment by 5'))

    const counterText = screen.getByText('Counter: 5')

    expect(counterText).toBeInTheDocument()
  })

  test('Reset button sets counter to 0 with initial value of 5', async () => {
    render(<Counter initialValue={5}/>)

    await fireEvent.click(screen.getByText('Reset'))

    const counterText = screen.getByText('Counter: 0')

    expect(counterText).toBeInTheDocument()
  });
})