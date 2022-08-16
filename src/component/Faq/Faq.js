import React from "react";
import "./Faq.css";
import { RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";

const Faq = () => {
  return (
    <div className="faq">
      <div className="faq-container">
        <div className="faq-header">
          <h1 className="faq-heading">Frequently Asked Questions</h1>
          <hr />
        </div>
        <div className="faq-body">
          <div className="content">
            <div className="content-text">
              <div className="faq-textcontent">
                <h2 className="faq-title">
                  I want to start a medical fundraiser. What all do i need?
                </h2>
                <p className="faq-description">
                  For your fundraiser to be as transparent as possible, upload a
                  scanned copy of your hospital bill mentioning the medical
                  condition and the amount you require along with high
                  resolution photograph of the patient.
                </p>
              </div>
              <div>
                <RiArrowUpSLine
                  style={{ marginTop: "10px", marginRight: "10px" }}
                />
              </div>
            </div>
          </div>
          <div className="content-closed">
            <h2 className="faq-title closed">
              I want to start raising funds, how do I start a fundraiser on
              Ketto?
            </h2>
            <div>
              <RiArrowDownSLine style={{ marginRight: "10px" }} />
            </div>
          </div>
          <div className="content-closed">
            <h2 className="faq-title closed">
              I don’t see the medical treatment I want to raise funds for in the
              list, what do I do?
            </h2>
            <div>
              <RiArrowDownSLine style={{ marginRight: "10px" }} />
            </div>
          </div>
          <div className="content-closed">
            <h2 className="faq-title closed">
              I have more questions, who do I write to?
            </h2>
            <div>
              <RiArrowDownSLine style={{ marginRight: "10px" }} />
            </div>
          </div>
        </div>
        <div className="faq-footer">
          <h2 className="faq-footer-title">Have any query or Need help?</h2>
          <p className="faq-footer-text">Receive a call from a Ketto Advisor</p>
          <button className="btn">Yes, I want to receive a call</button>
        </div>
      </div>
    </div>
  );
};

export default Faq;
