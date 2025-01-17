import Icon from "../components/Icon";

function PageNotFound() {
  return (
    <div className="error">
      <div className="container">
        <div className="error-content">
          <div className="error-icon-wrap">
            <Icon name={"not-found"} />
          </div>
          <p className="error-text">Page not found</p>
        </div>
      </div>
    </div>
  );
}

export default PageNotFound;
