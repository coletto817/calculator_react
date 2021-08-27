import React, { useState } from "react";

function App() {
  const [firstInputValue, setFirstInputValue] = useState("");
  const [secondInputValue, setSecondInputValue] = useState("");

  const onFirstInputChange = (event) => {
    const firstInputValue = event.target.value;
    console.log("value of firstInput:", firstInputValue);
    setFirstInputValue(firstInputValue);
  };

  const onSecondInputChange = (event) => {
    const secondInputValue = event.target.value;
    console.log("value of secondInput:", secondInputValue);
    setSecondInputValue(secondInputValue);
  };

  return (
    <div className="App" style={{ margin: 10 }}>
      <form>
        <input
          type="number"
          value={firstInputValue}
          name="firstNumber"
          onChange={onFirstInputChange}
        />
        <select>
          <option value="+">+</option>
          <option value="-">-</option>
          <option value="*">*</option>
          <option value="/">/</option>
        </select>
        <input
          type="number"
          name="secondNumber"
          value={secondInputValue}
          onChange={onSecondInputChange}
        />
        <button>=</button>
      </form>
    </div>
  );
}

export default App;
