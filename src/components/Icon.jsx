function Icon({ name, accessibleText }) {
  return (
    <>
      <svg focusable="false" tabIndex="-1" aria-hidden="true">
        <use focusable="false" tabIndex="-1" xlinkHref={"#icon-" + name}></use>
      </svg>
      {accessibleText && <span className="sr-only">{accessibleText}</span>}
    </>
  );
}

export default Icon;
