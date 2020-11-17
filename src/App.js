import React ,{Component, useEffect} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import LoadingScreen from 'react-loading-screen';

import './App.css';
import Navigation from './components/Navigation/Navigation';
import Header from './components/Header/Header';
import Skills from './components/Skills/Skills';
import AnimatedCursor from './components/Cursor/index';
import About from './components/About/About';
import Project from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
  




class App extends Component {

state = {
  lang: false,
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
  <AnimatedCursor color={'211, 0, 123'}/>
      
</Route>

   <Route exact path="/about">
<Navigation lang={lang} onButtonClick={this.toggle}/>
  <About lang={lang} />  
    <AnimatedCursor color={'48, 244, 124'}/>
        
   </Route>

<Route exact path="/skills">
<Navigation lang={lang} onButtonClick={this.toggle}/>
  <Skills  lang={lang}/>   
  <AnimatedCursor color={'49, 199, 245'}/>
       
   </Route>

   <Route exact path="/project">
<Navigation lang={lang} onButtonClick={this.toggle}/>
  <Project  lang={lang}/> 
    <AnimatedCursor color={'49, 199, 245'}/>
         
   </Route>

    <Route exact path="/contact">
  <Navigation lang={lang} onButtonClick={this.toggle} />
    <Contact   lang={lang} /> 
      <AnimatedCursor color={'49, 199, 245'}/>
          
    </Route>
       

  </Switch>
    </div>
  );
}}

export default App;
