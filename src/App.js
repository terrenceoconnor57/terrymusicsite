import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {  Route } from "react-router";
import { BrowserRouter } from "react-router-dom";
import MusicPlayer from 'react-responsive-music-player';
import About from './About/About';
import MusicBox from './MusicBox/MusicBox';
import Lyrics from './Lyrics/Lyrics';

class App extends Component {
  render() {

  return (
    <BrowserRouter>
    <div className="App">
    <div className = 'fixed'>
    <div className = "App-header">
    <ul className = "fulltoplist">
    <li className = 'cent'><a className = 'mus' href ="/">D<i class="music icon"></i>T</a></li>
    <li className = 'cent'><a className = 'anc' href ="/">Home <i class="home icon"></i></a></li>
    <li className = 'cent'><a className = 'anc' href ="/About/About">About <i class="address card icon"></i></a></li>
    <li className = 'cent'><a className = 'anc' href ="">Songs <i class="microphone icon"></i></a></li>
    <li className = 'cent'><a className = 'anc' href ="/Lyrics/Lyrics">Lyrics <i class="pencil alternate icon"></i></a></li>
    </ul>
</div>
</div>








  <Route exact path="/" component={() => <MusicBox />}/>


  <Route path = "/About/About" exact component = {About} />

  <Route path = "/Lyrics/Lyrics" exact component = {Lyrics} />





    </div>
    </BrowserRouter>
  );
}
}

export default App;
