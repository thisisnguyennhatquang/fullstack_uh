import Data from "./Data";

const Display = ({ countries, setCountries }) => {
  if (countries.length > 10) {
    return `Too many matches, specify another filter`;
  } else if (countries.length > 1 && countries.length <= 10) {
    const handleClick = (country) => {
      setCountries([country]);
    };
    let buttons = countries.map((country) => (
      <li>
        {country.name.common}
        <button onClick={() => handleClick(country)}>show</button>
      </li>
    ));
    return buttons;
  } else if (countries.length === 1) {
    let country = countries[0];
    return <Data country={country} />;
  }
};

export default Display;
