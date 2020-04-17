import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {  Route } from "react-router";
import { BrowserRouter } from "react-router-dom";
import MusicPlayer from 'react-responsive-music-player';
import About from './About/About';
import MusicBox from './MusicBox/MusicBox';

class App extends Component {
  render() {

  return (
    <BrowserRouter>
    <div className="App">
    <div className = "App-header">
    <ul className = "fulltoplist">
    <li className = 'cent'><a className = 'mus'>D<i class="music icon"></i>T</a></li>
    <li className = 'cent'><a className = 'anc' href ="/">Home</a></li>
    <li className = 'cent'><a className = 'anc' href ="/About/About">About</a></li>
    <li className = 'cent'><a className = 'anc' href ="">Songs</a></li>
    <li className = 'cent'><a className = 'anc' href ="">Lyrics</a></li>
    </ul>
</div>






  <Route exact path="/" component={() => <MusicBox />}/>


  <Route path = "/About/About" exact component = {About} />





    </div>
    </BrowserRouter>
  );
}
}

export default App;
