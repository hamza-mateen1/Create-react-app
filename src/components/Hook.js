import React from 'react'

// const Hook = () => {
//   return (
//     <div>hook</div>
//   )
// }

// export default Hook


import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}