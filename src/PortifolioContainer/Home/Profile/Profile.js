import React from 'react';
import Typical from 'react-typical';
import ScrollService from '../../../utilities/ScrollService';
import "./Profile.css";

export default function Portifolio() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="https://www.facebook.com/arlen.freitas/" target="_blank" rel="noreferrer">
              <i class="fab fa-facebook-f"></i>
              </a>
              <a href="https://www.instagram.com/arllen_dy/" target="_blank" rel="noreferrer">
              <i class="fab fa-instagram"></i>
              </a>
              <a href="https://www.linkedin.com/in/arlenfreitas/" target="_blank" rel="noreferrer">
              <i class="fab fa-linkedin-in"></i>
              </a>
              <a href="https://github.com/arkyn25" target="_blank" rel="noreferrer">
              <i class="fab fa-github"></i>
              </a>  
            </div>  
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Olá, Me chamo <span className="highlighted-text">Arlen</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                {" "}
                <Typical
                  steps={[
                    'Entusiasta Dev 🧘',
                     1000,
                     'React/ReactJs Dev ✔️',
                     1000,
                     'MERN Stack Dev 💚',
                     1000,
                     'Full Stack Dev 😎',
                     1000,
                  ]}
                  loop={Infinity}
                />
              </h1>
              <span className="profile-role-tagline">
                Desenvolvedor de Aplicações Web Full-Stack.
              </span>
            </span>
          </div>
          <div className="profile-options">
            <button className="btn primary-btn"
            onClick={() => ScrollService.scrollHandler.scrollToHireMe()}>
              Me contrate
            </button>
            <a href="arlenfreitas.pdf" download="Arlen arlenfreitas.pdf">
              <button className="btn highlighted-btn">Meu Curriculo</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}
