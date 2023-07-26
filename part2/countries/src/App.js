import { useState, useEffect } from "react";
import axios from "axios";
import Display from "./components/Display";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [filtered, setFiltered] = useState({});

  useEffect(() => {
    axios
      .get(`https://studies.cs.helsinki.fi/restcountries/api/all`)
      .then((response) => {
        setCountries(response.data);
      });
  });

  const handleChange = (event) => {
    setFiltered(
      countries.filter((country) =>
        country.name.common
          .toLowerCase()
          .includes(event.target.value.toLowerCase())
      )
    );
  };
  console.log(filtered);

  return (
    <div>
      <div>
        <form>
          find countries <input onChange={handleChange} />
        </form>
      </div>
      <div>
        <Display countries={filtered} />
      </div>
    </div>
  );
};
export default App;
