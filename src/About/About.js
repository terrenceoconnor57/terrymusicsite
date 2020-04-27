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
    <p className = 'text'>Father and son songwriting team in the NYC area
    looking to place our songs with a music library for sync licensing opportunities.
    In pursuit of a relationship with a music supervisor or publishing
    house to market our music. </p>
    <p className = 'text'>Current member of NSAI and mentioned as
    “one to watch” 2/19. Received honorable mention for lyric contest
    in American Songwriter magazine 2/18.  Well versed on music production
    with Logic Pro X.</p>
    </div>
</div>
</div>
)
}


export default About;
