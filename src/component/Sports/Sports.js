import React from "react";
import Sportrun from "../../assets/img_coaching.png";
import Sportcycle from "../../assets/img_cycling.png";
import Sportshoes from "../../assets/img_shoes.png";

import "./sports.css";
const Sports = () => {
  return (
    <div className="sports-container">
      <div className="sports-header">
        <h1>What is Sports Crowdfunding?</h1>
        <hr />
        <p>
          It is essential to any athlete or sportsperson trying to become the
          best they can be in what they do. However, unfortunately, it isn’t
          always easy for them to get the funds they need for training,
          equipment, and overall development.
        </p>
      </div>
      <div className="sports-stories">
        <div className="sports-story">
          <img src={Sportrun} alt="" />
          <div className="sports-story-content">
            <h2>
              Equipment, Nutrition & Coaching costs are a Burden for Many
              Individuals and Families of Athletes
            </h2>
            <p>
              Participation in local, state, and international sports
              competitions are costly. With the continuously shrinking of
              monetary funds from numerous sports & governing bodies, the
              expense provided by family and friends is exhausted quickly.
            </p>
          </div>
        </div>
        <div className="sports-story-inverse">
          <img src={Sportcycle} alt="" />

          <div className="sports-story-content">
            <h2>Try Sports Crowdfunding with Ketto</h2>
            <p>
              Through Sports Crowdfunding, we at Ketto aim to provide athletes,
              parents, friends, and sports governing bodies a unique platform
              that can empower athletes while simultaneously allowing you to be
              part of their journey and share their dreams as well as making
              sure your money is going towards a great cause!
            </p>
          </div>
        </div>
        <div className="sports-story">
          <div>
            <img src={Sportshoes} alt="" />
          </div>
          <div className="sports-story-content">
            <h2>
              Start a Sports Crowdfunding Campaign for Yourself or a Deserving
              Athlete/Sportsmen
            </h2>
            <p>
              Rather than look for sponsors via traditional channels, why not go
              online through Ketto Crowdfunding and reach a massive audience!
              It’s simple; create your crowdfunding campaign and let everyone
              know about it. We will provide you with a page where you can tell
              your story, and display photos and videos about what inspired you
              to do this in the first place. This will give supporters and
              people a chance to get to know who you are as an athlete. It’s a
              great way to connect with them, take them on the journey with you,
              and share your passion! By using Ketto’s Crowdfunding and
              fundraising platform, we will also enhance your profile and
              increase your fanbase. Start your Sports Fundraising Campaign on
              Ketto today!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sports;
