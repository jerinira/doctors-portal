import React from 'react';
import './Home.css';
import image1 from '../../images/Mask Group 1.png';
import { Link } from 'react-router-dom';



const Home = () => {
  return (
    <div className="homeContainer">
      <img className="rightSide-img"src={image1}alt="Chair" />
      <div className="home-left">
        <div className="home-left-text">
          <h1>Your New Smile Starts Here</h1>
          <p>
            Never continue in a job you don’t enjoy. If you’re happy in what you’re doing, you’ll like yourself, you’ll have inner peace. And if you have that, along with physical health, you will have had more success than you could possibly have imagined
          </p>
          <Link to="/appointment" className="appointment-button" style={{ textDecoration: 'none', color: 'white' }}>
            GET APPOINTMENT
          </Link>

        </div>
      </div>
    </div>
  );
};

export default Home;