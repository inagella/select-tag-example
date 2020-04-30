import React from "react";
import "./styles.css";

export default function App() {
  // const [value, setValue] = React.useState(["m", "gp"]); //You can pass an array into the value attribute, allowing you to select multiple options in a select tag
  const [value, setValue] = React.useState("m");
  function handleChange(event) {
    setValue(event.target.value);
  }

  function handleSubmit(event) {
    alert("You Chose : " + value);
    event.preventDefault(); //if you dont use this... after alert the select will show the default value instead the selected value
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Please Select your favourite flavour :
        <select
          multiple={false}
          /* multiple = {true} can be used when you pass value as an array*/ value={
            value
          }
          onChange={handleChange}
        >
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
