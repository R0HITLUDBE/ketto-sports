import React from "react";
import "./Footer.css";
import Logo from "../../assets/Ketto logo.svg";
import SocialMedia from "../../assets/social media icons.svg";
import CardPayment from "../../assets/Frame 683.svg";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-left">
            <div className="footer-left-upper">
              <img className="footer-left-logo" src={Logo} alt="" />
              <h2 className="footer-left-mobile-title">
                Subscribe and follow us on
              </h2>
              <hr />
              <div className="footer-left-mobile">
                <div>
                  <img src={SocialMedia} alt="" />
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <h3>300+ K</h3>
                  <p className="blue-text">Followers</p>
                </div>
              </div>
            </div>
            <div className="footer-left-bottom">
              <p>For any queries, reach out to us at Email : </p>
              <p className="footer-bold">info@ketto.org</p>
            </div>
          </div>
          <div className="footer-right">
            <div className="">
              <h2>Causes</h2>
              <div className="footer-texts">
                <p>Medical Crowdfunding</p>
                <p>Animal Fundraisers</p>
                <p>Fundraising for Child</p>
                <p>Creative Fundraising</p>
              </div>
            </div>
            <div className="">
              <h2>How it works?</h2>
              <div className="footer-texts">
                <p>NGOS</p>
                <p>Individuals</p>
                <p>What is Crowdfunding?</p>
              </div>
            </div>
            <div>
              <h2>About Us</h2>
              <div className="footer-texts">
                <p>Team Ketto</p>
                <p>Our Partners</p>
                <p>Careers</p>
                <p>Blog</p>
              </div>
            </div>
            <div style={{ width: "129px" }}>
              <h2>Support</h2>
              <div className="footer-texts">
                <p>Help Center</p>
                <p>Fundraising Tips</p>
                <p>Fundraiser Video</p>
                <p style={{ width: "129px" }}>Project Handbook</p>
                <p>Plans & Pricing</p>
                <p>Payouts</p>
                <p>Trust & Safety</p>
                <p>Contact Us</p>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <img src={CardPayment} alt="" srcset="" />
        </div>
      </div>
      <div className="footer-rights">
        <hr />
        <p>
          Copyright @ 2020 Ketto Online Ventures Pvt Ltd. All Rights Reserved.
          Terms of Use | Privacy Policy | AML Policy | Use of Cookies
        </p>
      </div>
    </div>
  );
};

export default Footer;
