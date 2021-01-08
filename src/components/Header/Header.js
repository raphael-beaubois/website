import React from 'react';
import './styles.scss';
import Particles from 'react-particles-js';

import Tilt from "react-parallax-tilt";
import TextyAnim from 'rc-texty';
import Fade from 'react-reveal/Fade';
import Rotate from 'react-reveal/Rotate';
import Zoom from 'react-reveal/Zoom';
import Slide from 'react-reveal/Slide';

import ufo from './ufo.png';



const styles = {
    root: {
      fontFamily: "sans-serif",
      textAlign: "center",
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }
  };

  


const Header = (props) => {

  const { lang , onButtonClick } = props;

  
    const email = 'raphael.beaubois@gmail.com';

  return (
    <div className="header">


<div className="header-left-content">
    {/* <img src={boucle} className="header-boucle" alt="pic" /> */}
    <div className="header-left-h1">

    

     <div className='h1-responsive'>
     {!lang ? <Slide top ><p>Hey,</p> </Slide> : <Slide top ><p>Hi,</p> </Slide>}
     {!lang ?
      <Slide left ><p>Je suis  <span className='header-R'>R</span>aphaël.</p>
      </Slide>  :
       <Slide left big><p> I'm  <span className='header-R'>R</span>aphael.</p>
      </Slide> }

      {!lang ?       <Slide bottom> <p>Développeur Web<br /></p> </Slide> 
 :       <Slide bottom> <p>Web Developer<br /></p> </Slide> 
}
 
     
      </div>
    </div>


    {!lang ?      
    <Slide left big>
    <TextyAnim
    className='header-span'
    type="mask-top"
      onEnd={(type) => {
        // tslint:disable-next-line
        console.log(type);
      }}
    >
    
      Développeur Front-End / ReactJS
      
    </TextyAnim>
    </Slide>
 :       
    <Slide right big>
    <TextyAnim
    className='header-span'
    type="mask-top"
      onEnd={(type) => {
        // tslint:disable-next-line
        console.log(type);
      }}
    >
    
      Front End Developper / ReactJS
      
    </TextyAnim>
    </Slide> 
}

{!lang ? <Slide bottom  big>
    <a href='/contact' id='header-button'  type="button"> CONTACTEZ MOI !</a>
        </Slide> : <Slide bottom  big>
    <a href='/contact' id='header-button'  type="button"> CONTACT ME !</a>
        </Slide>}

  
    </div>
    <div id='content-img' style={styles.root}>
  
   
    {/* <img src={ufo} className='img-ufo'/> */}
    <Particles  params={{
  "autoPlay": true,
  "background": {
    "color": {
      "value": "#000000"
    },
    "image": "",
    "position": "50% 50%",
    "repeat": "no-repeat",
    "size": "cover",
    "opacity": 0
  },
  "backgroundMask": {
    "composite": "destination-out",
    "cover": {
      "color": {
        "value": "#fff"
      },
      "opacity": 1
    },
    "enable": false
  },
  "backgroundMode": {
    "enable": true,
  },
  "detectRetina": true,
  "fpsLimit": 990,
  "infection": {
    "cure": false,
    "delay": 0,
    "enable": false,
    "infections": 0,
    "stages": []
  },
  "interactivity": {
    "detectsOn": "canvas",
    "events": {
      "onClick": {
        "enable": true,
        "mode": "push"
      },
      "onDiv": {
        "selectors": [],
        "enable": false,
        "mode": [],
        "type": "circle"
      },
      "onHover": {
       
        
      },
      "resize": true
    },
    
  },
  "manualParticles": [],
  "motion": {
    "disable": false,
    "reduce": {
      "factor": 4,
      "value": false
    }
  },
  "particles": {
    "bounce": {
      "horizontal": {
        "random": {
          "enable": false,
          "minimumValue": 0.1
        },
        "value": 1
      },
      "vertical": {
        "random": {
          "enable": false,
          "minimumValue": 0.1
        },
        "value": 1
      }
    },
    "collisions": {
      "bounce": {
        "horizontal": {
          "random": {
            "enable": false,
            "minimumValue": 0.1
          },
          "value": 1
        },
        "vertical": {
          "random": {
            "enable": false,
            "minimumValue": 0.1
          },
          "value": 1
        }
      },
      "enable": false,
      "mode": "bounce"
    },
    "color": {
      "value": "#b5b5b5",
      "animation": {
        "enable": true,
        "speed": 10,
        "sync": true
      }
    },
    "life": {
      "count": 0,
      "delay": {
        "random": {
          "enable": false,
          "minimumValue": 0
        },
        "value": 0,
        "sync": false
      },
      "duration": {
        "random": {
          "enable": false,
          "minimumValue": 0.0001
        },
        "value": 0,
        "sync": false
      }
    },
    "links": {
      "blink": false,
      "color": {
        "value": "#ffffff"
      },
      "consent": false,
      "distance": 100,
      "enable": true,
      "frequency": 1,
      "opacity": 0.4,
      "shadow": {
        "blur": 5,
        "color": {
          "value": "#00ff00"
        },
        "enable": false
      },
      "triangles": {
        "enable": false,
        "frequency": 1
      },
      "width": 1,
      "warp": false
    },
    "move": {
      "angle": {
        "offset": 45,
        "value": 90
      },
      "attract": {
        "enable": false,
        "rotate": {
          "x": 600,
          "y": 1200
        }
      },
      "direction": "none",
      "distance": 0,
      "enable": true,
      "gravity": {
        "acceleration": 9.81,
        "enable": false,
        "maxSpeed": 90
      },
      "noise": {
        "delay": {
          "random": {
            "enable": false,
            "minimumValue": 0
          },
          "value": 0
        },
        "enable": false
      },
      "outModes": {
        "default": "out",
        "bottom": "out",
        "left": "out",
        "right": "out",
        "top": "out"
      },
      "random": false,
      "size": false,
      "speed": 4,
      "straight": false,
      "trail": {
        "enable": false,
        "length": 10,
        "fillColor": {
          "value": "#000000"
        }
      },
      "vibrate": false,
      "warp": false
    },
    "number": {
      "density": {
        "enable": true,
        "area": 4000,
        "factor": 4000
      },
      "limit": 50,
      "value": 70
    },
  
   
   






    "size": {
      "random": {
        "enable": true,
        "minimumValue": 1
      },
      "value": 3,
      "animation": {
        "destroy": "none",
        "enable": false,
        "minimumValue": 0.1,
        "speed": 20,
        "startValue": "max",
        "sync": false
      }
    },
  
   
  },
  "pauseOnBlur": true,
  "themes": []
}
}  />




<Zoom right>
<Tilt
      className="parallax-effect-img"
   
      scale={1}
      duration={5}
    >
      <img src={ufo} className=" img-ufo" alt="pic" />

    </Tilt>        </Zoom>


    </div>
    </div>
  );
}

export default Header;