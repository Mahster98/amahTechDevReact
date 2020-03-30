import React from 'react'
import classes from './AboutMe.module.css'
import gitPic from '../data/img/GitHub-Mark.jpg'
import linkedinPic from '../data/img/linkedin-logo-icon-3.jpg'


const AboutMe = (props) => {

        return (
        <div className={classes.AboutMe}>
        <p className={classes.title}>About Me</p>
        
        <div className={classes.contentFlex}>
        <p className={classes.bio}>{props.bio}</p>
        <img className={classes.profilePic} src={props.image} alt="Alex Mah"/>
        </div>

        <p className={classes.subtitle}><b>Want to know more?</b></p>
        <div className={classes.moreMe}>
        <a href={props.linkedin} className={classes.profileLink}><img className={classes.linkPic} src={linkedinPic} alt="Link"/></a>
        <a href={props.github} className={classes.profileLink}><img className={classes.linkPic} src={gitPic} alt="Link"/></a>
        <button className={classes.resumeButton}>Resume</button>
        </div>
        
        </div>
        );
}

export default AboutMe;