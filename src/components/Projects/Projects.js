import React from 'react';
import './styles.scss';
import {Spring, config , Transition} from 'react-spring/renderprops';
import Particles from 'react-particles-js';
import Roll from 'react-reveal/Roll';
import Slide from 'react-reveal/Slide';
import Carroussel from './Carroussel/Carroussel'

import AppFilm from './applifilm.png'
import lenid from './mocklenid.png'
import galaxia from './galaxia-mock.png'
import converter from './convertermock.png'

const Project = (props) => {
  const { lang  } = props;

    return (
  
<div className="project">

<div className='project-content'>

<Slide top>
<Spring
config={{delay: 400}}
  from={{ opacity: 0}}
  to={{ opacity: 1 , textAlign: "center", margin: 'revert', marginTop: 30}}>
  
  
  {props => <h2 style={props} className='title'> PROJECTS</h2>}
</Spring>        
</Slide>

<div className='content-content1'>




<div className='content1'>


<Slide bottom>

<div className='contentText'>

<h3>LE NID</h3>

{!lang ? <p>Projets de fin d'étude: Le Nid a pour but de mettre en relation développeurs et Professionnels en manque de visibilité et 
pouvant s'entraider mutuellement. Le développeur met à disposition ses compétences techniques, améli
orant, ou créant intégralement le site du professionnel qui, pour sa part, s'engage à laisser appare
ntes les références du développeur sur le site.</p>: 

<p>End of study projects: Le Nid aims to connect developers and Professionals lacking visibility and
can help each other. The developer provides his technical skills, improved
orant, or creating entirely the site of the professional who, for his part, undertakes to leave equipment
ntes the developer's references on the site.</p>}


<div className='contentTextButton'>

<a href='https://www.lenid.tech' target='_blank' className='button-code' > VOIR ICI </a>

</div>


 </div>
 </Slide>

 <Slide bottom>

<div className='contentImg'>
<img className='contentIMGIMG' src={lenid}  alt="pic"  />
</div>
</Slide>
</div>



<div className='content1'>


<Slide bottom>

 <div className='contentText'>

<h3>MOVIES & ME</h3>

 {!lang ? <p>Application IOS/ANDROID fait avec React Native. <br/> Movies and me est une app recherche de films via une API,
  possibilité de mettre les films dans une liste
 de favoris et de partager les films dans d'autres appli.</p>
 :
 <p>IOS/ANDROID application made with React Native. <br/> Movies and me is an API movie search app,
  possibility to put the films in a list
 favorites and share the movies in other apps.</p>}


 <div className='contentTextButton'>

<a href='https://github.com/Thailz/MoviesAndMe' target='_blank' className='button-code' > CODE SOURCE </a>

</div>




 </div>
 </Slide>

 <Slide bottom>
 <div className='contentImg'>
<img className='contentIMGIMGIOS' src={AppFilm}  alt="pic" />
</div>


</Slide>
</div> 

<div className='content1'>


<Slide left>

 <div className='contentText'>

<h3>GALAXIA</h3>
{!lang ? <p>Site ayant pour but d'en savoir un peu plus sur notre univers.</p>

:<p>Site aiming to know a little more about our universe.
</p>}




<div className='contentTextButton'>

<a href='https://github.com/Thailz/Astronomia' target='_blank' className='button-code' > CODE SOURCE </a>

</div>


 </div>
 </Slide>

 <Slide bottom>
 <div className='contentImg'>
<img className='contentIMGIMG' src={galaxia}  alt="pic" />
</div>


</Slide>
</div> 


 <div className='content1'>




<Slide bottom>
<div className='contentText'>

<h3>CONVERTISSEUR DE MONNAIE</h3>
<p>Convertisseur fait avec React.</p>
<div className='contentTextButton'>

<a href='https://github.com/Thailz/Converter' target='_blank' className='button-code' > CODE SOURCE </a>

</div>
 </div>
 </Slide>

 <Slide bottom>

<div className='contentImg'>
<img className='contentIMGIMG' src={converter}  alt="pic" />
</div>

</Slide>
</div> 


</div>



</div>
{/* <div className='maquette-content'>

<Slide bottom>
<Spring
config={{delay: 400}}
  from={{ opacity: 0}}
  to={{ opacity: 1 }}>
  
  
  {props => <h2 style={props}> MAQUETTES UX/UI</h2>}
</Spring>         </Slide>

<div className='content-carrousel'>


<Carroussel />



</div>
</div> */}
<div className='particle'>
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
        "enable": true,
        "mode": "connect",
        "parallax": {
          "enable": false,
          "force": 2,
          "smooth": 10
        }
      },
      "resize": true
    },
    "modes": {
      "attract": {
        "distance": 200,
        "duration": 0.4,
        "speed": 1
      },
      "bounce": {
        "distance": 200
      },
      "bubble": {
        "distance": 400,
        "duration": 2,
        "opacity": 0.8,
        "size": 40
      },
      "connect": {
        "distance": 80,
        "links": {
          "opacity": 0.5
        },
        "radius": 60
      },
      "grab": {
        "distance": 400,
        "links": {
          "blink": false,
          "consent": false,
          "opacity": 1
        }
      },
      "light": {
        "area": {
          "gradient": {
            "start": {
              "value": "#ffffff"
            },
            "stop": {
              "value": "#000000"
            }
          },
          "radius": 1000
        },
        "shadow": {
          "color": {
            "value": "#000000"
          },
          "length": 2000
        }
      },
      "push": {
        "quantity": 4
      },
      "remove": {
        "quantity": 2
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4,
        "speed": 1
      },
      "slow": {
        "factor": 3,
        "radius": 200
      },
      "trail": {
        "delay": 1,
        "quantity": 1,
        "particles": {
          "bounce": {
            "horizontal": {
              "random": {}
            },
            "vertical": {
              "random": {}
            }
          },
          "collisions": {
            "bounce": {
              "horizontal": {
                "random": {}
              },
              "vertical": {
                "random": {}
              }
            }
          },
          "color": {
            "animation": {}
          },
          "life": {
            "delay": {
              "random": {}
            },
            "duration": {
              "random": {}
            }
          },
          "links": {
            "shadow": {},
            "triangles": {}
          },
          "move": {
            "angle": {},
            "attract": {
              "rotate": {}
            },
            "gravity": {},
            "noise": {
              "delay": {
                "random": {}
              }
            },
            "outModes": {},
            "trail": {}
          },
          "number": {
            "density": {}
          },
          "opacity": {
            "animation": {},
            "random": {}
          },
          "rotate": {
            "animation": {}
          },
          "shadow": {
            "offset": {}
          },
          "shape": {},
          "size": {
            "animation": {},
            "random": {}
          },
          "stroke": {
            "color": {
              "value": "",
              "animation": {
                "enable": false,
                "speed": 0,
                "sync": false
              }
            }
          },
          "twinkle": {
            "lines": {},
            "particles": {}
          }
        }
      }
    }
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
        "area": 2500,
        "factor": 2700
      },
      "limit": 250,
      "value": 70
    },
    "opacity": {
      "random": {
        "enable": false,
        "minimumValue": 0.1
      },
      "value": 0.5,
      "animation": {
        "enable": false,
        "minimumValue": 0.1,
        "speed": 3,
        "sync": false
      }
    },
    "reduceDuplicates": false,
    "rotate": {
      "random": {
        "enable": false,
        "minimumValue": 0
      },
      "value": 0,
      "animation": {
        "enable": false,
        "speed": 0,
        "sync": false
      },
      "direction": "clockwise",
      "path": false
    },
    "shadow": {
      "blur": 0,
      "color": {
        "value": "#000000"
      },
      "enable": false,
      "offset": {
        "x": 0,
        "y": 0
      }
    },
    "shape": {
      "options": {
        "polygon": {
          "sides": 5
        },
        "image": {
          "src": "https://cdn.matteobruni.it/images/particles/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "type": "circle"
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
    "stroke": {
      "width": 0,
      "color": {
        "value": "",
        "animation": {
          "enable": false,
          "speed": 0,
          "sync": false
        }
      }
    },
    "twinkle": {
      "lines": {
        "enable": false,
        "frequency": 0.05,
        "opacity": 1
      },
      "particles": {
        "enable": false,
        "frequency": 0.05,
        "opacity": 1
      }
    }
  },
  "pauseOnBlur": true,
  "themes": []
}
}  />
</div>

</div>
);
}

export default Project;