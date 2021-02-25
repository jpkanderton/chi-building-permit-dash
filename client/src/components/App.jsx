import React from 'react';
import axios from 'axios';

const { useState } = React;

const App = () =>{
  const [hooksExample, setHooksExample] = useState('React Hook State');
  const [counter, setCounter] = useState(0);

  const handleClick = () => setCounter(counter + 1);

  return (
    <div>
      <div>Hooks Set Up</div>
    </div>
  )
}

export default App;
