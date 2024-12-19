import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  // Initialize state for the counter, starting at 0
  const [count, setCount] = useState(0);

  // Function to handle button click and increment the counter
  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      {/* Displaying the current count in the paragraph */}
      <p>Button clicked {count} times</p>
      {/* Button to trigger the counter increment */}
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default App;
