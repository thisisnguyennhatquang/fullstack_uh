import Data from "./Data";

const Display = ({ countries }) => {
  if (countries.length === 0) {
    return null;
  } else if (countries.length > 10) {
    return `Too many matches, specify another filter`;
  } else if (countries.length > 1 && countries.length <= 10) {
    return countries.map((country) => (
      <li>
        {country.name.common}
        <button
          onClick={() => {
            return <Data country={country} />;
          }}
        >
          show
        </button>
      </li>
    ));
  } else if (countries.length === 1) {
    let country = countries[0];
    <Data country={country} />;
  }
};

export default Display;
