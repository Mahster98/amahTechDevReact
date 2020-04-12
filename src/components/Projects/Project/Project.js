import React from 'react'
import classes from './Project.module.css'
import 'animate.css/animate.min.css'
import ScrollAnimation from 'react-animate-on-scroll'
{/* <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut"></ScrollAnimation> */}

const Project = (props) => {

        return (
            <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
            <div className={classes.Project}>
            <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
            <p className={classes.title}>{props.projectTitle}</p>
            </ScrollAnimation>
            <div className={classes.contentFlexbox}>
            <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
            <img className={classes.img} src={props.img} alt="ProjectPicture" />
            </ScrollAnimation>
            <div className={classes.textDiv}>
            <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
            <p className={classes.date}>{props.date}</p>
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
            <p className={classes.techText}>Created using: <b>{props.tech.join(", ")}</b></p>
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
            <p className={classes.projectDescription}>{props.projectDescription}</p>
            </ScrollAnimation>
            </div>
            </div>
            </div>
            </ScrollAnimation>
        )
}

export default Project;
