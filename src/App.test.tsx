import React from "react";
import {
  render,
  fireEvent,
  screen,
  renderHook,
  act,
} from "@testing-library/react";
import App from "./App";
import { useAnagrams } from "./useAnagrams";

// test("should display anagrams of given input", () => {
//   render(<App />);
//   const nameInput = screen.getByLabelText(/Enter text/i);
//   fireEvent.change(nameInput, { target: { value: "ab" } });
//   fireEvent.click(screen.getByText(/submit/i));
//   const expectedAnagrams = ["ab", "ba"];
//   expectedAnagrams.forEach((anagram) => {
//     expect(document.body.innerHTML).toMatch(anagram);
//   });
// });

// test("should display anagrams of given input for biro", () => {
//   const nameInput = screen.getByLabelText(/Enter text/i);
//   fireEvent.change(nameInput, { target: { value: "biro" } });
//   fireEvent.click(screen.getByText(/submit/i));
//   const expectedAnagrams = [
//     "biro",
//     "bior",
//     "brio",
//     "broi",
//     "boir",
//     "bori",
//     "ibro",
//     "ibor",
//     "irbo",
//     "irob",
//     "iobr",
//     "iorb",
//     "rbio",
//     "rboi",
//     "ribo",
//     "riob",
//     "roib",
//     "robi",
//     "obir",
//     "obri",
//     "oibr",
//     "oirb",
//     "orbi",
//     "orib",
//   ];
//   expectedAnagrams.forEach((anagram) => {
//     expect(document.body.innerHTML).toMatch(anagram);
//   });
// });

describe("useAnagrams hook", () => {
  it("checking default state", () => {
    const { result } = renderHook(() => useAnagrams(""));
    expect(result.current.values().next().value).toBe("");
  });

  it("checking state updates", () => {
    const { result } = renderHook(() => useAnagrams(""));
    const [ anagram, updateAnagram ] = result.current;
    act(() => {
      updateAnagram("ab");
    });
    expect(result.current.values().next().value).toBe("ab ba");
  });
});
