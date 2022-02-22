import React, { useEffect } from 'react';
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading';
import ScrollService from '../../utilities/ScrollService';
import Animations from '../../utilities/Animations';
import './AboutMe.css';

export default function AboutMe(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id)
    return
    Animations.animations.fadeInScreen(props.id)
  }
  const fadeSubrscription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const SCREEN_CONSTSANTS = {
    description: "Olá, eu me chamo Arlen Freitas, tenho 29 anos, sou natural de Montes Claros/Mg. Apaixonado por tecnologia desde criança, adorava escrever scripts para jogos online como hobby e acabei desenvolvendo uma paixão por escrever códigos e resolver desafios. Estou sempre em busca de aprender ferramentas e tecnologias novas afim de aprimorar minhas habilidades em programação para poder sempre estar me desafiando e enfrentando novos desafios!",
    highlights: {
      bullets: [
        "HTML/CSS",
        "JavaScript",
        "Python",
        "NodeJs",
        "Express",
        "Bootstrap & Tailwind Css",
        "Redux e ContextAPI para gerenciamento de estados",
        "Mysql e Mongodb para banco de dados",
        "Rest Api",
      ],
      heading: "Aqui algumas tecnologias que utilizo:"
    }
  }
  const renderHighLight = () => {
    return (
      SCREEN_CONSTSANTS.highlights.bullets.map((value, i) => (
        <div className="highlight" key={i}>
          <div className="highlight-blob">
            <span>{value}</span>
          </div>
        </div>
      ))
    )
  }
  return (
    <div className="about-me-container screen-container" id={props.id || ""}>
      <div className="about-me-parent">
        <ScreenHeading title={'Sobre Mim'} subHeading={'Por que me escolher?'}/>
        <div className="about-me-card">
          <div className="about-me-profile"></div>
          <div className="about-me-details">
            <span className="about-me-description">{SCREEN_CONSTSANTS.description}</span>
              <div className="about-me-highlights">
                <div className="highlights-heading">
                  <span>{SCREEN_CONSTSANTS.highlights.heading}</span>
                </div>
                {renderHighLight()}
              </div>
              <div className="about-me-options">
              <button className="btn primary-btn"
              onClick={() => ScrollService.scrollHandler.scrollToHireMe()}>
              {" "}
              Me contrate{" "}
            </button>
            <a href="arlenfreitas.pdf" download="Arlen arlenfreitas.pdf">
              <button className="btn highlighted-btn">Meu Curriculo</button>
            </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
