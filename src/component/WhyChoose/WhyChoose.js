import React from "react";
import "./Whychoose.css";
import Maintainance from "../../assets/icon_money.png";
import Stress from "../../assets/icon_stress.png";
import Donate from "../../assets/icon_donate.png";
import Dumbell from "../../assets/icon_dumbell.png";

const WhyChoose = () => {
  const ContainerElement = ({ Img, title, text }) => {
    return (
      <div className="elements">
        <img className="choose-logo" src={Img} alt="" />
        <div className="choose-container">
          <h2 className="choose-title">{title}</h2>
          <p className="choose-text">{text}</p>
        </div>
      </div>
    );
  };

  return (
    <div className="whychoose">
      <div className="why-container">
        <div>
          <h1 className="why-heading">
            Why are Athletes and Coaches choosing sports crowdfunding?
          </h1>
          <hr />
        </div>
        <div className="container-list">
          <ContainerElement
            Img={Maintainance}
            title="High Cost Of Equipment & Maintenance"
            text="Buying new sports equipment is expensive. Maintenance costs are recurring and create a tremendous financial burden on the athletes and their coaches. Savings are not enough to cover the expensive bills. Sports crowdfunding helps you pay these expensive bills and purchase new equipment."
          />

          <ContainerElement
            Img={Dumbell}
            title="Sports equipment, nutrition & training requires money"
            text="Living at training centers in different cities and ensuring no training opportunities are missed is crucial for athletes. Every year numerous athletes, coaches, and trainers pursue their dream of winning a gold medal. However, team fees, equipment costs, and traveling fees become a financial burden. This combined with top of the normal costs of living such as rent, food, gas, etc increases the stress in our sportsmen and sportswomen's lives. Crowdfunding on Ketto aims to give you a platform to share your journey, online crowdfunding helps you gather funds quickly."
          />

          <ContainerElement
            Img={Donate}
            title="Asking For Money Isn’t Easy"
            text="When in need, asking for help from people, and describing financial problems face-to-face can be awkward and inconvenient for teams, athletes, and coaches. Online sports crowdfunding makes the process of asking for money easier and seamless."
          />

          <ContainerElement
            Img={Stress}
            title="Loan Repayment Is Stressful"
            text="Getting drowned in personal loans is a common phenomenon in families of sportsmen and women. Once the money is gathered, repaying that loan may take months, sometimes years together. Online crowdfunding for sports-related expenses comes without debts."
          />
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
