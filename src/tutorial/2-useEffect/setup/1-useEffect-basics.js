import React, { useState, useEffect } from "react";
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [value, setValue] = useState(0);
  //   useEffect(() => {
  //     console.log("unutra");
  //     if (value >= 5) {
  //       document.title = `nove poruke (${value})`;
  //     }
  //   }, [value]);
  //   console.log("vani");
  useEffect(() => {
    console.log("druga");
  }, [value]);

  return (
    <div>
      <h2>{value}</h2>
      <button className="btn" onClick={() => setValue(value + 1)}>
        dugmee
      </button>
    </div>
  );
};

export default UseEffectBasics;
