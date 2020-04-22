import React, {Component} from 'react';
import '../App.css';
import {BrowserRouter} from 'react-router-dom';
import {Route} from 'react-router-dom';
import MusicPlayer from 'react-responsive-music-player';
import { ScrollTo } from "react-scroll-to";







class MusicBox extends Component {
  render() {
    const playlist = [
  {
    url: 'SomedayFinal.mp3',
    title: 'Someday',
    artist: [

    ]
  },
  {
    url: 'Exit Wound.mp3',
    title: 'Exit Wound',
    artist: [

    ]
  },
  {
    url: 'new kings.mp3',
    title: 'Kings',
    artist: [

    ]
  },
  {
    url: 'shine_.mp3',
    title: 'Imperfect Shine',
    artist: [

    ]
  },
  {
    url: 'killing me final.mp3',
    title: 'Killing Me',
    artist: [

    ]
  },
  {
    url: 'Thousand Miles Gone.mp3',
    title: 'Thousand Miles Gone',
    artist: [

    ]
  },
  {
    url: 'Dont Wake Me.mp3',
    title: 'Don\'t Wake Me',
    artist: [
      
    ]
  },

]

return(
<div className = 'second'>
  <h1 className = 'mainline'>Our Tunes</h1>
  <div className = 'buttondiv'>

  <ScrollTo>
          {({ scroll }) => (
  <a onClick={() => scroll({ y: 700, smooth: true })}className = 'listen'>Listen<i class="chevron down icon"></i></a>
)}
      </ScrollTo>

  </div>

<div className = 'wrapplayer'>
<div className = 'centerplayer'>
<MusicPlayer playlist={playlist}/>
</div>
</div>
<br/>
<br/>
<br/>
</div>


);
}
}

export default MusicBox;
