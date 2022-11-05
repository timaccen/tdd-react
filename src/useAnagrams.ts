import { useState } from "react";

export function useAnagrams(input: any) {
  const [anagram, setState] = useState(input);

  const updateAnagream = (input: string) => {
    const newVal = input + ' hi';
    setState(newVal);
  }

  return [anagram, updateAnagream ];
}
