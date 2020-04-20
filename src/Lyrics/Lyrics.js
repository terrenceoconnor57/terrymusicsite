import React, {Component} from 'react';
import './Lyrics.css';


class Lyrics extends Component {


    constructor(props) {

        super(props);

        this.state = {
            songs: [],
            isLoaded: false
        }

    }


    componentDidMount = () => {

        fetch('https://jsonterrence.s3.amazonaws.com/data.json')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    songs: json,
                })
            }).catch((err) => {
                console.log(err);
            });

    }


    render(props) {


        const { songs } = this.state;


        return (
          <div className = 'whole'>
          <h1 className = 'lyricsheader'>Lyrics</h1>
          <div className = 'lyricspage'>

                <ul className = 'lyricslist'>
                    {songs.map(song => (
                        <li key={song.id} className = 'lyrics'>

                            <a className = 'songjson' onClick={()=> window.open(song.lyrics)}><i class="caret right icon"></i>{song.song}</a>

                        </li>



                    ))}

                </ul>


            </div>
            </div>
        );

    }

}

export default Lyrics;
