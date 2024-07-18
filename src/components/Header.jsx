import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <Link to="/" className="app-logo-link">
            <svg focusable="false" tabIndex="-1" aria-hidden="true">
              <use focusable="false" tabIndex="-1" xlinkHref="#logo"></use>
            </svg>
            <span className="sr-only">Fictional Finds home page</span>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
