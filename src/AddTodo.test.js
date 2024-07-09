import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('test that App component renders Task', () => {
  render(<App />);
  const inputTask = screen.getByRole('textbox', { name: /Add New Item/i });
  const inputDate = screen.getByPlaceholderText('mm/dd/yyyy');
  const addButton = screen.getByRole('button', { name: /Add/i });
  const dueDate = '05/30/2023';

  fireEvent.change(inputTask, { target: { value: 'History Test' } });
  fireEvent.change(inputDate, { target: { value: dueDate } });
  fireEvent.click(addButton);

  const check = screen.getByText(/History Test/i);
  const checkDate = screen.getByText(new RegExp(dueDate.replace(/\//g, '\\/'), 'i'));

  expect(check).toBeInTheDocument();
  expect(checkDate).toBeInTheDocument();
});


test('No duplicate task', () => {
  render(<App />);
  const inputTask = screen.getByRole('textbox', { name: /Add New Item/i });
  const inputDate = screen.getByPlaceholderText('mm/dd/yyyy');
  const addButton = screen.getByRole('button', { name: /Add/i });
  const task = 'Duplicate Task';
  const dueDate = '06/25/2024';

  fireEvent.change(inputTask, { target: { value: task } });
  fireEvent.change(inputDate, { target: { value: dueDate } });
  fireEvent.click(addButton);
  fireEvent.change(inputTask, { target: { value: task } });
  fireEvent.change(inputDate, { target: { value: dueDate } });
  fireEvent.click(addButton);

  const tasks = screen.getAllByText(new RegExp(task, 'i'));
  expect(tasks.length).toBe(1);
});

test('Submit Task with No Due Date', () => {
  render(<App />);
  const inputTask = screen.getByRole('textbox', { name: /Add New Item/i });
  const addButton = screen.getByRole('button', { name: /Add/i });
  const task = 'No Due Date Task';

  fireEvent.change(inputTask, { target: { value: task } });
  fireEvent.click(addButton);

  const taskElement = screen.queryByText(new RegExp(task, 'i'));
  expect(taskElement).not.toBeInTheDocument();
});

test('Submit Task with No Task Name', () => {
  render(<App />);
  const inputDate = screen.getByPlaceholderText('mm/dd/yyyy');
  const addButton = screen.getByRole('button', { name: /Add/i });
  const dueDate = '06/25/2024';

  fireEvent.change(inputDate, { target: { value: dueDate } });
  fireEvent.click(addButton);

  const taskElement = screen.queryByText(new RegExp(dueDate, 'i'));
  expect(taskElement).not.toBeInTheDocument();
});

test('Late Tasks have Different Colors', () => {
  render(<App />);
  const inputTask = screen.getByRole('textbox', { name: /Add New Item/i });
  const inputDate = screen.getByPlaceholderText('mm/dd/yyyy');
  const addButton = screen.getByRole('button', { name: /Add/i });
  const task = 'Overdue Task';
  const dueDate = '01/01/2020'; 

  fireEvent.change(inputTask, { target: { value: task } });
  fireEvent.change(inputDate, { target: { value: dueDate } });
  fireEvent.click(addButton);

  const taskCard = screen.getByTestId(new RegExp(task, 'i'));
  expect(taskCard).toHaveStyle('background-color: rgb(255, 204, 204)'); 
});



test('Delete Task', () => {
  render(<App />);
  const inputTask = screen.getByRole('textbox', { name: /Add New Item/i });
  const inputDate = screen.getByPlaceholderText('mm/dd/yyyy');
  const addButton = screen.getByRole('button', { name: /Add/i });
  const task = 'Task to Delete';
  const dueDate = '06/25/2024';

  fireEvent.change(inputTask, { target: { value: task } });
  fireEvent.change(inputDate, { target: { value: dueDate } });
  fireEvent.click(addButton);

  const deleteCheckbox = screen.getByRole('checkbox');
  fireEvent.click(deleteCheckbox);

  const taskElement = screen.queryByText(new RegExp(task, 'i'));
  expect(taskElement).not.toBeInTheDocument();
});
