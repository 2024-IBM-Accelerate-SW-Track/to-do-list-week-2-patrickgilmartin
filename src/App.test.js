import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('test that App component renders', () => {
  render(<App />);
});

test('test that new-item-button is a button', () => {
  render(<App />);
  const element = screen.getByTestId('new-item-button');
  expect(element).toBeInTheDocument();
});

test('test that new-item-textfield is a textfield', () => {
  render(<App />);
  const element = screen.getByTestId('new-item-textfield');
  expect(element).toBeInTheDocument();
});

test('renders Todos component with empty todo list', () => {
  render(<App />);
  expect(screen.getByText("You have no todo's left")).toBeInTheDocument();
});

test('test that App component doesn\'t add a blank task', () => {
  render(<App />);
  const addButton = screen.getByTestId('new-item-button');
  fireEvent.click(addButton);
  expect(screen.queryByText("No Due Date Task")).not.toBeInTheDocument();
});



