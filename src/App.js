import React from "react";
import "./styles.css";

export default function App() {
  const [value, setValue] = React.useState("m");
  function handleChange(event) {
    setValue(event.target.value);
  }

  function handleSubmit(event) {
    alert("You Chose : " + value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Please Select your favourite flavour :
        <select value={value} onChange={handleChange}>
          <option value="gp">grapefruit</option>
          <option value="orange">orange</option>
          <option value="le">lemon</option>
          <option value="li">lime</option>
          <option value="m">mosambi</option>
        </select>
      </label>
      <button type="submit">submit</button>
    </form>
  );
}
