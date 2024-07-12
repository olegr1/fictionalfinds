function Icon({ name }) {
  return (
    <svg focusable="false" tabIndex="-1" aria-hidden="true">
      <use focusable="false" tabIndex="-1" xlinkHref={"#icon-" + name}></use>
    </svg>
  );
}

export default Icon;
