import React from "react";
import "./Hero.css";
import { AiOutlineSearch } from "react-icons/ai";
import { FiChevronDown } from "react-icons/fi";
import { IoMdCall } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsWhatsapp } from "react-icons/bs";
import Logo from "../../assets/Ketto logo.svg";
import Testimonial from "../../assets/img_ testimonial.png";
import Dot from "../../assets/Frame 793.png";
import Bird from "../../assets/Birdie.svg";
const Hero = () => {
  return (
    <div className="hero">
      <div className="container">
        <header className="hero-header">
          <div className="navbar">
            <div className="logo">
              <img src={Logo} alt="" />
            </div>
            <div className="middle-header">
              <p>Browse Fundraiser</p>
              <p className="down-icon">
                Fundraiser for <FiChevronDown />
              </p>
              <p>How it works</p>
              <p>|</p>
              <p className="search">
                <AiOutlineSearch />
                Search
              </p>
            </div>
            <GiHamburgerMenu className="hamburger-menu" />
            <div className="right-header">
              <button>Start a Fundraiser</button>
              <select name="currency" id="currency">
                <option value="rupee">₹</option>
              </select>
              <a href="/">
                <p style={{ width: "50px" }}>Sign in</p>
              </a>
            </div>
          </div>
        </header>
        <div className="hero-main-container">
          <div className="hero-main-left-container">
            <h1 className="hero-main-title">
              Sports Crowdfunding Is a Great Way to Get Support From Fans and
              Followers
            </h1>
            <div>
              <p>
                Now with <span>0</span>% platform fees
              </p>

              <hr />
            </div>
            <div className="hero-left-testimonial">
              <img src={Testimonial} alt="" />
              <div>
                <p>
                  Purvi (Pushpesh’s friend) raised ₹ 23,78,790 for Pushpesh’s
                  Cancer treatment in just 26 days.
                </p>
                <img src={Dot} alt="" />
              </div>
            </div>
          </div>
          <div className="hero-main-right-container">
            <div className="form">
              <img className="form-logo" src={Bird} alt="" />
              <h2 className="form-title">Need Money Urgently?</h2>
              <div className="form-inputs">
                <input placeholder="Name" type="text" name="" id="" />
                <input placeholder="Email" type="email" id="" name="" />
                <input placeholder="Mobile Number" type="text" name="" id="" />
                <select name="" id="" placeholder="">
                  <option value="" disabled selected hidden>
                    What will the funds be used for?
                  </option>
                  <option value="">1</option>
                </select>
                <select name="" id="">
                  <option value="" disabled selected hidden>
                    Hospitalisation Status
                  </option>
                  <option value="">1</option>
                </select>
              </div>
              <p className="form-text">
                212 people started a fundraiser in last 2 days
              </p>
              <button className="btn-fundraiser">Start a Fundraiser</button>
              <div className="btn-group">
                <button className="btn-chat">
                  <span
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "10px",
                    }}
                  >
                    <BsWhatsapp />
                    Chat
                  </span>
                </button>
                <button className="btn-call">
                  <span
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "10px",
                    }}
                  >
                    <IoMdCall />
                    Get a call
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
