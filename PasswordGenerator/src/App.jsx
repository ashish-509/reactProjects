import { useState, useCallback, useEffect, useRef } from "react";


function App() {

  const [length, setLength] = useState(10);
  const [numberAllowed, setNumberAllowed] = useState(true);
  const [charAllowed, setCharAllowed] = useState(true);
  const [password, setPassword] = useState("");

  //useRef hook
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {

    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*-_+=[]{}~`";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1); // generates the random index within the length of combined string.
      pass += str.charAt(char); // appends the character at random index to the password.
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);

  const copyPasswordToClipboard = useCallback(() => {

    passwordRef.current?.select();
    // passwordRef.current?.setSelectionRange(0, 999); //for copying only the certain range of password to clipboard.
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);


  return (

    <div className="App pt-8 text-center">

      <h1 className="font-bold text-4xl text-orange-500 pt-12 pb-12">
        React Password Generator
      </h1>

      <input
        type="text"
        value={password}
        placeholder="Your Password will be generated here."
        className="text-2xl text-black-500 p-2 bg-white w-3/5 mx-auto text-center rounded-l-2xl"
        readOnly
        ref={passwordRef}
      />

      <button
        className="text-white bg-blue-700 text-2xl p-2 rounded-r-2xl"
        onClick={copyPasswordToClipboard}
      >
        Copy
      </button> 

      <div className="pt-8 flex-grow">
        <input
          type="range"
          min={6}
          max={50}
          value={length}
          className="cursor-pointer"
          onChange={(e) => {
            setLength(e.target.value);
          }}
        />
        <label className="text-orange-500 pr-2">Length: {length}</label>

        <input
          type="checkbox"
          defaultChecked={numberAllowed}
          id="numberInput"
          onChange={() => {
            setNumberAllowed((prev) => !prev);
          }}
        />
        <label htmlFor="numberInput" className="text-orange-500 pr-2">Numbers</label>

        <input
          type="checkbox"
          defaultChecked={charAllowed}
          id="characterInput"
          onChange={() => {
            setCharAllowed((prev) => !prev);
          }}
        />
        <label htmlFor="characterInput" className="text-orange-500 pr-2">Characters</label>
      </div>

    </div>
  );
}

export default App;
