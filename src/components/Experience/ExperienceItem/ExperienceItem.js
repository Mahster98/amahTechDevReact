import React from 'react'
import classes from './ExperienceItem.module.css'
import 'animate.css/animate.min.css'
import ScrollAnimation from 'react-animate-on-scroll'



const ExperienceItem = (props) => {

        return (
            <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
            <div className={classes.ExperienceItem}>
            <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
            <p className={classes.title}>{props.experienceTitle}</p>
            </ScrollAnimation>
            
            <div className={classes.contentFlexbox}>
            <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
            <img className={classes.img} src={props.img} alt="ProjectPicture" />
            </ScrollAnimation>
            <div className={classes.textDiv}>
            <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
            <p className={classes.date}>{props.date.join(" to ")}</p>
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
            <p className={classes.jobDescription}>{props.experienceDescription}</p>
            </ScrollAnimation>
            </div>
            </div>
            </div>
            </ScrollAnimation>
        )
}

export default ExperienceItem;