import React, { useState, useEffect } from 'react';

const App = () => {
  const [message, setMessage] = useState("Hello dear one learning React");

  useEffect(() => {
    console.log('useEffect hook called');

    const timeoutId = setTimeout(() => {
      setMessage("Great. This is the time to learn about HOOKS");
    }, 2000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  const resetMessage = () => {
    setMessage("Hello dear one learning React");
  };

  return (
    <div>
      <h1>{message}</h1>
      <button onClick={resetMessage}>Reset Message</button>
    </div>
  );
};

export default App;