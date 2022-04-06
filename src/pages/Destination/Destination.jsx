import React, { useState } from "react";
import "./Destination.scss";
import Moon from "../../assets/destination/image-moon.png";

const data = [
  {
    id: 1,
    name: "MOON",
    description:
      "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
    distance: "384,400 KM",
    travel: "3 DAYS",
  },
  {
    id: 2,
    name: "MARS",
    description:
      "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
    distance: "225 MIL. KM",
    travel: "9 MONTHS",
  },
  {
    id: 3,
    name: "EUROPA",
    description:
      "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
    distance: "628 MIL. KM",
    travel: "3 YEARS",
  },
  {
    id: 4,
    name: "TITAN",
    description:
      "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
    distance: "1.6 BIL. KM",
    travel: "7 YEARS",
  },
];

const Destination = () => {
  const [activeLink, setAcTiveLink] = useState({
    activeObject: {name:'MOON'},
    objects: [
      { name: "MOON" },
      { name: "MARS" },
      { name: "EUROPA" },
      { name: "TITAN" },
    ],
  });

  function toggleActive(index){
    setAcTiveLink({...activeLink, activeObject: activeLink.objects[index]})


  }

  function toggleActiveStyles(index){
    if(activeLink.objects[index] === activeLink.activeObject){
      return 'link active';
    } else {
      return 'link inactive'
    }
  }

  return (
    <div className="destination">
      <div className="destination__container">
        <div className="container-upper">
          <h2 className="destination-pick">
            <span>01</span> Pick your destination
          </h2>
          <img className="hero" src={Moon} alt="" />
          <ul className="destinations">
            {activeLink.objects.map((item, index) => (
              <li key={index} onClick={() => {toggleActive(index)}} className={toggleActiveStyles(index)}>
                {item.name}
              </li>
            ))}
          </ul>
          <h1 className="destination-heading">MOON</h1>
          <p className="destination-text">
            "See our planet as you’ve never seen it before. A perfect relaxing
            trip away to help regain perspective and come back refreshed. While
            you’re there, take in some history by visiting the Luna 2 and Apollo
            11 landing sites.",
          </p>
        </div>
        <hr className="destination-break" />
        <div className="container-lower">
          <div className="distance">
            <h2 className="distance-heading">AVG. DISTANCE</h2>
            <h3 id="distance">384,400 KM</h3>
          </div>
          <div className="time">
            <h2 className="time-heading">EST. TRAVEL TIME</h2>
            <h3 id="time">3 DAYS</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destination;
