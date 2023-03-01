import { NavLink } from 'react-router-dom';
import '../css/navbar.css';

const Navbar = () => (
  <nav className="navbar">
    <h1 className="main-header">Math Magicians</h1>
    <ul className="navLinks">
      <NavLink to="/" className="link">Home</NavLink>
      <NavLink to="calculator" className="link">Calculator</NavLink>
      <NavLink to="quote" className="link">Quote</NavLink>
    </ul>
  </nav>
);

export default Navbar;
