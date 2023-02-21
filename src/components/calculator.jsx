import '../css/calculator.css';

function Calculator() {
  return (
    <table>
      <tbody>
        <tr>
          <td>AC</td>
          <td>+/-</td>
          <td>%</td>
          <td className="oprator">/</td>
        </tr>
        <tr>
          <td>7</td>
          <td>8</td>
          <td>9</td>
          <td className="oprator">x</td>
        </tr>
        <tr>
          <td>4</td>
          <td>5</td>
          <td>6</td>
          <td className="oprator">-</td>
        </tr>
        <tr>
          <td>1</td>
          <td>2</td>
          <td>3</td>
          <td className="oprator">+</td>
        </tr>
        <tr>
          <td colSpan={2} className="bottom">0</td>
          <td className="bottom">.</td>
          <td className="oprator">=</td>
        </tr>
      </tbody>
    </table>
  );
}

export default Calculator;
