import React from 'react'
import classes from './ExperienceItem.module.css'
import 'animate.css/animate.min.css'
import ScrollAnimation from 'react-animate-on-scroll'



const ExperienceItem = (props) => {

        return (
            <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
            <div className={classes.ExperienceItem}>
            <p className={classes.title}>{props.experienceTitle}</p>
            <div className={classes.contentFlexbox}>
            <img className={classes.img} src={props.img} alt="ProjectPicture" />
            <div className={classes.textDiv}>
            <p className={classes.date}>{props.date.join(" to ")}</p>
            <p className={classes.jobDescription}>{props.experienceDescription}</p>
            </div>
            </div>
            </div>
            </ScrollAnimation>
        )
}

export default ExperienceItem;