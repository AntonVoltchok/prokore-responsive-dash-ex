import React, { Component } from "react";
import Header from "./components/Header";
import mockData from "./mockData";
import {COLORS} from './globals';
import "./normalize.css";
import "./index.css";
import Dashboard from "./components/Dashboard";

const {appBackground} = COLORS;


class App extends Component {

  constructor() {
    super();
    this.state = {dashData: []};

  }

  componentDidMount() {
    this.setState({dashData: this.filterDashData(mockData)})
  }

  filterDashData = data => {
    let scrubbedData = [];
    data.forEach(item => {
      const obj = item.buildings[0];
      scrubbedData.push({
        address: obj.address,
        cityStateZip: `${obj.city}, ${obj.state}, ${obj.zip}`,
        floorCount: obj.address,
        sqFt: '17,650 SqFt',
        types: obj.newPropertyTypes.filter(typeItem => typeItem.isSelected),
        completeRates: item.isComponentRatesCompleted,
        completeExpenses: item.isPropertyExpensesCompleted,
        completeRevenues: item.isPropertyRevenuesCompleted,
        completeFinancials: item.isComponentFinancialsCompleted,
        completeForwardGrowth: item.isComponentForwardGrowthCompleted,
        completeRentRoll: item.isComponentRentRollCompleted,
        completeCategory: item.isComponentCategoryCompleted
      });
    });
    return scrubbedData;
  };

  render() {
    const {dashData} = this.state;

    return (
      <div style={{background: appBackground}}>
        <Header />
        <Dashboard data={dashData}/>
      </div>
    );
  }
}

export default App;
