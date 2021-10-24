import axios from 'axios';
import { useState, useEffect } from 'react';
import { IoArrowBack } from "react-icons/io5";
import { useParams, useHistory } from 'react-router-dom';
import { Button } from '../components/Button';
import { searchByCountry } from '../config';


export const DetailsPage = () => {
  const { country: countryName } = useParams();
  const { goBack, push } = useHistory();
  const [country, setCountry] = useState(null);

  useEffect(() => {
    async function getCountryData() {
      const responseLink = searchByCountry(countryName);

      try {
        const response = await axios.get(responseLink);
        setCountry(response.data[0]);
      } catch (error) {
        console.log(error.message);
      }
    }

    getCountryData();
  }, [countryName]);

  return (
    <div>
      <Button onClick={goBack}>
        <IoArrowBack /> Back
      </Button>
      <h1>Details Page - {countryName}</h1>
    </div>
  );
}
