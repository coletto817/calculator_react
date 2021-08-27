import React, { useState } from "react";

function App() {
  const [firstInputValue, setFirstInputValue] = useState("");

  const onFirstInputChange = (event) => {
    const firstInputValue = event.target.value;
    console.log("value of firstInput:", firstInputValue);
    setFirstInputValue(firstInputValue);
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
        <input type="number" name="secondNumber" />
        <button>=</button>
      </form>
    </div>
  );
}

export default App;
