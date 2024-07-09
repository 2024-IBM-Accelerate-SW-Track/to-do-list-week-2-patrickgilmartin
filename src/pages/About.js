import React, { Component } from "react";
import "./About.css";
import profile_pic from "../assets/Screenshot 2024-05-29 203100.png";

export default class About extends Component {
  render() {
    return (
      <div>
        {/* <p>Design your About me page </p> */}
        <div className="split left">
          <div className="centered">
            <img
              className="profile_image"
              src={profile_pic}
              alt="Profile Pic"
            />
          </div>
        </div>
        <div className="split right">
          <div className="centered">
            <div className="name_title">Patrick Gilmartin</div>
            <div className="brief_description">
              I'm a rising junior at the University of Virginia, pursuing a double major in Econ and CS.
            </div>
          </div>
        </div>
      </div>
    );
  }
}
