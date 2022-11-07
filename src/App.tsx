import React from "react";
import "./App.css";
import { useAnagrams } from "./useAnagrams";

function App() {
  const [displayOutput, setDisplayMessage] = React.useState(false);
  const [input, setOutput] = React.useState("");
  const [anagram, updateAnagram] = useAnagrams("");

  const update = () => {
    console.log('old value', anagram);
    updateAnagram(input);
    console.log('new value', anagram);
    setDisplayMessage(true);
  }

  return (
    <div className="App">
      <label htmlFor="name" className="item padding">
        Enter text
      </label>
      <input
        id="name"
        type="text"
        className="padding"
        onChange={(event) => setOutput(event.currentTarget.value)}
      />
      <button onClick={() => update()} className="padding">
        Submit
      </button>
      {displayOutput && <p className="item">{input}</p>}
      {displayOutput && <p className="item">{anagram}</p>}
    </div>
  );
}
export default App;