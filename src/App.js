import React, { Component } from "react";
import { Cards, Chart, CountryPicker } from "./components";
import styles from "./App.module.css";
import { fetchData } from "./api";
import coronaImage from "./images/image.png";

class App extends Component {
  state = {
    data: {},
    selectedCountry: "",
  };

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    this.setState({ selectedCountry: country, data: fetchedData });
  };

  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });
  }

  render() {
    const { data, selectedCountry } = this.state;

    return (
      <div className={styles.container}>
        <img className={styles.image} src={coronaImage} alt="Covid-19" />
        <Cards data={data} />
        <CountryPicker onCountryChange={this.handleCountryChange} />
        <Chart data={data} selectedCountry={selectedCountry} />
      </div>
    );
  }
}

export default App;

