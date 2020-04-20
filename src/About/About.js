import React from 'react';
import './About.css';
import {BrowserRouter} from 'react-router-dom';
import {Route} from 'react-router-dom';







const About = (props) => {
  return (

<div className = 'mainabout'>
<h1 className = 'AboutHeader'>About Us</h1>
<br/>

<div className = 'behindtext'>
    <div className = 'aboutparagraph'>
    <p className = 'text'>BIO</p>
    <p className = 'text'>The render() method renders the BootstrapTable component,
    passing it the current users from the state.
    If it’s in the middle of fetching, then a “Fetching users…”
    message is displayed, too. This is super-rudimentary progress
    reporting. The bootstrap table will display only the id, name,
    and username fields of each user, though there are several other fields.</p>
    </div>
</div>
</div>
)
}


export default About;
