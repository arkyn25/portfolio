import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading';
import ScrollService from '../../utilities/ScrollService';
import Animations from '../../utilities/Animations';
import './Projects.css';
import pixelArt from '../../utils/projects/pixel-art.jpeg';
import recipes from '../../utils/projects/recipes-app.jpeg';
import star from '../../utils/projects/star-wars.jpeg';
import todo from '../../utils/projects/todo-list.jpeg';
import facebook from '../../utils/projects/facebook.png';
import movie from '../../utils/projects/movie-crud.jpeg';
import trivia from '../../utils/projects/trivia.jpeg';
import shape from '../../utils/Testimonial/shape-bg.png';


export default function Testimonial(props) {

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id)
    return
    Animations.animations.fadeInScreen(props.id)
  }
  const fadeInSubrscription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const options = {
    loop: true,
    margin: 0,
    nav: true,
    animateIn: "bounceInRight",
    animateOut: "bounceOutRight",
    dots: true,
    autoplay: true,
    smartSpeed: 1000,
    responsive: {
      0: {
        items:1,
      },
      768: {
        items:1,
      },
      1000: {
        items:3,
      },
    }
  }
  return (
    <div>
      <ScreenHeading
        title={'Projetos'}
        subHeading={'Meus Projetos'}
      />
      
      <section className="testimonial-section" id={props.id || ''}>
        <div className="container">
          <div className="row">
            <OwlCarousel className="owl-carousel" id="testimonial-carousel" {...options}>
              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                    <p>
                    <img src={recipes} alt="no internet" />
                      <i className="fa fa-quote-left" />
                      Projeto Recipes App
                      <i className="fa fa-quote-right" />
                    </p>
                  </div>
                  <div className="link-button">
                    <a href="https://github.com/arkyn25/recipes-app" target="_blank" rel="noreferrer">
                       <button type="button">
                         GitHub
                       </button>
                    </a>
                    </div>                 
                </div>
              </div>
              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                    <p>
                      <img src={todo} alt="no internet" />
                      <i className="fa fa-quote-left" />
                      Projeto Todo List.
                      <i className="fa fa-quote-right" />
                    </p>
                  </div>
                  <div className="link-button">
                    <a href="https://github.com/arkyn25/todo-react">
                      <button type="button">GitHub</button>
                    </a>
                    </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                    <p>
                    <img src={pixelArt} alt="no internet" />
                      <i className="fa fa-quote-left" />
                      Projeto Pixel Art.
                      <i className="fa fa-quote-right" />
                    </p>
                  </div>
                  <div className="link-button">
                    <a href="https://github.com/arkyn25/pixel-art" target="_blank" rel="noreferrer">
                      <button type="button">GitHub</button>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                    <p>
                    <img src={movie} alt="no internet" />
                      <i className="fa fa-quote-left" />
                      Projeto Movie Card Crud.
                      <i className="fa fa-quote-right" />
                    </p>
                  </div>
                  <div className="link-button">
                    <a href="https://github.com/arkyn25/movie-card-crud" target="_blank" rel="noreferrer">
                      <button type="button">GitHub</button>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                    <p>
                    <img src={facebook} alt="no internet" />
                      <i className="fa fa-quote-left" />
                      Projeto Facebook.
                      <i className="fa fa-quote-right" />
                    </p>
                  </div>
                  <div className="link-button">
                    <a href="https://github.com/arkyn25/facebook-signup" target="_blank" rel="noreferrer">
                      <button type="button">GitHub</button>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                    <p>
                    <img src={star} alt="no internet" />
                      <i className="fa fa-quote-left" />
                      Projeto Star Wars Planet.
                      <i className="fa fa-quote-right" />
                    </p>
                  </div>
                  <div className="link-button">
                    <a href="https://github.com/arkyn25/starwars-planets" target="_blank" rel="noreferrer">
                      <button type="button">GitHub</button>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                    <p>
                    <img src={trivia} alt="no internet" />
                      <i className="fa fa-quote-left" />
                      Projeto Trivia Game.
                      <i className="fa fa-quote-right" />
                    </p>
                  </div>
                  <div className="link-button">
                    <a href="https://github.com/arkyn25/trivia-app" target="_blank" rel="noreferrer">
                      <button type="button">GitHub</button>
                    </a>
                  </div>
                </div>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </section>
      <div className="footer-image">
        <img src={shape} alt="no conection" />
      </div>
    </div>
  )
}
