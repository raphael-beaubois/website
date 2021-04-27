import React ,{Component} from 'react';
import {
  
  Switch,
  Route,
  
} from "react-router-dom";

import './App.css';
import Navigation from './components/Navigation/Navigation';
import Header from './components/Header/Header';
import Skills from './components/Skills/Skills';
import About from './components/About/About';
import Project from './components/Projects/Projects';
import Contact from './components/Contact/Contact';

class App extends Component {

   lang = localStorage.getItem('lang'); 

state = {
  lang: false 
}


toggle = () => {

  const { lang } = this.state;
  this.setState({
    lang: !lang,
  });
}

  render(){
    
    const { lang } = this.state;
    
  return (

    <div className="App">
      <Switch>

      <Route exact path="/">
      <Navigation  lang={lang} onButtonClick={this.toggle} />
        <Header  lang={lang} onButtonClick={this.toggle} />           
      </Route>

      <Route exact path="/about">
        <Navigation lang={lang} onButtonClick={this.toggle}/>
          <About lang={lang} />                 
      </Route>

      <Route exact path="/skills">
        <Navigation lang={lang} onButtonClick={this.toggle}/>
          <Skills  lang={lang}/>          
      </Route>

      <Route exact path="/project">
        <Navigation lang={lang} onButtonClick={this.toggle}/>
          <Project  lang={lang}/>                  
      </Route>

      <Route exact path="/contact">
        <Navigation lang={lang} onButtonClick={this.toggle} />
          <Contact lang={lang} />                    
      </Route>
            

        </Switch>
    </div>
  );
}}

export default App;
