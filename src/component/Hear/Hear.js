import React from "react";
import "./Hear.css";
import Image from "../../assets/image 4.png";
import Quotation from "../../assets/right-quotation-mark 1.png";

const Hear = () => {
  return (
    <div className="hear">
      <div className="hear-container">
        <div className="hear-header">
          <h1 className="hear-title">Hear from people like you</h1>
          <hr />
          <p className="hear-description">
            who benefited from medical crowdfunding
          </p>
        </div>
        <div className="hear-content">
          <div className="hear-content-top">
            <img className="quotation" src={Quotation} alt="" />
            <p className="hear-content-description">
              “My liver transplant was stuck because my family didn't have funds
              to afford it. It's only because I knocked on Ketto's door that I'm
              healthy today. A big thank you to each and every one who gave me
              money. I wouldn't be alive without you.”
            </p>
          </div>
          <div className="hear-info">
            <div>
              <img className="hear-image" src={Image} alt="" />
              <p className="hear-info-name">Constable Deepak Patil</p>
              <p className="hear-info-description">
                Constable Deepak Patil <br /> Mumbai Police (Patient) Raised ₹
                9,57,401
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hear;
