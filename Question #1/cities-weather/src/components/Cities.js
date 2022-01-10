import React, { Component } from "react";
import City from "./City";
import { cityNames, clickMessage } from "../common.json";
class Cities extends Component {
  displayCities() {
    return cityNames.map((cityName) => {
      return (
        <City key={cityName} city={cityName} clickMessage={clickMessage} />
      );
    });
  }

  render() {
    return (
      <div className="Cities">
        <div className="row">{this.displayCities()}</div>
      </div>
    );
  }
}

export default Cities;
