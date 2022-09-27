import React, { useState, useEffect } from "react";

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [size, setSize] = useState(window.innerWidth);
  // console.log(size);
  const checksize = () => {
    setSize(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", checksize);
  });
  return (
    <>
      <div>
        <h1>window</h1>
        <h2>{size} px</h2>
      </div>
    </>
  );
};

export default UseEffectCleanup;
