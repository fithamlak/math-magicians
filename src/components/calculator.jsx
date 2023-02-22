import { useState } from 'react';
import '../css/calculator.css';
import Button from './button';
import calculate from '../logic/calculate';

function Calculator() {
  const [calculatorObj, setCalculatorObj] = useState({});
  function handleClick(e) {
    const { name } = e.target;
    setCalculatorObj(calculate(calculatorObj, name));
  }
  let result;
  if (calculatorObj.next) {
    result = calculatorObj.next;
  } else if (calculatorObj.total) {
    result = calculatorObj.total;
  } else {
    result = 0;
  }
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td colSpan={4} className="result">{result}</td>
          </tr>
          <tr>
            <td><Button onClick={(e) => handleClick(e)} name="AC" className="normal" /></td>
            <td><Button onClick={(e) => handleClick(e)} name="+/-" className="normal" /></td>
            <td><Button onClick={(e) => handleClick(e)} name="%" className="normal" /></td>
            <td><Button onClick={(e) => handleClick(e)} name="÷" className="oprator" /></td>
          </tr>
          <tr>
            <td><Button onClick={(e) => handleClick(e)} name="7" className="normal" /></td>
            <td><Button onClick={(e) => handleClick(e)} name="8" className="normal" /></td>
            <td><Button onClick={(e) => handleClick(e)} name="9" className="normal" /></td>
            <td><Button onClick={(e) => handleClick(e)} name="x" className="oprator" /></td>
          </tr>
          <tr>
            <td><Button onClick={(e) => handleClick(e)} name="4" className="normal" /></td>
            <td><Button onClick={(e) => handleClick(e)} name="5" className="normal" /></td>
            <td><Button onClick={(e) => handleClick(e)} name="6" className="normal" /></td>
            <td><Button onClick={(e) => handleClick(e)} name="-" className="oprator" /></td>
          </tr>
          <tr>
            <td><Button onClick={(e) => handleClick(e)} name="1" className="normal" /></td>
            <td><Button onClick={(e) => handleClick(e)} name="2" className="normal" /></td>
            <td><Button onClick={(e) => handleClick(e)} name="3" className="normal" /></td>
            <td><Button onClick={(e) => handleClick(e)} name="+" className="oprator" /></td>
          </tr>
          <tr>
            <td colSpan={2}><Button onClick={(e) => handleClick(e)} name="0" className="bottom" /></td>
            <td><Button onClick={(e) => handleClick(e)} name="." className="bottom" /></td>
            <td><Button onClick={(e) => handleClick(e)} name="=" className="oprator" /></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Calculator;
