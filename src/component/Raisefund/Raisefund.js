import React from "react";
import "./Raisefund.css";
import Trophy from "../../assets/first-place-trophy1.png";
import Plane from "../../assets/plane1.png";
import Sports from "../../assets/sports1.png";
import Jersey from "../../assets/basketball-jersey1.png";
import MemberShip from "../../assets/Group 397.png";
import Question from "../../assets/Shape.png";
import NotActiveCard from "../NotActiveCard/NotActiveCard";
const Raisefund = () => {
  return (
    <div className="Raisefund">
      <div className="raisefund-header">
        <h1>What can you raise funds for?</h1>
        <hr />
      </div>
      <div className="cards-wrapper">
        {/* <div className="card">
          <div className="icon-div">
            <img className="icon" src={Trophy} alt="" />
          </div>
          <hr />
          <h2>Tournament </h2>
          <a href="/">know more</a>
        </div> */}
        <NotActiveCard
          icon={<img className="icon" src={Trophy} alt="" />}
          title="Tournament"
        />
        <NotActiveCard
          icon={<img className="icon" src={Plane} alt="" />}
          title="Team Trips"
        />

        <NotActiveCard
          icon={<img className="icon" src={Sports} alt="" />}
          title="Equipment purchases"
        />
        <NotActiveCard
          icon={<img className="icon" src={Jersey} alt="" />}
          title="Uniforms and jerseys"
        />
        <NotActiveCard
          icon={<img className="icon" src={MemberShip} alt="" />}
          title="Membership fees or monthly dues"
        />
        <NotActiveCard
          icon={<img className="icon" src={Question} alt="" />}
          title="And more!"
        />
      </div>
      <div className="raisefund-footer">
        <h2>Have any query or Need help?</h2>
        <p>Receive a call from a Ketto Advisor</p>
        <button className="btn ">Yes, I want to receive a call</button>
      </div>
    </div>
  );
};

export default Raisefund;
