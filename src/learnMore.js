import { useState } from "react";

export const Test = () => {
  const [age, setAge] = useState(0);

  const addAge = () => setAge((prev) =>!prev);
  return (
    <>
      <h1>{age}</h1>
      <button onClick={addAge}>Clivk me</button>
    </>
  );
};
