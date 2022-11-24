import { useState } from "react";

let wordStore: string[] = [];

export function useAnagrams(input: any) {
  const [anagram, setState] = useState(input);
  const updateAnagram = (word: string) => {
    const letters = word.split("");
  letters.forEach((letter) => {
    const dwindlingSupplyOfLetters = removeOneLetter(letters, letter);
    chooseAndPass(letter, dwindlingSupplyOfLetters);
  });
    setState(wordStore.join(" "));
  }
  return [anagram, updateAnagram];
}

function chooseAndPass(wordString: string, remainingLetters: any) {
  if (remainingLetters.length === 0) {
    addWordToWordstore(wordString);
  } else {
    remainingLetters.forEach((newLetter: any) => {
      const newWordString = wordString + newLetter;
      const dwindlingSupplyOfLetters = removeOneLetter(
        remainingLetters,
        newLetter
      );
      chooseAndPass(newWordString, dwindlingSupplyOfLetters);
    });
  }
}

function removeOneLetter(remainingLetters: any, letter: any) {
  let removed = false;
  return remainingLetters.filter((currentItem: any) => {
    if (currentItem === letter && !removed) {
      removed = true;
      return false;
    } else {
      return true;
    }
  });
}

function addWordToWordstore(newWord: any) {
  if (!wordStore.includes(newWord)) {
    wordStore.push(newWord);
  }
  wordStore.sort();
} 
