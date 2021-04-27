import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "./styles.scss";
import "react-vertical-timeline-component/style.min.css";
import Particles from "react-particles-js";

import { BIO_FR, BIO_EN, BIO_INTRO_FR, BIO_INTRO_EN } from "./AboutEnum";

const About = (props) => {
  const { lang } = props;

  return (
    <div className="about">
      <div
        className="about-head"
        style={{
          textAlign: "center",
          margin: "auto",
          marginTop: 50,
          marginBottom: "50px",
          width: "85%",
          display: "block",
          color: "white",
          fontFamily: "Abel",
          fontSize: "1.3rem",
          marginTop: "40px",
          textAlign: "justify",
          textJustify: "inter-word",
          padding: "20px",
        }}
      >
        {!lang ? (
          <h2 style={{ textAlign: "center" }}>MON PARCOURS</h2>
        ) : (
          <h2 style={{ textAlign: "center" }}>ABOUT ME</h2>
        )}
        {!lang ? <p>{BIO_FR}</p> : <p>{BIO_EN}</p>}

        {!lang ? (
          <h4>ET SINON DANS LA VIE PRIVEE ?</h4>
        ) : (
          <h4>IN PRIVATE LIFE</h4>
        )}

        {!lang ? <p>{BIO_INTRO_FR}</p> : <p>{BIO_INTRO_EN}</p>}
      </div>

      {/* DEBUT DE LA TIMELINE */}

      <div className="about-timeline">
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(104, 104, 104)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date="Jan 2021 - present"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          >
            {!lang ? (
              <h2
                className="vertical-timeline-element-title"
                style={{ fontSize: "2rem", fontFamily: "Abel", color: "white" }}
              >
                Developpeur Web Fullstack
              </h2>
            ) : (
              <h2
                className="vertical-timeline-element-title"
                style={{ fontSize: "2rem", fontFamily: "Abel", color: "white" }}
              >
                Fullstack Web Developer
              </h2>
            )}
            <p
              className="vertical-timeline-element-title"
              style={{ fontSize: "1.3rem", fontFamily: "Abel", color: "white" }}
            >
              Gestion-Traiteur Inc.
            </p>
            <p className="vertical-timeline-element-subtitle">
              Montréal, Canada.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(104, 104, 104)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date="Jan 2021 - present"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          >
            {!lang ? (
              <h2
                className="vertical-timeline-element-title"
                style={{ fontSize: "2rem", fontFamily: "Abel", color: "white" }}
              >
                Developpeur Web Front-end
              </h2>
            ) : (
              <h2
                className="vertical-timeline-element-title"
                style={{ fontSize: "2rem", fontFamily: "Abel", color: "white" }}
              >
                Front End Web Developer
              </h2>
            )}
            <p
              className="vertical-timeline-element-title"
              style={{ fontSize: "1.3rem", fontFamily: "Abel", color: "white" }}
            >
              Agence Ninja
            </p>
            <p className="vertical-timeline-element-subtitle">
              Montréal, Canada.
            </p>
          </VerticalTimelineElement>

          {/* PROJET ECOLE */}

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(104, 104, 104)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date="Sept 2020 - Dec 2020"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          >
            {!lang ? (
              <h2
                className="vertical-timeline-element-title"
                style={{ fontSize: "2rem", fontFamily: "Abel", color: "white" }}
              >
                Projet de fin d'étude: "LE NID"
              </h2>
            ) : (
              <h2
                className="vertical-timeline-element-title"
                style={{ fontSize: "2rem", fontFamily: "Abel", color: "white" }}
              >
                End of study project: "LE NID"
              </h2>
            )}

            {!lang ? (
              <p className="vertical-timeline-element-subtitle">
                Ecole O'Clock, France.
              </p>
            ) : (
              <p className="vertical-timeline-element-subtitle">
                O'Clock School, France.
              </p>
            )}

            {!lang ? (
              <p style={{ textAlign: "justify" }}>
                "Le Nid" a pour but de mettre en relation développeurs et
                professionnels en manque de visibilité et pouvant s'entraider
                mutuellement. Le développeur met à disposition ses compétences
                techniques, améliorant, ou créant intégralement le site du
                professionnel qui, pour sa part, s'engage à laisser apparentes
                les références du développeur sur le site.
                <br />
                <br />
                Sur ce projet, j'ai essentiellement travaillé sur la partie
                Front-end du site:
                <ul>
                  <li> Design de l'interface</li>
                  <li>Intégrations</li>
                  <li>Création des composants React</li>
                  <li>Liaison avec la partie Back-end</li>
                  <li>Mise en place de Redux</li>
                </ul>
              </p>
            ) : (
              <p style={{ textAlign: "justify" }}>
                The nest aims to connect developers and professionals in lack of
                visibility and being able to help each other. The developer
                makes his technical skills available, improving, or creating
                entirely the site of the professional who, for his part,
                undertakes to leave visible the developer's references on the
                site.
                <br />
                <br />
                On this project, I mainly work on the front-end party website:
                <ul>
                  <li>Interface design</li>
                  <li>Integrations</li>
                  <li>Creating React components</li>
                  <li>Liaison with the Back-end party</li>
                  <li>Implementation of Redux</li>
                </ul>
              </p>
            )}

            <p>
              Technologies:
              <ul>
                <li>React / Redux</li>
                <li>Node JS / Express JS</li>
              </ul>
            </p>
          </VerticalTimelineElement>

          {/* ECOLE O CLOCK */}

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(104, 104, 104)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date="Mai 2020 – Oct. 2020"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          >
            {!lang ? (
              <h2
                className="vertical-timeline-element-title"
                style={{ fontSize: "2rem", fontFamily: "Abel", color: "white" }}
              >
                Formation Développeur Web et Application Mobile
              </h2>
            ) : (
              <h2
                className="vertical-timeline-element-title"
                style={{ fontSize: "2rem", fontFamily: "Abel", color: "white" }}
              >
                {" "}
                Web and mobile application developer Formation
              </h2>
            )}

            {!lang ? (
              <p className="vertical-timeline-element-subtitle">
                Ecole O'Clock, France.
              </p>
            ) : (
              <p className="vertical-timeline-element-subtitle">
                O'Clock School, France.
              </p>
            )}

            {!lang ? (
              <p style={{ textAlign: "justify" }}>
                O'clock est une formation intensive en programmation. La
                formations dure 5 mois, abordant de nombreux sujets, allant de
                la programmation orientée objet en PHP, jusqu’à une
                spécialisation en Javascript/Wordpress.
              </p>
            ) : (
              <p style={{ textAlign: "justify" }}>
                O'clock is intensive training in programming. The training lasts
                5 months, covering many subjects, ranging from object-oriented
                programming in PHP, to a specialization in Javascript/Wordpress.
              </p>
            )}

            <p>
              Technologies:
              <ul>
                <li>HTML / CSS / SCSS</li>
                <li>Javascript</li>
                <li>PHP / LUMEN / LARAVEL</li>
                <li>
                  Framework CSS:{" "}
                  <ul>
                    <li>Bootstrap</li>
                    <li>Bulma</li>
                    <li>Semantic UI</li>
                    <li>Material UI</li>
                  </ul>
                </li>
              </ul>
            </p>

            <p>
              Spécialisation React ⚛️:
              <ul>
                <li>JSX</li>
                <li>Components</li>
                <li>Lifecycle</li>
                <li>NPM / YARN / WEBPACK</li>
                <li>Redux</li>
              </ul>
            </p>
          </VerticalTimelineElement>

          {/* MAMIE CLAFOUTIS */}

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(104, 104, 104)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date="2018 - 2020"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          >
            {!lang ? (
              <h2
                className="vertical-timeline-element-title"
                style={{ fontSize: "2rem", fontFamily: "Abel", color: "white" }}
              >
                Sous-Chef de Laboratoire
              </h2>
            ) : (
              <h2
                className="vertical-timeline-element-title"
                style={{ fontSize: "2rem", fontFamily: "Abel", color: "white" }}
              >
                Pastry Chef
              </h2>
            )}

            {!lang ? (
              <p
                className="vertical-timeline-element-title"
                style={{
                  fontSize: "1.3rem",
                  fontFamily: "Abel",
                  color: "white",
                }}
              >
                Mamie Clafoutis
              </p>
            ) : (
              <p>Mamie Clafoutis</p>
            )}

            {!lang ? (
              <p>
                <ul>
                  <li>Gestion de personnel</li>
                  <li>Mise en place de l'environnement de travail</li>
                  <li>Résolution de problèmes</li>
                  <li>Travail en autonomie</li>
                  <li>Respect des délais</li>
                  <li>Formation du personnel</li>
                </ul>{" "}
              </p>
            ) : (
              <p>
                <ul>
                  <li>Staff management</li>
                  <li>Setting up of the working environment</li>
                  <li>Problems solving</li>
                  <li>Works independently</li>
                  <li>Respect of deadlines</li>
                  <li>Staff training</li>
                </ul>
              </p>
            )}
            <p className="vertical-timeline-element-subtitle">
              Montréal, Canada.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(104, 104, 104)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date="2018"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          >
            {!lang ? (
              <h2
                className="vertical-timeline-element-title"
                style={{ fontSize: "2rem", fontFamily: "Abel", color: "white" }}
              >
                Début de Formation en Autodidacte sur la Programmation
              </h2>
            ) : (
              <h2
                className="vertical-timeline-element-title"
                style={{ fontSize: "2rem", fontFamily: "Abel", color: "white" }}
              >
                Beginning of Self-Taught Programming on Programming
              </h2>
            )}
            <p
              className="vertical-timeline-element-title"
              style={{ fontSize: "1.3rem", fontFamily: "Abel", color: "white" }}
            >
              <ul>
                <li>Openclassroom</li>
                <li>Formation Udemy</li>
                <li>Youtube</li>
                <li>Livres de programmation</li>
              </ul>
            </p>

            <p className="vertical-timeline-element-subtitle">
              Montréal, Canada.
            </p>
          </VerticalTimelineElement>
          {/* CHOCOLATERIE BONNEAU */}

          <VerticalTimelineElement
            className="vertical-timeline-element--work "
            contentStyle={{ background: "rgb(104, 104, 104)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date="2015 - 2018"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          >
            {!lang ? (
              <h2
                className="vertical-timeline-element-title"
                style={{ fontSize: "2rem", fontFamily: "Abel", color: "white" }}
              >
                Chef pâtissier
              </h2>
            ) : (
              <h2
                className="vertical-timeline-element-title"
                style={{ fontSize: "2rem", fontFamily: "Abel", color: "white" }}
              >
                Pastry Chef
              </h2>
            )}

            <p
              className="vertical-timeline-element-title"
              style={{ fontSize: "1.3rem", fontFamily: "Abel", color: "white" }}
            >
              Chocolaterie Bonneau
            </p>

            {!lang ? (
              <p>
                <ul>
                  <li>Gestion de personnel</li>
                  <li>Créations du département pâtisserie</li>
                  <li>Résolution de problèmes</li>
                  <li>Travail en autonomie</li>
                  <li>Formation du personnel</li>
                </ul>{" "}
              </p>
            ) : (
              <p>
                <ul>
                  <li>Staff management</li>
                  <li>Setting up of the working environment</li>
                  <li>Problems solving</li>
                  <li>Works independently</li>
                  <li>Staff training</li>
                </ul>{" "}
              </p>
            )}
            <p className="vertical-timeline-element-subtitle">
              Montréal, Canada.
            </p>
          </VerticalTimelineElement>

          {/* PATISSERIE DUBOIS */}

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(104, 104, 104)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date="2014 - 2015"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          >
            {!lang ? (
              <h2
                className="vertical-timeline-element-title"
                style={{ fontSize: "2rem", fontFamily: "Abel", color: "white" }}
              >
                Chef pâtissier
              </h2>
            ) : (
              <h2
                className="vertical-timeline-element-title"
                style={{ fontSize: "2rem", fontFamily: "Abel", color: "white" }}
              >
                Pastry Chef{" "}
              </h2>
            )}

            <p
              className="vertical-timeline-element-title"
              style={{ fontSize: "1.3rem", fontFamily: "Abel", color: "white" }}
            >
              Maison Dubois
            </p>
            <p className="vertical-timeline-element-subtitle">
              Sully-sur-Loire, France.
            </p>
          </VerticalTimelineElement>

          {/* PATISSERIE BAZIL */}

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(104, 104, 104)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date="2013 - 2014"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          >
            {!lang ? (
              <h2
                className="vertical-timeline-element-title"
                style={{ fontSize: "2rem", fontFamily: "Abel", color: "white" }}
              >
                Chef pâtissier
              </h2>
            ) : (
              <h2
                className="vertical-timeline-element-title"
                style={{ fontSize: "2rem", fontFamily: "Abel", color: "white" }}
              >
                Pastry Chef
              </h2>
            )}
            <p
              className="vertical-timeline-element-title"
              style={{ fontSize: "1.3rem", fontFamily: "Abel", color: "white" }}
            >
              Arabesque Gourmande
            </p>
            <p className="vertical-timeline-element-subtitle">
              Orléans, France.
            </p>
          </VerticalTimelineElement>

          {/* BOULANGERIE TENDREPI */}

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(104, 104, 104)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date="2006 - 2008"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          >
            <h2
              className="vertical-timeline-element-title"
              style={{ fontSize: "2rem", fontFamily: "Abel", color: "white" }}
            >
              Brevet Technique des Métiers Pâtisserie, Chocolaterie, Glacerie
            </h2>
            <p
              className="vertical-timeline-element-title"
              style={{ fontSize: "1.3rem", fontFamily: "Abel", color: "white" }}
            >
              ESFORMA Charles Peguy <br />
              Chocolaterie Auger
            </p>

            <p className="vertical-timeline-element-subtitle">
              La-Ferté-Saint-Aubin, France.
            </p>
            <br />
            <br />
            <hr></hr>

            <h2
              className="vertical-timeline-element-title"
              style={{ fontSize: "2rem", fontFamily: "Abel", color: "white" }}
            >
              Mentions Complémentaire Dessert à l'assiette
            </h2>
            <p
              className="vertical-timeline-element-title"
              style={{ fontSize: "1.3rem", fontFamily: "Abel", color: "white" }}
            >
              ESFORMA Charles Peguy <br />
              Arabesque Gourmande
            </p>

            <p className="vertical-timeline-element-subtitle">
              Orléans, France.
            </p>
            <br />
            <br />
            <hr></hr>
            <h2
              className="vertical-timeline-element-title"
              style={{ fontSize: "2rem", fontFamily: "Abel", color: "white" }}
            >
              CAP Pâtisserie
            </h2>
            <p
              className="vertical-timeline-element-title"
              style={{ fontSize: "1.3rem", fontFamily: "Abel", color: "white" }}
            >
              ESFORMA Charles Peguy <br />
              Arabesque Gourmande
            </p>

            <p className="vertical-timeline-element-subtitle">
              Orléans, France.
            </p>
            <br />
            <br />
            <hr></hr>

            <h2
              className="vertical-timeline-element-title"
              style={{ fontSize: "2rem", fontFamily: "Abel", color: "white" }}
            >
              CAP Boulangerie
            </h2>
            <p
              className="vertical-timeline-element-title"
              style={{ fontSize: "1.3rem", fontFamily: "Abel", color: "white" }}
            >
              ESFORMA Charles Peguy <br />
              Boulangerie Tendrépi
            </p>

            <p className="vertical-timeline-element-subtitle">
              Orléans, France.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
      <Particles
        params={{
          autoPlay: true,
          background: {
            color: {
              value: "#000000",
            },
            image: "",
            position: "50% 50%",
            repeat: "no-repeat",
            size: "cover",
            opacity: 0,
          },
          backgroundMask: {
            composite: "destination-out",
            cover: {
              color: {
                value: "#fff",
              },
              opacity: 1,
            },
            enable: false,
          },
          backgroundMode: {
            enable: true,
          },
          detectRetina: true,
          fpsLimit: 990,
          infection: {
            cure: false,
            delay: 0,
            enable: false,
            infections: 0,
            stages: [],
          },
          interactivity: {
            detectsOn: "canvas",
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onDiv: {
                selectors: [],
                enable: false,
                mode: [],
                type: "circle",
              },
              onHover: {
                enable: true,
                mode: "connect",
                parallax: {
                  enable: false,
                  force: 2,
                  smooth: 10,
                },
              },
              resize: true,
            },
            modes: {
              attract: {
                distance: 200,
                duration: 0.4,
                speed: 1,
              },
              bounce: {
                distance: 200,
              },
              bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.8,
                size: 40,
              },
              connect: {
                distance: 80,
                links: {
                  opacity: 0.5,
                },
                radius: 60,
              },
              grab: {
                distance: 400,
                links: {
                  blink: false,
                  consent: false,
                  opacity: 1,
                },
              },
              light: {
                area: {
                  gradient: {
                    start: {
                      value: "#ffffff",
                    },
                    stop: {
                      value: "#000000",
                    },
                  },
                  radius: 1000,
                },
                shadow: {
                  color: {
                    value: "#000000",
                  },
                  length: 2000,
                },
              },
              push: {
                quantity: 4,
              },
              remove: {
                quantity: 2,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
                speed: 1,
              },
              slow: {
                factor: 3,
                radius: 200,
              },
              trail: {
                delay: 1,
                quantity: 1,
                particles: {
                  bounce: {
                    horizontal: {
                      random: {},
                    },
                    vertical: {
                      random: {},
                    },
                  },
                  collisions: {
                    bounce: {
                      horizontal: {
                        random: {},
                      },
                      vertical: {
                        random: {},
                      },
                    },
                  },
                  color: {
                    animation: {},
                  },
                  life: {
                    delay: {
                      random: {},
                    },
                    duration: {
                      random: {},
                    },
                  },
                  links: {
                    shadow: {},
                    triangles: {},
                  },
                  move: {
                    angle: {},
                    attract: {
                      rotate: {},
                    },
                    gravity: {},
                    noise: {
                      delay: {
                        random: {},
                      },
                    },
                    outModes: {},
                    trail: {},
                  },
                  number: {
                    density: {},
                  },
                  opacity: {
                    animation: {},
                    random: {},
                  },
                  rotate: {
                    animation: {},
                  },
                  shadow: {
                    offset: {},
                  },
                  shape: {},
                  size: {
                    animation: {},
                    random: {},
                  },
                  stroke: {
                    color: {
                      value: "",
                      animation: {
                        enable: false,
                        speed: 0,
                        sync: false,
                      },
                    },
                  },
                  twinkle: {
                    lines: {},
                    particles: {},
                  },
                },
              },
            },
          },
          manualParticles: [],
          motion: {
            disable: false,
            reduce: {
              factor: 4,
              value: false,
            },
          },
          particles: {
            bounce: {
              horizontal: {
                random: {
                  enable: false,
                  minimumValue: 0.1,
                },
                value: 1,
              },
              vertical: {
                random: {
                  enable: false,
                  minimumValue: 0.1,
                },
                value: 1,
              },
            },
            collisions: {
              bounce: {
                horizontal: {
                  random: {
                    enable: false,
                    minimumValue: 0.1,
                  },
                  value: 1,
                },
                vertical: {
                  random: {
                    enable: false,
                    minimumValue: 0.1,
                  },
                  value: 1,
                },
              },
              enable: false,
              mode: "bounce",
            },
            color: {
              value: "#b5b5b5",
              animation: {
                enable: true,
                speed: 10,
                sync: true,
              },
            },
            life: {
              count: 0,
              delay: {
                random: {
                  enable: false,
                  minimumValue: 0,
                },
                value: 0,
                sync: false,
              },
              duration: {
                random: {
                  enable: false,
                  minimumValue: 0.0001,
                },
                value: 0,
                sync: false,
              },
            },
            links: {
              blink: false,
              color: {
                value: "#ffffff",
              },
              consent: false,
              distance: 100,
              enable: true,
              frequency: 1,
              opacity: 0.4,
              shadow: {
                blur: 5,
                color: {
                  value: "#00ff00",
                },
                enable: false,
              },
              triangles: {
                enable: false,
                frequency: 1,
              },
              width: 1,
              warp: false,
            },
            move: {
              angle: {
                offset: 45,
                value: 90,
              },
              attract: {
                enable: false,
                rotate: {
                  x: 600,
                  y: 1200,
                },
              },
              direction: "none",
              distance: 0,
              enable: true,
              gravity: {
                acceleration: 9.81,
                enable: false,
                maxSpeed: 90,
              },
              noise: {
                delay: {
                  random: {
                    enable: false,
                    minimumValue: 0,
                  },
                  value: 0,
                },
                enable: false,
              },
              outModes: {
                default: "out",
                bottom: "out",
                left: "out",
                right: "out",
                top: "out",
              },
              random: false,
              size: false,
              speed: 4,
              straight: false,
              trail: {
                enable: false,
                length: 10,
                fillColor: {
                  value: "#000000",
                },
              },
              vibrate: false,
              warp: false,
            },
            number: {
              density: {
                enable: true,
                area: 2500,
                factor: 2700,
              },
              limit: 250,
              value: 70,
            },
            opacity: {
              random: {
                enable: false,
                minimumValue: 0.1,
              },
              value: 0.5,
              animation: {
                enable: false,
                minimumValue: 0.1,
                speed: 3,
                sync: false,
              },
            },
            reduceDuplicates: false,
            rotate: {
              random: {
                enable: false,
                minimumValue: 0,
              },
              value: 0,
              animation: {
                enable: false,
                speed: 0,
                sync: false,
              },
              direction: "clockwise",
              path: false,
            },
            shadow: {
              blur: 0,
              color: {
                value: "#000000",
              },
              enable: false,
              offset: {
                x: 0,
                y: 0,
              },
            },
            shape: {
              options: {
                polygon: {
                  sides: 5,
                },
                image: {
                  src: "https://cdn.matteobruni.it/images/particles/github.svg",
                  width: 100,
                  height: 100,
                },
              },
              type: "circle",
            },
            size: {
              random: {
                enable: true,
                minimumValue: 1,
              },
              value: 3,
              animation: {
                destroy: "none",
                enable: false,
                minimumValue: 0.1,
                speed: 20,
                startValue: "max",
                sync: false,
              },
            },
            stroke: {
              width: 0,
              color: {
                value: "",
                animation: {
                  enable: false,
                  speed: 0,
                  sync: false,
                },
              },
            },
            twinkle: {
              lines: {
                enable: false,
                frequency: 0.05,
                opacity: 1,
              },
              particles: {
                enable: false,
                frequency: 0.05,
                opacity: 1,
              },
            },
          },
          pauseOnBlur: true,
          themes: [],
        }}
      />
    </div>
  );
};

export default About;
