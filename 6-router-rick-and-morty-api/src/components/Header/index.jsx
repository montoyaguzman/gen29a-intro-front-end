import './header.css';

const Header = () => {
  return (
    <header>
      <nav className="header">
        <a className="header-logo" href="#">Rick And Morty Api</a>
        <ul className="header-nav-list">
          <li>
            <a className="header-list-link" href="">Home</a>
          </li>
          <li>
            <a className="header-list-link" href="">Characters</a>
          </li>
          <li>
            <a className="header-list-link" href="">Episodes</a>
          </li>
          <li>
            <a className="header-list-link" href="">Locations</a>
          </li>
          <li>
            <a className="header-list-link is-active" href="">About</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
