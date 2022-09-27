import React, { useState, useEffect } from "react";

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [size, setSize] = useState(window.innerWidth);
  console.log(size);
  useEffect();
  return <h2>useEffectttt cleanup</h2>;
};

export default UseEffectCleanup;
