const Display = ({ countries }) => {
  if (countries.length > 10) {
    return `Too many matches, specify another filter`;
  } else if (countries.length > 1 && countries.length <= 10) {
    return countries.map((country) => <li>{country.name.common}</li>);
  } else if (countries.length === 1) {
    let country = countries[0];
    return (
      <div>
        <h1>{country.name.common}</h1>
        <p>capital {country.capital}</p>
        <p>area {country.area}</p>
        <p>
          <b>languages:</b>
        </p>
        <ul>
          {Object.values(country.languages).map((language, index) => (
            <li key={index}>{language}</li>
          ))}
        </ul>
        <img src={country.flags.png} alt={`${country.name.common} flag`} />
      </div>
    );
  }
};

export default Display;
