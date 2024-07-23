import { Link } from "react-router-dom";
import Icon from "./Icon";

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <Link to="/" className="app-logo-link">
            <Icon name={"logo"} accessibleText={"Fictional Finds home page"} />
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
