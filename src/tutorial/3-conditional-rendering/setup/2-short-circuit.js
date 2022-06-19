import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState('')
  const firstValue = text || 'hello world'
  const secondValue = text && 'hello world'

  return (
    <div>
      <h1>
        {text || "This evaluated to false"}
      </h1>
      {text && <h1>This evaluated to true</h1>}
    </div>
  )
};

export default ShortCircuit;
