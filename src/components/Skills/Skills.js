import React from 'react';
import './styles.scss';
import {Spring, config , Transition} from 'react-spring/renderprops';
import Particles from 'react-particles-js';
import Roll from 'react-reveal/Roll';
import Slide from 'react-reveal/Slide';


import Navigation from '../Navigation/Navigation'

//==============================================//
//Import photo
import adobeXD from './img/adobeXD.png';
import apple from './img/apple.png';
import bootstrap from './img/bootstrap.png';
import swift from './img/swift.png';
import css3 from './img/css3.png';
import github from './img/github.png';
import html5 from './img/html5.png';
import illustrator from './img/illustrator.png';
import js from './img/js.png';
import lightroom from './img/lightroom.png';
import linux from './img/linux.png';
import nodejs from './img/nodejs.png';
import photoshop from './img/photoshop.png';
import php from './img/php.png';
import postman from './img/postman.png';
import premierepro from './img/premierepro.png';
import react from './img/react.png';
import redux from './img/redux.png';
import sass from './img/sass.png';
import semanticui from './img/semanticui.png';
import vscode from './img/vscode.png';
import wordpress from './img/wordP.png';


//==============================================//




const Skills = (props) => {

  const { lang  } = props;

  return (

<div className="skills">
<div className="skills-part-one">



<div className='skills-front'>
  {!lang ? <Slide top>
<Spring
config={{delay: 400}}
  from={{ opacity: 0}}
  to={{ opacity: 1 }}>
  
  {props => <h2 className='skills-h2' style={props}>LANGAGES</h2>}
</Spring>         </Slide>: 
<Slide top>
<Spring
config={{delay: 400}}
  from={{ opacity: 0}}
  to={{ opacity: 1 }}>
  
  {props => <h2 className='skills-h2' style={props}>LANGUAGES</h2>}
</Spring>         </Slide> }

<ul className='skills-design-ul'>


<Roll right>
<Spring
    config={{delay: 500}}
  from={{ opacity: 0 }}
  to={{ opacity: 1 }}>
  {props =>     <li style={props}>      <img src={html5} className=" skills-img" alt="pic" /><br/>HTML</li>
}
</Spring>         </Roll>


        <Roll right>

<Spring
config={{delay: 550}}
  from={{ opacity: 0 }}
  to={{ opacity: 1 }}>
  {props =>     <li style={props}>      <img src={css3} className=" skills-img" alt="pic" /><br/>CSS</li>
}
</Spring> 

</Roll>
        <Roll right>

<Spring
    config={{delay: 600}}

  from={{ opacity: 0 ,}}
  to={{ opacity: 1 }}>
  {props =>     <li style={props}>      <img src={js} className=" skills-img" alt="pic" /><br/>JAVASCRIPT</li>
}
</Spring> 
</Roll>

        <Roll right>

<Spring
    config={{delay: 650}}

  from={{ opacity: 0 }}
  to={{ opacity: 1 }}>
  {props =>     <li style={props}>      <img src={react} className=" skills-img" alt="pic" /><br/>REACT / NATIVE</li>
}
</Spring> 
</Roll>

        <Roll right>

<Spring
    config={{delay: 700}}

  from={{ opacity: 0 }}
  to={{ opacity: 1 }}>
  {props =>     <li style={props}>      <img src={redux} id='redux' className=" skills-img" alt="pic" /><br/>REDUX</li>
}
</Spring> 
</Roll>

        <Roll right>

<Spring
    config={{delay: 750}}

  from={{ opacity: 0 }}
  to={{ opacity: 1 }}>
  {props =>     <li style={props}>      <img src={nodejs} className=" skills-img" alt="pic" /><br/>NODE JS</li>
}
</Spring> 
</Roll>

        <Roll right>

<Spring
    config={{delay: 800}}

  from={{ opacity: 0 }}
  to={{ opacity: 1 }}>
  {props =>     <li style={props}>      <img src={php} className=" skills-img" alt="pic" /><br/>PHP</li>
}
</Spring> 
</Roll>

        <Roll right>

<Spring
    config={{delay: 850}}

  from={{ opacity: 0 }}
  to={{ opacity: 1 }}>
  {props =>     <li style={props}>       <img src={wordpress} className=" skills-img" alt="pic" /><br/>WORDPRESS</li>
}
</Spring> 

</Roll>
        <Roll right>

<Spring
    config={{delay: 900}}

  from={{ opacity: 0 }}
  to={{ opacity: 1 }}>
  {props =>     <li style={props}>      <img src={sass} className=" skills-img" alt="pic" /><br/>SASS</li>
}
</Spring> 

</Roll>
        <Roll right>

<Spring
    config={{delay: 950}}

  from={{ opacity: 0 }}
  to={{ opacity: 1 }}>
  {props =>     <li style={props}>      <img src={swift} className=" skills-img" alt="pic" /><br/>SWIFT</li>
}
</Spring> 

</Roll>
        <Roll right>

<Spring
    config={{delay: 1000}}

  from={{ opacity: 0 }}
  to={{ opacity: 1 }}>
  {props =>     <li style={props}>      <img src={bootstrap} className=" skills-img" alt="pic" /><br/>BOOTSTRAP</li>
}
</Spring> 
</Roll>

        <Roll right>

<Spring
    config={{delay: 1050}}

  from={{ opacity: 0 }}
  to={{ opacity: 1 }}>
  {props =>     <li style={props}>      <img src={semanticui} className=" skills-img" alt="pic" /><br/>SEMANTIC UI</li>
}
</Spring> </Roll>
</ul>
 </div>
 </div>

<div className="skills-part2">       


 <Slide left>
<Spring
config={{delay: 400}}
  from={{ opacity: 0}}
  to={{ opacity: 1 }}>
  
  
  {props => <h2 className='skills-h2' style={props}>SOFTWARES</h2>}
</Spring>         </Slide>


 <div className='skills-design'>

 <ul className='skills-design-ul'>        <Roll right>

 <Spring
    config={{delay: 1150}}

  from={{ opacity: 0 }}
  to={{ opacity: 1 }}>
  {props =>     <li style={props}>      <img src={photoshop} className="skills-img" alt="pic" /><br/>PHOTOSHOP</li>
}
</Spring> 
</Roll>

        <Roll right>

<Spring
    config={{delay: 1200}}

  from={{ opacity: 0 }}
  to={{ opacity: 1 }}>
  {props =>     <li style={props}>       <img src={illustrator} className="skills-img" alt="pic" /><br/>ILLUSTRATOR</li>
}
</Spring>
</Roll>

        <Roll right>

 <Spring
    config={{delay: 1250}}

  from={{ opacity: 0 }}
  to={{ opacity: 1 }}>
  {props =>     <li style={props}>       <img src={adobeXD} className="skills-img" alt="pic" /><br/>ADOBE XD</li>
}
</Spring> 
</Roll>

        <Roll right>

<Spring
    config={{delay: 1350}}

  from={{ opacity: 0 }}
  to={{ opacity: 1 }}>
  {props =>     <li style={props}>      <img src={premierepro} className="skills-img" alt="pic" /><br/>PREMIERE PRO</li>
}
</Spring> 
</Roll>

        <Roll right>

<Spring
    config={{delay: 1450}}

  from={{ opacity: 0 }}
  to={{ opacity: 1 }}>
  {props =>     <li style={props}>       <img src={lightroom} className="skills-img" alt="pic" /><br/>LIGHTROOM</li>
}
</Spring> 
</Roll>

    
</ul>
 </div>
 {!lang ? <Slide top>
<Spring
config={{delay: 400}}
  from={{ opacity: 0}}
  to={{ opacity: 1 }}>
  
  {props => <h2 className='skills-h2' style={props}>ENVIRONNEMENT</h2>}
</Spring>         </Slide>: 
<Slide top>
<Spring
config={{delay: 400}}
  from={{ opacity: 0}}
  to={{ opacity: 1 }}>
  
  {props => <h2 className='skills-h2' style={props}>ENVIRONMENT</h2>}
</Spring>         </Slide> }
 <div className='skills-other'>

 <ul className='skills-design-ul'>        <Roll right>

 <Spring
    config={{delay: 1750}}

  from={{ opacity: 0 }}
  to={{ opacity: 1 }}>
  {props =>     <li style={props}>        <img src={apple} className="skills-img" alt="pic" /><br/>APPLE</li>
}
</Spring> 
</Roll>
        <Roll right>

<Spring
    config={{delay: 1850}}

  from={{ opacity: 0 }}
  to={{ opacity: 1 }}>
  {props =>     <li style={props}>       <img src={github} className="skills-img" alt="pic" /><br/>GITHUB</li>
}
</Spring> 
</Roll>
        <Roll right>

<Spring
    config={{delay: 1950}}

  from={{ opacity: 0 }}
  to={{ opacity: 1 }}>
  {props =>     <li style={props}>     <img src={vscode} className="skills-img" alt="pic" /><br/>VSCODE</li>
}
</Spring> 
</Roll>
        <Roll right>

<Spring
    config={{delay: 2050}}

  from={{ opacity: 0 }}
  to={{ opacity: 1 }}>
  {props =>     <li style={props}>       <img src={linux} className="skills-img" alt="pic" /><br/>LINUX</li>
}
</Spring> 
  </Roll>

</ul>
 </div>
</div>
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

  );
}

export default Skills;