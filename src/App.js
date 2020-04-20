import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {  Route } from "react-router";
import { BrowserRouter } from "react-router-dom";
import MusicPlayer from 'react-responsive-music-player';
import About from './About/About';
import MusicBox from './MusicBox/MusicBox';
import Lyrics from './Lyrics/Lyrics';
import LyricModal from './LyricModal/LyricModal';
import BackDrop from './BackDrop/BackDrop';




class App extends Component {



  render() {


  return (
    <BrowserRouter>
    <div className="App">
    <div className = 'fixed'>
    <div className = "App-header">
    <ul className = "fulltoplist">
    <li className = 'cent'><a className = 'mus' href ="/">D<i class="music icon"></i>T</a></li>
    <li className = 'cent'><a className = 'anc' href ="/"> <i class="home icon"></i>Home</a></li>
    <li className = 'cent'><a className = 'anc' href ="/About/About"><i class="address card icon"></i>About</a></li>
    <li className = 'cent'><a className = 'anc' href =""><i class="microphone icon"></i>Songs</a></li>
    <li className = 'cent'><a className = 'anc' href ="/Lyrics/Lyrics"><i class="pencil alternate icon"></i>Lyrics</a></li>
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
