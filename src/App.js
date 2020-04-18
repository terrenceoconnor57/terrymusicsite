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
    <li className = 'cent'><a className = 'anc' href ="/">Home <i class="home icon"></i></a></li>
    <li className = 'cent'><a className = 'anc' href ="/About/About">About <i class="address card icon"></i></a></li>
    <li className = 'cent'><a className = 'anc' href ="">Songs <i class="microphone icon"></i></a></li>
    <li className = 'cent'><a className = 'anc' href ="">Lyrics <i class="pencil alternate icon"></i></a></li>
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
