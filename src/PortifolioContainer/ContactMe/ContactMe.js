import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import Typical from 'react-typical';

import imgBack from '../../../src/images/mailz.jpeg';
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading';
import ScrollService from '../../utilities/ScrollService';
import Animations from '../../utilities/Animations';
import './ContactMe.css';

export default function ContactMe(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id)
    return
    Animations.animations.fadeInScreen(props.id)
  }
  const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const [state, handleSubmit] = useForm("mknyryej");
  if (state.succeeded) {
    return <p className="msg-text">Obrigado por contatar Arlen!</p>;
  }  

  return (
    <div className="main-container" id={props.id || ''}>
      <ScreenHeading 
        subHeading={"Vamos Manter Contato!"}
        title={"Contate Me"}
      />
      <div className="central-form">
        <div className="col">
        <h2 className="title">
          {" "}
          <Typical
            steps={[
              'Entre Em Contato! 📧 ',
                1000,
              'Vamos trabalhar juntos e',
                1000,
              'Desenvolver aplicações web!',
                1000,
            ]}
            loop={Infinity}
          />
        </h2>
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
        <div className="back-form">
          <div className="img-back">
            <h4>Envie O Seu Email Aqui!</h4>
            <img src={imgBack} alt="img not found" />
          </div>
          <form onSubmit={handleSubmit}>
            <label htmlFor="email">
              Email Address
            </label>
            <input
              id="email"
              type="email" 
              name="email"
            />
            <ValidationError 
              prefix="Email" 
              field="email"
              errors={state.errors}
            />
            <textarea
              id="message"
              name="message"
            />
            <ValidationError 
              prefix="Message" 
              field="message"
              errors={state.errors}
            />
            <button type="submit" disabled={state.submitting}>
              Submit<i className="fa fa-paper-plane" />
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
