import React, { Component } from "react";
import { connect } from "react-redux";
import "../styles/App.css";

class List extends Component {
  printDollars = (val) => {
    switch (val) {
      case 1:
        return <>$</>;
      case 2:
        return <>$$</>;
      case 3:
        return <>$$$</>;
      case 4:
        return <>$$$$</>;
      default:
        return <></>;
    }
  };

  render() {
    const { city, restList } = this.props.restaurantsList;
    if (restList) {
      if (restList[city].length <= 0) {
        return <h3>No Results Found. Please Try Again!</h3>;
      } else {
        return (
          <div className="Rest-list">
            {restList[city].map((rest) => {
              return (
                <div key={rest.name}>
                  <h1>{rest.name}</h1>
                  <h2>{rest.address}</h2>
                  <h3>{this.printDollars(rest.price)}</h3>
                </div>
              );
            })}
          </div>
        );
      }
    }
    return null;
  }
}

const mapStateToProps = (state) => {
  return {
    restaurantsList: state.restaurentReducer,
  };
};

export default connect(mapStateToProps)(List);
