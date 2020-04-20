import React, {Component} from 'react';
import './Songs.css';
import AudioPlayer from "react-h5-audio-player";
import 'react-h5-audio-player/lib/styles.css';


class Songs extends Component {
  state = {currentsong: [
    {"id": 1,
    "playing": "/SomedayFinal.mp3"},
    {"id": 2,
    "playing": "/Exit Wound.mp3"},
    {"id": 3,
    "playing": "/Thousand Miles Gone.mp3"},
    {"id": 4,
    "playing": "/killing me final.mp3"},
    {"id": 5,
    "playing": "/Dont Wake Me.mp3"},
    {"id": 6,
    "playing": "/shine_.mp3"},
    {"id": 7,
    "playing": "/new kings.mp3"}
  ]

  }

    render(props) {

      const { currentsong } = this.state;



        return (
          <div className = 'songdiv'>

          {currentsong.map(current => (
            <AudioPlayer key = {current.id}
            src= {current.playing}
            onPlay={e => console.log("onPlay")}
              />
          ))}




            </div>
        );

    }

}

export default Songs;
