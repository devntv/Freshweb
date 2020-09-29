import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/pages/Homepages/Home';
import Footer from './components/pages/Footer/Footer';
import Feature from './components/pages/Feature/Feature'
import SignUp from './components/pages/Sign-Up/SignUp';
import About from './components/pages/About/About';

function App() {
  return (
      <Router>   
          <Navbar />
        <Switch>
          <Route path="/" exact={true} component={Home} /> 
          <Route path="/feature"  component={Feature} /> 
          <Route path="/about"  component={About} />  
          <Route path="/sign-up"  component={SignUp} /> 
        </Switch>
        <Footer/>  
      </Router>
  );
}

export default App;
