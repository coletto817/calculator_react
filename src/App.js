import React from "react";

const onFirstInputChange = (event) => {
  console.log("value of firstInput:", event.target.value);
};

function App() {
  return (
    <div className="App" style={{ margin: 10 }}>
      <form>
        <input type="number" name="name" onChange={onFirstInputChange} />
        <select>
          <option value="grapefruit">+</option>
          <option value="lime">-</option>
          <option selected value="coconut">
            *
          </option>
          <option value="mango">/</option>
        </select>
        <input type="number" name="name" />
        <button>=</button>
      </form>
    </div>
  );
}

export default App;
