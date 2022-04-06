import React from "react";
import "./Home.scss";

const Home = () => {
  return (
    <div className="home">
      <div className="home__container">
        <div className="home-content">
          <h3 className="home-intro">SO, YOU WANT TO TRAVEL TO</h3>
          <h1 className="home-heading">SPACE</h1>
          <p className="home-text">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <div className="home-button">
          <a className="explore" href="#home">
            EXPLORE
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
