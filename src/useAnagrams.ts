import { useState } from "react";

export function useAnagrams(input: any) {
  const [anagram, setState] = useState(input);

  const getPossibleCombos = (input: string[]): any[] => {
    const result = [] as any[];
    input.map((character: string, index: number) => {
      const firstCharacter = character;
      if (index+1 < input.length){
        const secondCharacter = input.slice(index+1, index+2);
        console.log(`firstcharacter: ${firstCharacter}`)
        console.log(`secondcharacter: ${secondCharacter}`)
        const swap = [secondCharacter, firstCharacter].splice(index+2, input.length)
        result.push(firstCharacter+secondCharacter)
        result.push(secondCharacter+firstCharacter)
      }
    })
    return result
  }

  const updateAnagram = (input: string) => {
    const newVal = input.split("")
    .map((character: string, index: number) => {
      console.log(`index: ${index}`)
      const head = input.slice(0, index); 
      console.log(`head: ${head}`)
      const tail = input.substring(index, input.length).split('');
      console.log(`Tail ${tail}`)
      const result: string[] = [];
      if(head.length > 0){
        for (let nextCharInTail of head) {
          const possibleCombo = getPossibleCombos(tail)
          console.log(`possibleCombo: ${possibleCombo}`)
          for(let combo of possibleCombo){
            result.push(head[0] + combo)
          }
        }
      }
      // for (let nextCharInTail of tail) {
      //   result.push(character + nextCharInTail);
      // }
      console.log(`result: ${result}`)
      return result;
    })
    .join(" ");

    setState(newVal);
  }

  return [anagram, updateAnagram ];
}
