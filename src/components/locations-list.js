import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Location = props => (
  <tr>
    <td>{props.location.username}</td>
    <td>{props.location.location}</td>
    <td>{props.location.temperature}</td>
    <td>{props.location.weather}</td>
   
  </tr>
)

export default class LocationList extends Component {
  constructor(props) {
    super(props);

   

    this.state = {exercises: []};
  }

  componentDidMount() {
    axios.get('http://localhost:3000/')
      .then(response => {
        this.setState({ locations: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

 
  
  render() {
    return (
      <div>
        <h3>Logged Exercises</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Username</th>
              <th>Description</th>
              <th>Duration</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            { this.exerciseList() }
          </tbody>
        </table>
      </div>
    )
  }
}