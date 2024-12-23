import React from "react";
import { FaChartPie, FaArrowUp } from "react-icons/fa"; // Import FontAwesome icons
import { GiPieChart } from "react-icons/gi"; // Import PieChart Icon
import "./InfoBox.css";
import logo from "./logo.png";
import "./main.css";
const InfoBox = () => {
  return (
    <div className="info-box">
      <div className="overlap-container">
        {/* Back Box */}
        <div className="box secondary-box">
          {/* First Row */}
          <div className="row-1">
            <img src={logo} width="25px" height="25px" />
            <p>AI to Detect & Autofix Bad Code</p>
          </div>
          {/* Second Row */}
          <div className="row-2">
            <div className="column">
              <p>30+ Languages Supported</p>
            </div>
            <div className="column">
              <p>10K+ Developers</p>
            </div>
            <div className="column">
              <p>100K+ Hours Saved</p>
            </div>
          </div>
        </div>

        {/* Front Box */}
        <div className="box primary-box">
          <div className="left-column">
            <GiPieChart size={25} />
            <br />
            <p>Issues Fixed</p>
            <p className="fixed">500K+</p>
          </div>
          <div className="right-column">
            <FaArrowUp size={25} color="green" />
            <p className="growth">14%</p>
            <br />
          </div>
          <p>This Week</p>
        </div>
      </div>

      {/* Logo at the bottom left corner */}
      <img src={logo} className="logo-bottom-left" alt="Logo" />
    </div>
  );
};

export default InfoBox;
