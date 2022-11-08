import React, { useRef } from 'react';
import "./App.css";
import { useAnagrams } from "./useAnagrams";

function App() {
  const [displayOutput, setDisplayMessage] = React.useState(false);
  const input = useRef("");
  const [anagram, updateAnagram] = useAnagrams("");

  const update = () => {
    updateAnagram(input.current);
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
        onChange={(event) => input.current = event.currentTarget.value}
      />
      <button onClick={() => update()} className="padding">
        Submit
      </button>
      {displayOutput && <p className="item">{input.current}</p>}
      {displayOutput && <p className="item">{anagram}</p>}
    </div>
  );
}
export default App;