import { useState } from "react";

export function useAnagrams(input: any) {
  const [anagram, setState] = useState(input);

  const updateAnagram = (input: string) => {
    const newVal = input .split("")
    .map((character: string, index: number) => {
      const head = input.slice(0, index);
      const tail = input.substring(index + 1);
      const result: string[] = [];
      for (let nextCharInTail of head) {
        result.push(character + nextCharInTail);
      }
      for (let nextCharInTail of tail) {
        result.push(character + nextCharInTail);
      }
      return result;
    })
    .join(" ");

    setState(newVal);
  }

  return [anagram, updateAnagram ];
}
