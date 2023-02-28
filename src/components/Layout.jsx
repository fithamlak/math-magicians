import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

const Layout = () => (
  <div className="nav">
    <Navbar />
    <Outlet />
  </div>
);

export default Layout;
