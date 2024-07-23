import Icon from "./Icon";

function Loading({ text }) {
  return (
    <div className="loading">
      <div className="container">
        <div className="loading-content">
          <div className="loading-icon-wrap">
            <Icon name={"progress"} />
          </div>
          <p className="loading-text">{text}</p>
        </div>
      </div>
    </div>
  );
}

export default Loading;
