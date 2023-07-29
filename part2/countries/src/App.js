import { useState, useEffect } from "react";
import Display from "./components/Display";
import countriesService from "./services/countries";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    countriesService.getCountries().then((allCountries) => {
      setCountries(allCountries);
    });
  }, []);

  const handleChange = (event) => {
    if (event.target.value === "") {
      setFiltered([]);
    } else {
      setFiltered(
        countries.filter((country) =>
          country.name.common
            .toLowerCase()
            .includes(event.target.value.toLowerCase())
        )
      );
    }
  };

  return (
    <div>
      <div>
        <form>
          find countries <input onChange={handleChange} />
        </form>
      </div>
      <div>
        <Display countries={filtered} setCountries={setFiltered} />
      </div>
    </div>
  );
};
export default App;
