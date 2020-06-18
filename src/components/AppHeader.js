import React, { Component } from "react";
import { connect } from "react-redux";
import "../styles/App.css";
import { fetchRestaurants } from "../store/actions";

class AppHeader extends Component {
  state = {
    city: "",
    price: "",
    name: "",
  };

  handleCity = (value) => {
    this.setState({ city: value });
  };

  handlePrice = (value) => {
    console.log("price"+value)
    this.setState({ price: value });
  };

  handleName = (value) => {
    this.setState({ name: value });
  };

  handleSubmit =  (event) => {
    console.log("handleing submit")
    event.preventDefault();
    this.setState({ city: "", name:"", price:""});
    this.props.fetchRestaurants(this.state.city, this.state.price, this.state.name);
  };

  render() {
    return (
      <div>
        <form className="Form-input">
          <input
            className="Box-input"
            placeholder="City"
            type="text"
            value={this.state.city}
            onChange={(event) => {
              this.handleCity(event.target.value);
            }}
            tabIndex = "1"
          />
          <div style = {{display : "flex", flexDirection : "row"}}>
              <input
                className="Box-input"
                placeholder="Price : 1,2,3,4 (Optional)"
                type="text"
                value={this.state.price}
                onChange={(event) => {
                  this.handlePrice(event.target.value);
                }}
              />
              <input
                className="Box-input"
                placeholder="Restaurent Name (Optional)"
                type="text"
                value={this.state.name}
                onChange={(event) => {
                  this.handleName(event.target.value);
                }}
              />
            </div>
            <button type = 'submit' onClick = {this.handleSubmit} style = {{display : "none"}}>Submit</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    state,
  };
};

export default connect(mapStateToProps, {
  fetchRestaurants,
})(AppHeader);
