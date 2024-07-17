import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <div className="container">
        <div className="header-content">
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              {/* <li>
                <Link to="/products">Products</Link>
              </li> */}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
