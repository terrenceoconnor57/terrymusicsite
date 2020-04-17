import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import MusicPlayer from 'react-responsive-music-player';

class App extends Component {
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
  return (
    <div className="App">
    <div className = "App-header">
    <ul className = "fulltoplist">
    <li className = 'cent'><a className = 'mus'><i class="music icon"></i></a></li>
    <li className = 'cent'><a className = 'anc' href ="">Home</a></li>
    <li className = 'cent'><a className = 'anc' href ="">About</a></li>
    <li className = 'cent'><a className = 'anc' href ="">Songs</a></li>
    <li className = 'cent'><a className = 'anc' href ="">Lyrics</a></li>
    </ul>
</div>

  <h1 className = 'mainline'>Our Music</h1>

  <div className = 'centerplayer'>
  <MusicPlayer href ="/sf" playlist={playlist} />
  </div>

    </div>
  );
}
}

export default App;
