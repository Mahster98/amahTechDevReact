import React from 'react'
import classes from './AboutMe.module.css'
import gitPic from '../../data/img/GitHub-Mark.jpg'
import linkedinPic from '../../data/img/linkedin-logo-icon-3.jpg'
import AboutMeContent from '../../data/content/AboutMeContent.js'
import 'animate.css/animate.min.css'
import ScrollAnimation from 'react-animate-on-scroll'



const AboutMe = () => {

        return (
        <div className={classes.AboutMe}>
        <div className={classes.contentFlex}>
        <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
        <p className={classes.bio}>{AboutMeContent[0].bio}</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
        <img className={classes.profilePic} src={AboutMeContent[0].image} alt="Alex Mah"/>
        </ScrollAnimation>
        </div>
        
        <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
        <p className={classes.subtitle}><b>Want to know more?</b></p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
        <div className={classes.moreMe}>
        <a href={AboutMeContent[0].linkedin} className={classes.profileLink}><img className={classes.linkPic} src={linkedinPic} alt="Link"/></a>
        <a href={AboutMeContent[0].github} className={classes.profileLink}><img className={classes.linkPic} src={gitPic} alt="Link"/></a>
        <button className={classes.resumeButton}>Resume</button>
        </div>
        </ScrollAnimation>
        
        </div>
        );
}

export default AboutMe;