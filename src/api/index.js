import axios from "axios";

const apiEndpoint = "https://covid19.mathdro.id/api";

export const fetchData = async (country) => {
  const updatedApiEndpoint = country
    ? `${apiEndpoint}/countries/${country}`
    : apiEndpoint;
  try {
    const {
      data: { confirmed, recovered, deaths, lastUpdate },
    } = await axios.get(updatedApiEndpoint);
    return { confirmed, recovered, deaths, lastUpdate };
  } catch (error) {}
};

export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get(`${apiEndpoint}/daily`);
    const modifiedData = data.map((dailyData) => ({
      confirmed: dailyData.confirmed.total,
      deaths: dailyData.deaths.total,
      date: dailyData.reportDate,
    }));
    return modifiedData;
  } catch (error) {}
};

export const fetchCountries = async () => {
  try {
    const {
      data: { countries },
    } = await axios.get(`${apiEndpoint}/countries`);
    return countries.map((country) => country.name);
  } catch (error) {}
};
