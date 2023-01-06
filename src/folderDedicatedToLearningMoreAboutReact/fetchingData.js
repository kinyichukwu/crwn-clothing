import React, { useEffect, useState } from "react";

const Cat = () => {
  const [fact, setFact] = useState("Click the text for a random Fact");

  

  
    const fun = () => {
        fetch("https://catfact.ninja/fact")
        .then((res) => res.json())
        .then((user) => setFact(() => user.fact));
        
      }
 
  
  return (
    <div>
      
      <h1>{fact}</h1>
      <button onClick={fun}>Get Fact</button>
    </div>
  );
};

export default Cat;
