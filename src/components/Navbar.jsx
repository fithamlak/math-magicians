import { NavLink } from 'react-router-dom';

const links = [
  { path: '/', page: 'Home' },
  { path: 'calculator', page: 'Calculator' },
  { path: 'quote', page: 'Quote' },
];

const Navbar = () => (
  <nav className="nav">
    <h1>Math Magicians</h1>
    <ul className="navLinks">
      {links.map((link) => (
        <li key={link.page}>
          <NavLink to={link.path}>
            {link.page}
          </NavLink>
        </li>
      ))}
    </ul>
  </nav>
);

export default Navbar;
