import React from "react";
import "./KettoOffer.css";
import ThumbsUp from "../../assets/icon_thumbsup.png";
import Currency from "../../assets/icon_currency.png";
import Update from "../../assets/icon_update.png";
import Call from "../../assets/icon_call.png";
import Withdraw from "../../assets/icon_withdraw.png";
import Card from "../../assets/icon_card.png";

const KettoOffer = () => {
  const Element = ({ Img, text }) => {
    return (
      <div className="offer-elements">
        <img className="offer-logo" src={Img} alt="" />
        <p className="offer-description">{text}</p>
      </div>
    );
  };

  return (
    <div className="ketto-offer">
      <div className="offer-container">
        <div>
          <h1 className="offers-heading">What Ketto Offers?</h1>
          <hr className="offers-heading-hr " />
        </div>
        <div className="elements-container">
          <div>
            <Element
              Img={ThumbsUp}
              text="Starting a fundraiser on Ketto is absolutely free."
            />
            <Element
              Img={Currency}
              text="We accept donations in multiple currencies from anywhere in the world."
            />
            <Element
              Img={Update}
              text="Get instant updates on your fundraiser's progress on a real-time dashboard."
            />
          </div>
          <div>
            <Element
              Img={Call}
              text="24x7 assistance from dedicated fundraiser managers throughout your fundraising journey."
            />
            <Element
              Img={Withdraw}
              text="You can withdraw your funds at any point during the course of your fundraiser."
            />
            <Element
              Img={Card}
              text="Accepts donations all cards, netbanking, UPI and online wallets."
            />
          </div>
        </div>
        <hr className="offers-hr" />
      </div>
    </div>
  );
};

export default KettoOffer;
