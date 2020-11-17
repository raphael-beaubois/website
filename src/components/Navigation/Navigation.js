import React from 'react';
import './styles.scss';
import { NavLink } from 'react-router-dom';
import Bounce from 'react-reveal/Bounce';
import us from './us.png'
import france from './fr1.png'

const Navigation = (props) => {
  const { lang , onButtonClick } = props;

  return (

    <div className="navigation">


   
 <Bounce left>
 <ul>
 {!lang ? <a onClick={onButtonClick} >
     <img src={us} className='lang-button'/>
    </a>: <a onClick={onButtonClick} >
     <img src={france} className='lang-button-fr'/>
    </a> }
          <li><a href='/'><i class="fas fa-home" style={{fontSize: '2rem', marginTop: '15px',color: 'grey'}}></i></a><br/>         {!lang ? <p>Acceuil</p> : <p>Home</p> }</li>
          <li><a href='/about'><i class="fas fa-id-card" style={{fontSize: '2rem', marginTop: '15px',color: 'grey'}}></i></a><br/> {!lang ? <p>Bio</p> : <p>About</p> }</li>
          <li><a href='/skills'><i class="fas fa-cogs" style={{fontSize: '2rem', marginTop: '15px',color: 'grey'}}></i></a><br/>   {!lang ? <p>Skills</p> : <p>Skills</p> }</li>
          <li><a href='/project'><i class="far fa-eye" style={{fontSize: '2rem', marginTop: '15px',color: 'grey'}}></i></a><br/>   {!lang ? <p>Projets</p> : <p>Works</p> }</li>
          <li><a href='/contact'><i class="far fa-envelope" style={{fontSize: '2rem',marginLeft: '3px', marginTop: '15px',color: 'grey'}}></i></a><p>Contact</p></li>

      </ul>        </Bounce>
     
    

<div className='navigation-social'>
<Bounce bottom>
<ul>
          <li><a href='https://www.linkedin.com/in/raphaelbeaubois/' target='_blank' ><i class="fab fa-linkedin-in" style={{fontSize: '1.5rem', marginTop: '2px',color: 'grey'}}></i></a></li>
          <li><a href='https://github.com/Thailz' target='_blank'><i class="fab fa-github-square" style={{fontSize: '1.5rem', marginTop: '2px',color: 'grey'}}></i></a></li>
      </ul>        </Bounce>
      
      </div>


    </div>
  );
}

export default Navigation;