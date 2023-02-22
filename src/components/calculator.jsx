import { useState } from 'react';
import '../css/calculator.css';
import Result from './Result';
import Button from './button';
import calculate from '../logic/calculate';

function Calculator() {
  const [calculatorObj, setCalculatorObj] = useState({});
  function handleClick(e) {
    const { name } = e.target;
    setCalculatorObj(calculate(calculatorObj, name));
  }
  let result;
  return (
    <div>
      <Result result={result} />
      <table>
        <tbody>
          <tr>
            <td><Button onClick={(e) => handleClick(e)} name="AC" /></td>
            <td><Button onClick={(e) => handleClick(e)} name="+/-" /></td>
            <td><Button onClick={(e) => handleClick(e)} name="%" /></td>
            <td className="oprator"><Button onClick={(e) => handleClick(e)} name="÷" /></td>
          </tr>
          <tr>
            <td><Button onClick={(e) => handleClick(e)} name="7" /></td>
            <td><Button onClick={(e) => handleClick(e)} name="8" /></td>
            <td><Button onClick={(e) => handleClick(e)} name="9" /></td>
            <td className="oprator"><Button onClick={(e) => handleClick(e)} name="x" /></td>
          </tr>
          <tr>
            <td><Button onClick={(e) => handleClick(e)} name="4" /></td>
            <td><Button onClick={(e) => handleClick(e)} name="5" /></td>
            <td><Button onClick={(e) => handleClick(e)} name="6" /></td>
            <td className="oprator"><Button onClick={(e) => handleClick(e)} name="-" /></td>
          </tr>
          <tr>
            <td><Button onClick={(e) => handleClick(e)} name="1" /></td>
            <td><Button onClick={(e) => handleClick(e)} name="2" /></td>
            <td><Button onClick={(e) => handleClick(e)} name="3" /></td>
            <td className="oprator"><Button onClick={(e) => handleClick(e)} name="+" /></td>
          </tr>
          <tr>
            <td colSpan={2} className="bottom"><Button onClick={(e) => handleClick(e)} name="0" /></td>
            <td className="bottom"><Button onClick={(e) => handleClick(e)} name="." /></td>
            <td className="oprator"><Button onClick={(e) => handleClick(e)} name="=" /></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Calculator;
