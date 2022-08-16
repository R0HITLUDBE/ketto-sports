import React from "react";
import "./ActiveFundraiser.css";
import Image from "../../assets/image.png";
import Oval from "../../assets/Oval.png";
import { AiOutlineClockCircle } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";

const ActiveFundraiser = () => {
  const Card = () => {
    return (
      <div className="fundraiser-content">
        <div className="fundraiser-image">
          <img className="fundraiser-image" src={Image} alt="" />
        </div>
        <div className="fundraiser-description">
          <div className="fundraiser-description-text">
            <h2 className="fundraiser-title">
              Help educate 120 needy childrenHelp educate 120 children
            </h2>
            <div className="fundraiser-profile">
              <img className="description-image" src={Oval} alt="" />
              <p className="fundraiser-subtitle">by Snehal Dhawan</p>
            </div>
            <p className="amount">
              ₹ 2,50,000{" "}
              <span className="amount-gray">raised out of ₹ 5,00,000</span>
            </p>
            <progress className="" id="file" value="50" max="100">
              {/* {" "}
  32%{" "} */}
            </progress>
            <p className="donation-date">Last donation 14m ago</p>
            <div className="fundraiser-body-footer">
              <p>
                3 <span>Days Left</span>
              </p>
              <p>
                243 <span>Supporters</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="active-fundraiser">
      <div className="fundraiser-container">
        <div className="fundraiser-header">
          <h1 className="fundraiser-heading">Active Fundraisers</h1>
          <hr />
        </div>
        <div className="fundraiser-body">
          <Card />
          <Card />
          <Card />
        </div>

        <p className="fundraiser-footer-text">Load More</p>
      </div>
    </div>
  );
};

export default ActiveFundraiser;
