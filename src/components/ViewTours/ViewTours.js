import React, { Component } from "react";
import "./ViewTours.css";
import { Link } from "react-router-dom";

export class ViewTours extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tours: [],
    };
  }

  async componentDidMount() {
    return fetch("http://localhost:5000/view")
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
        this.setState({
          tours: responseJson,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    return (
      <div className={"container"}>
        <br></br>
        <div className={"justify-content-center"}>
          <h1 className="rr">Tour Packages</h1>
        </div>
        <br></br>
        <br></br>

        <div class="row">
          {this.state.tours.map((value, key) => (
            <div className="card" key={key}>
              <img
                src="https://images.unsplash.com/photo-1528543606781-2f6e6857f318?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTV8fHxlbnwwfHx8fA%3D%3D&w=1000&q=80"
                className="card-img-top"
              />
              <div className="card-body">
                <h5 className="card-title">{value.tname}</h5>
                <p className="card-text justufy">{value.tdescription}</p>
                <br />
                <p className="card-text mb-0 p-8">
                  <b>Price: </b>
                  {value.price}
                </p>
                <p className="card-text">
                  <b>Package No: </b>
                  {value.tnumber}
                </p>
                <Link to="/add">
                <div class="text-center">
                  <a href="#" class="btn btn-primary">
                    Book Now
                  </a>
                </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default ViewTours;
