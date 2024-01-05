// App.js

import React, { useState } from 'react';
import './App.css';

const Calculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState(0);

  const handleClick = (value) => {
    setInput((prevInput) => prevInput + value);
  };

  const handleClear = () => {
    setInput('');
    setResult(0);
  };

  const handleAllClear = () => {
    setInput('');
    setResult(0);
  };

  const handleNegate = () => {
    setInput((prevInput) => {
      const firstChar = prevInput.charAt(0);
      return firstChar === '-' ? prevInput.slice(1) : `-${prevInput}`;
    });
  };

  const handlePercentage = () => {
    try {
      const percentageResult = eval(input) / 100;
      setResult(percentageResult);
      setInput('');
    } catch (error) {
      setResult('Error');
    }
  };

  const handleCalculate = () => {
    try {
      const calculatedResult = eval(input);
      setResult(calculatedResult);
      setInput(calculatedResult.toString()); // Set input to result for further calculations
    } catch (error) {
      setResult('Error');
    }
  };

  return (
    <div className="calculator">
      <div className="display-box">
        <div className="result">{result}</div>
        <input type="text" value={input} readOnly className="display" />
      </div>
      <div className="buttons">
        <div className="top-buttons">
          <button onClick={handleAllClear}>AC</button>
          <button onClick={handleNegate}>+/-</button>
          <button onClick={handlePercentage}>%</button>
          <button onClick={() => handleClick('/')} className="operator-button operator-button-orange divide"></button>
        </div>

        <div className="number-buttons">
          <button onClick={() => handleClick('7')}>7</button>
          <button onClick={() => handleClick('8')}>8</button>
          <button onClick={() => handleClick('9')}>9</button>
          <button onClick={() => handleClick('*')} className="operator-button operator-button-orange multiply"></button>

          <button onClick={() => handleClick('4')}>4</button>
          <button onClick={() => handleClick('5')}>5</button>
          <button onClick={() => handleClick('6')}>6</button>
          <button onClick={() => handleClick('-')} className="operator-button operator-button-orange subtract"></button>

          <button onClick={() => handleClick('1')}>1</button>
          <button onClick={() => handleClick('2')}>2</button>
          <button onClick={() => handleClick('3')}>3</button>
          <button onClick={() => handleClick('+')} className="operator-button operator-button-orange add"></button>

          <button onClick={() => handleClick('0')} className="double-width">0</button>
          <button onClick={() => handleClick('.')} className="single-width">.</button>
          <button className="single-width operator-button operator-button-orange" onClick={handleCalculate}>=</button>
        </div>
      </div>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <Calculator />
    </div>
  );
}

export default App;
