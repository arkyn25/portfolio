import React, { useState } from 'react';
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading';
import ScrollService from '../../utilities/ScrollService';
import Animations from '../../utilities/Animations';
import './Resume.css';

export default function Resume(props) {
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffSetStyle, setCarousalOffSetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id)
    return
    Animations.animations.fadeInScreen(props.id)
  }
  const fadeSubrscription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet">
          
            <span>{props.heading ? props.heading : ''}</span>
            {props.fromDate && props.toDate ? (
              <div className="heading-date">
                {props.fromDate + "-" + props.toDate}
              </div>
            ): (
              <div></div>
              )}
          </div>
          <div className="resume-sub-heading">
            <span>{props.subHeading ? props.subHeading : ''}</span>
          </div>
          <div className="resume-heading-description">
            <span>{props.description ? props.description : ''}</span>
          </div>
        </div>
      </div>
    );
  };

  
  
  const resumeBullets = [
    {label: "Education", logoSrc: "education.svg"},
    {label: "Trabalho", logoSrc: "work-history.svg"},
    {label: "Skills", logoSrc: "edit-alt.svg"},
    {label: "Projetos", logoSrc: "projects.svg"},
    {label: "Interesses", logoSrc: "interests.svg"},
  ];

  const programmingSkillDetails = [
    {skill: "JavaScript", ratingPercentage: 70 },
    {skill: "Python", ratingPercentage: 50 },
    {skill: "React.JS", ratingPercentage: 70 },
    {skill: "Express.JS", ratingPercentage: 65 },
    {skill: "Node.JS", ratingPercentage: 70 },
    {skill: "MongoDB", ratingPercentage: 70 },
    {skill: "MySQL", ratingPercentage: 70 },
    {skill: "HTML", ratingPercentage: 90 },
    {skill: "CSS", ratingPercentage: 80 },
    {skill: "GIT", ratingPercentage: 85 },
  ];

  const projectDetails = [
    {
      title: "Portifolio Pessoal",
      duration: { fromDate: "2022", toDate: "2022"},
      description: "Meu Portifolio pessoal para mostrar todos os meus detalhes e projetos em um só lugar",
      subHeading: "Tecnologia utilizada: HTML/CSS, JavaScript, ReactJS, BootStrap, react-carousel, react-typical...",
    },
    {
      title: "App de Receitas",
      duration: { fromDate: "2021", toDate: "2021"},
      description: "Um aplicativo de Receitas onde o cliente pode pesquisar por diversas receitas e drinks e fazer em qualquer lugar.",
      subHeading: "Tecnologia utilizada: Html/Css, JavaScript, ReactJS, BootStrap",
    },
  ];

  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <ResumeHeading
      heading={"Trybe, Desenvolvimento Software & Web Full Stack"}
      subHeading={
        "A Trybe é uma escola para pessoas que querem construir uma carreira de sucesso em tecnologia e que se compromete integralmente com seus estudantes, pois as pessoas só pagam quando conseguirem um bom trabalho.  O programa conta com mais de 1.500 horas de aulas presenciais e on-line e aborda introdução ao desenvolvimento de software, front-end, back-end, ciência da computação, engenharia de software, metodologias ágeis e habilidades comportamentais. O currículo da Trybe foi desenhado em parceria com as maiores em-presas de tecnologia do Brasil e do mundo e ao longo da formação, estudamos JavaScript, HTML, CSS, React, Node, Express.js, SQL, Git, entre outras linguagens e frameworks."
      }
      fromDate={"2021"}
      toDate={"2022"}
      />
    </div>,


    <div className="resume-screen-container" key="work-experience">
       <ResumeHeading
      heading={"Trybe"}
      subHeading={"Desenvolvimento Software & Web Full Stack"}
      fromDate={"2021"}
      toDate={"2021"}
      />
    </div>,
    <div className="resume-screen-container programming-skills-container" key="programming-skills">
        {programmingSkillDetails.map((skill, index) => (
          <div className="skill-parent" key={index}>
            <div className="heading-bullet"></div>
            <span>{skill.skill}</span>
            <div className="skill-percentage">
              <div style={{ width: skill.ratingPercentage + "%"}}
              className="active-percentage-bar">

              </div>
            </div>
          </div>
        ))}
    </div>,
    <div className="resume-screen-container" key="projects">
      {projectDetails.map((pDetails, index) => (
        <ResumeHeading 
          key={index}
          heading={pDetails.title}
          subHeading={pDetails.subHeading}
          description={pDetails.description}
          fromDate={pDetails.duration.fromDate}
          toDate={pDetails.duration.toDate}
        />
        ))}
    </div>,
    <div className="resume-screen-container" key="interests">
      <ResumeHeading 
        heading="Tecnologias em constante evolução!"
        description="Gosto de aprender novas linguagens e tecnologias para me manter sempre atualizado com mercado de tecnologia!"
      />
      <ResumeHeading 
        heading="Jogos online"
        description="Gosto de desafiar os meus reflexos e raciocinio logico com diferentes categorias afim de aprimorar minhas habilidades e me entreter nas horas vagas."
      />
      <ResumeHeading 
        heading="Hobies"
        description="Sou apaixonado por séries e filmes, amo uma boa historia e entreterimento."
      />
    </div>
  ];
  
  const handdleCarousal =(index) => {
    let offsetHeight = 360;
    let newCarousalOffset = {
      style: { transform: "translateY("+ index * offsetHeight * -1 + "px)"}
    };
    setCarousalOffSetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  }

  const getBullets = () => {
    return resumeBullets.map((svg, index) => (
      <div onClick={() => handdleCarousal(index)}
      className={index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"}
      key={index}>
        <img className="bullet-logo"
        src={require(`../../../public/img/${svg.logoSrc}`)}
        alt='mySvgImage'
        />
      </div>
    ));
  };

  const getResumeScreen = () => {
    return (
      <div 
        style={carousalOffSetStyle.style}
        className="resume-details-carousal"
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };

  return (
    <div className="resume-container screen-container" id={props.id || ""}>
      <div className="resume-content">
        <ScreenHeading title={'Resumo'} subHeading={'Meus Dados'}/>
        <div className="resume-card">
         
          <div className="resume-bullets">
            <div className="bullet-cotainer">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}
              </div>
            </div>
          </div>
          <div className="resume-bullet-details">{getResumeScreen()}</div>
        </div>
      </div>
    </div>
  )
}
