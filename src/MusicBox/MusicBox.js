import React, {Component} from 'react';
import '../App.css';
import {BrowserRouter} from 'react-router-dom';
import {Route} from 'react-router-dom';
import MusicPlayer from 'react-responsive-music-player';







class MusicBox extends Component {
  render() {
    const playlist = [
  {
    url: 'lead groove with piano.mp3',
    cover: 'mee.png',
    title: 'Someday',
    artist: [
      'Terry',
      'Dennis'
    ]
  },
  {
    url: 'Exit Wound.mp3',
    cover: 'mee.png',
    title: 'Exit Wound',
    artist: [
      'Terry',
      'Dennis'
    ]
  },
  {
    url: 'new kings.mp3',
    cover: 'mee.png',
    title: 'Kings',
    artist: [
      'Terry',
      'Dennis'
    ]
  },
  {
    url: 'shine_.mp3',
    cover: 'mee.png',
    title: 'Imperfect Shine',
    artist: [
      'Terry',
      'Dennis'
    ]
  },
  {
    url: 'killing me final.mp3',
    cover: 'mee.png',
    title: 'Killing Me',
    artist: [
      'Terry',
      'Dennis'
    ]
  },
  {
    url: 'Thousand Miles Gone.mp3',
    cover: 'mee.png',
    title: 'Thousand Miles Gone',
    artist: [
      'Terry',
      'Dennis'
    ]
  },
  {
    url: 'Dont Wake Me.mp3',
    cover: 'mee.png',
    title: 'Don\'t Wake Me',
    artist: [
      'Terry',
      'Dennis'
    ]
  },

]

return(
<div>
  <h1 className = 'mainline'>Our Music</h1>
  <div className = 'buttondiv'>
  <a className = 'listen'>Listen</a>
  </div>

<div className = 'centerplayer'>
<MusicPlayer playlist={playlist}/>
</div>
</div>


);
}
}

export default MusicBox;
