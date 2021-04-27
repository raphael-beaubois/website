import React from "react";
import "./styles.scss";
import { NavLink } from "react-router-dom";
import Bounce from "react-reveal/Bounce";
import us from "./us.png";
import france from "./fr1.png";

const Navigation = (props) => {
  const { lang, onButtonClick } = props;

  return (
    <div className="navigation">
      <Bounce left>
        <ul>
          {!lang ? (
            <a onClick={onButtonClick}>
              <img src={us} className="lang-button" />
            </a>
          ) : (
            <a onClick={onButtonClick}>
              <img src={france} className="lang-button-fr" />
            </a>
          )}
          <li>
            <a href="/">
              <i
                class="fas fa-home"
                style={{ fontSize: "2rem", marginTop: "20px", color: "grey" }}
              ></i>
            </a>
            <br />
            {!lang ? (
              <a href="/" className="navigation-link">
                Accueil
              </a>
            ) : (
              <a href="/" className="navigation-link">
                Home
              </a>
            )}
          </li>

          <li>
            <a href="/about">
              <i
                class="fas fa-id-card"
                style={{ fontSize: "2rem", marginTop: "20px", color: "grey" }}
              ></i>
            </a>
            <br />
            {!lang ? (
              <a href="/about" className="navigation-link">
                Bio
              </a>
            ) : (
              <a href="/about" className="navigation-link">
                About
              </a>
            )}
          </li>

          <li>
            <a href="/skills">
              <i
                class="fas fa-cogs"
                style={{ fontSize: "2rem", marginTop: "20px", color: "grey" }}
              ></i>
            </a>
            <br />
            {!lang ? (
              <a href="/skills" className="navigation-link">
                Skills
              </a>
            ) : (
              <a href="/skills" className="navigation-link">
                Skills
              </a>
            )}
          </li>

          <li>
            <a href="/project">
              <i
                class="far fa-eye"
                style={{ fontSize: "2rem", marginTop: "20px", color: "grey" }}
              ></i>
            </a>
            <br />
            {!lang ? (
              <a href="/project" className="navigation-link">
                Projets
              </a>
            ) : (
              <a href="/project" className="navigation-link">
                Works
              </a>
            )}
          </li>

          <li>
            <a href="/contact">
              <i
                class="far fa-envelope"
                style={{
                  fontSize: "2rem",
                  marginLeft: "3px",
                  marginTop: "20px",
                  color: "grey",
                }}
              ></i>
            </a>
            <br />
            <a href="/contact" className="navigation-link">
              Contact
            </a>
          </li>
        </ul>{" "}
      </Bounce>

      <div className="navigation-social">
        <Bounce bottom>
          <ul>
            <li>
              <a
                href="https://www.linkedin.com/in/raphaelbeaubois/"
                target="_blank"
              >
                <i
                  class="fab fa-linkedin-in"
                  style={{
                    fontSize: "1.5rem",
                    marginTop: "2px",
                    color: "grey",
                  }}
                ></i>
              </a>
            </li>
            <li>
              <a href="https://github.com/Thailz" target="_blank">
                <i
                  class="fab fa-github-square"
                  style={{
                    fontSize: "1.5rem",
                    marginTop: "2px",
                    color: "grey",
                  }}
                ></i>
              </a>
            </li>
          </ul>{" "}
        </Bounce>
      </div>
    </div>
  );
};

export default Navigation;
