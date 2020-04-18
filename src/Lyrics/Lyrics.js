import React, {Component} from 'react';
import './Lyrics.css';


class Lyrics extends React.Component {


    constructor(props) {

        super(props);

        this.state = {
            lyrics: [],
            isLoaded: false
        }

    }


    componentDidMount() {

        fetch('https://jsonterrence.s3.amazonaws.com/data.json')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    lyrics: json,
                })
            }).catch((err) => {
                console.log(err);
            });

    }


    render() {

        const { lyrics } = this.state;


        return (
          <div className = 'lyricspage'>
                <ul className = 'lyricslist'>
                    {lyrics.map(lyric => (
                        <li key={lyric.id} className = 'lyrics'>
                            <a className = 'songjson'>{lyric.song}</a>
                            <a className = 'songjson'>{lyric.lyrics}</a>

                        </li>
                    ))}
                </ul>
            </div>
        );

    }

}

export default Lyrics;
