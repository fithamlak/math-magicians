import { NavLink } from 'react-router-dom';
import '../css/navbar.css';

const Navbar = () => (
  <nav className="navbar">
    <h1 className="main-header">Math Magicians</h1>
    <ul className="navLinks">
      <NavLink to="/">Home</NavLink>
      <NavLink to="calculator">Calculator</NavLink>
      <NavLink to="quote">Quote</NavLink>
    </ul>
  </nav>
);

export default Navbar;
