import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import victor from '../assets/images/victorLookingClose.jpg';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={victor} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/supervipe" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/victor-pontes-santos/?locale=en_US" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Victor Pontes Santos</h1>
          <p>Software Developer</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/supervipe" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/victor-pontes-santos/?locale=en_US" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;