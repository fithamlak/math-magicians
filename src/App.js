import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Calculator from './pages/CalculatorPage';
import Quote from './pages/Quotes';
import './css/app.css';
import Layout from './components/Layout';

function App() {
  return (
    <div className="main-container">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="calculator" element={<Calculator />} />
          <Route path="quote" element={<Quote />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
