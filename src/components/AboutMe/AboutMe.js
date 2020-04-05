import React from 'react'
import classes from './AboutMe.module.css'
import gitPic from '../../data/img/GitHub-Mark.jpg'
import linkedinPic from '../../data/img/linkedin-logo-icon-3.jpg'
import AboutMeContent from '../../data/content/AboutMeContent.js'


const AboutMe = () => {

        return (
        <div className={classes.AboutMe}>
        
        <div className={classes.contentFlex}>
        <p className={classes.bio}>{AboutMeContent[0].bio}</p>
        <img className={classes.profilePic} src={AboutMeContent[0].image} alt="Alex Mah"/>
        </div>

        <p className={classes.subtitle}><b>Want to know more?</b></p>
        <div className={classes.moreMe}>
        <a href={AboutMeContent[0].linkedin} className={classes.profileLink}><img className={classes.linkPic} src={linkedinPic} alt="Link"/></a>
        <a href={AboutMeContent[0].github} className={classes.profileLink}><img className={classes.linkPic} src={gitPic} alt="Link"/></a>
        <button className={classes.resumeButton}>Resume</button>
        </div>
        
        </div>
        );
}

export default AboutMe;