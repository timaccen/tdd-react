import { useState } from "react";

let wordStore: string[] = [];

export function useAnagrams(input: any) {
  const [anagram, setAnagram] = useState(input);
  const updateAnagram = (word: string) => {
    const letters = word.split("");
  letters.forEach((letter) => {
    const dwindlingSupplyOfLetters = removeOneLetter(letters, letter);
    console.log(`letter: ${letter}`)
    console.log(`dwindlingSupplyOfLetters: ${dwindlingSupplyOfLetters}`)
    chooseAndPass(letter, dwindlingSupplyOfLetters);
  });
    setAnagram(wordStore.join(" "));
  }
  return [anagram, updateAnagram];
}

function chooseAndPass(wordString: string, remainingLetters: any) {
  console.log(`remainingLetters: ${remainingLetters}`)
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

/**
 * 
 * @param remainingLetters string array of remaining letters
 * @param letter 
 * @returns Boolean
 */
function removeOneLetter(remainingLetters: string[], letter: any) {
  let removed = false;
  return remainingLetters.filter((currentLetter: any) => {
    if (currentLetter === letter && !removed) {
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
