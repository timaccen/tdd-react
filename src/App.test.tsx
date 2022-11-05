import React from 'react';
import { render, fireEvent, screen } from "@testing-library/react";
import App from './App';

test('should display anagrams of given input', () => {
  render(<App />);
  const nameInput = screen.getByLabelText(/Enter text/i);
  fireEvent.change(nameInput, {target: {value: "ab"}});
  fireEvent.click(screen.getByText(/submit/i));  
  const expectedAnagrams = [
    'ab', 'ba'
  ];
  expectedAnagrams.forEach((anagram) => {
    expect(document.body.innerHTML).toMatch(anagram);
  })
});
