import Calculator from '../components/calculator';
import '../css/calculatorPage.css';

const CalculatorPage = () => (
  <section className="calculator">
    <h2 data-testid="h2Id">Lets do some math!</h2>
    <Calculator />
  </section>
);

export default CalculatorPage;
