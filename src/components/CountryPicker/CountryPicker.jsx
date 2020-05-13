import React, { useEffect, useState } from "react";
import { NativeSelect, FormControl } from "@material-ui/core";
import { fetchCountries } from "./../../api";

import styles from "./CountryPicker.module.css";

const CountryPicker = (props) => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    async function getCountries() {
      setCountries(await fetchCountries());
    }

    getCountries();
  }, [setCountries]);

  return (
    <FormControl className={styles.formControl}>
      <NativeSelect
        defaultValue=""
        onChange={(e) => props.onCountryChange(e.target.value)}
      >
        <option value="">Global</option>
        {countries.map((country, i) => (
          <option key={i} value={country}>
            {country}
          </option>
        ))}
      </NativeSelect>
    </FormControl>
  );
};

export default CountryPicker;
