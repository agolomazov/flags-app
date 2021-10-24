import { useEffect, useState, useCallback } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

import { ALL_COUNTRIES } from "../config";

import { Controls } from "../components/Controls";
import { List } from "../components/List";
import { Card } from "../components/Card";

export const HomePage = ({ countries, setCountries }) => {
  const { push } = useHistory();
  const [filteredContries, setFilteredCountries] = useState(countries);

  const handleSearch = useCallback((search, region) => {
    let data = [...countries];

    if (region) {
      data = data.filter((c) => c.region.includes(region));
    }

    if (search) {
      data = data.filter((c) =>
        c.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    setFilteredCountries(data);
  }, [countries]);

  useEffect(() => {
    async function getCountries() {
      try {
        const countryResponse = await axios.get(ALL_COUNTRIES);
        setCountries(countryResponse.data);
      } catch (err) {
        console.log(err.message);
      }
    }

    if (!countries.length) {
      getCountries();
    }
  }, []); // eslint-disable-line

  return (
    <>
      <Controls onSearch={handleSearch} />
      <List>
        {filteredContries.map((country) => {
          const countryInfo = {
            img: country.flags.png,
            name: country.name,
            info: [
              {
                title: "Population",
                description: country.population.toLocaleString(),
              },
              {
                title: "Region",
                description: country.region,
              },
              {
                title: "Capital",
                description: country.capital || "Нет столицы",
              },
            ],
          };

          return (
            <Card
              key={country.name}
              {...countryInfo}
              onClick={() => push(`/country/${country.name}`)}
            />
          );
        })}
      </List>
    </>
  );
};
