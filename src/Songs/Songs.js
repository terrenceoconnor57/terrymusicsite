import React, {Component} from 'react';
import './Songs.css';
import AudioPlayer from "react-h5-audio-player";
import 'react-h5-audio-player/lib/styles.css';


class Songs extends Component {
  state = {currentsong: [
    {"id": 1,
    "name": "Someday",
    "playing": "/SomedayFinal.mp3"},
    {"id": 2,
    "name": "Exit Wound",
    "playing": "/Exit Wound.mp3"},
    {"id": 3,
    "name": "Thousand Miles Gone",
    "playing": "/Thousand Miles Gone.mp3"},
    {"id": 4,
    "name": "Killing Me",
    "playing": "/killing me final.mp3"},
    {"id": 5,
    "name": "Dont Wake Me",
    "playing": "/Dont Wake Me.mp3"},
    {"id": 6,
    "name": "Imperfect Shine",
    "playing": "/shine_.mp3"},
    {"id": 7,
    "name": "Kings",
    "playing": "/new kings.mp3"}
  ]

  }

    render(props) {

      const { currentsong } = this.state;



        return (
          <div className = 'entirediv'>
          <h1 className = 'entireheader'>Songs</h1>
          <div className = 'songdiv'>

          {currentsong.map(current => (
            <div className = 'wrapheader'>
            <h1 className = 'songheader'>{current.name}

            <ul className = 'listsongs'>
            <AudioPlayer key = {current.id}
            src= {current.playing}
            onPlay={e => console.log("onPlay")}
              />
              </ul>
              </h1>
              </div>
          ))}
<br/>
<br/>
<br/>
<br/>



            </div>
            </div>
        );

    }

}

export default Songs;
