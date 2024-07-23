import Icon from "./Icon";

function Error({ text }) {
  return (
    <div className="error">
      <div className="container">
        <div className="error-content">
          <div className="error-icon-wrap">
            <Icon name={"error"} />
          </div>
          <p className="error-text">{text}</p>
        </div>
      </div>
    </div>
  );
}

export default Error;
