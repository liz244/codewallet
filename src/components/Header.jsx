import { Link, useLocation } from 'react-router-dom';
import '../styles/header.css';


function Header() {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <header className="header">
      <h1 className="logo">Code Wallet</h1>
      <nav>
        <Link className={isActive('/') ? 'active' : ''} to="/">Fragments</Link>
        <Link className={isActive('/tags') ? 'active' : ''} to="/tags">Tags</Link>
        <Link className={isActive('/new') ? 'active' : ''} to="/new">New Fragment</Link>
        <Link className={isActive('/info') ? 'active' : ''} to="/info">Info</Link>
      </nav>
    </header>
  );
}

export default Header;
