const Display = ({ countries }) => {
  let display = null;
  if (countries.length) {
    display = `Too many matches, specify another filter`;
  }
  return <div>{display}</div>;
};

export default Display;
