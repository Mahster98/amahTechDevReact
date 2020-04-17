import React from 'react'
import classes from './Project.module.css'
import 'animate.css/animate.min.css'
import ScrollAnimation from 'react-animate-on-scroll'


const Project = (props) => {

        return (
            <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
            <div className={classes.Project}>
            <p className={classes.title}>{props.projectTitle}</p>
            <div className={classes.contentFlexbox}>
            <img className={classes.img} src={props.img} alt="ProjectPicture" />
            <div className={classes.textDiv}>
            <p className={classes.date}>{props.date}</p>
            <p className={classes.techText}>Created using: <b>{props.tech.join(", ")}</b></p>
            <p className={classes.projectDescription}>{props.projectDescription}</p>
            </div>
            </div>
            </div>
            </ScrollAnimation>
        )
}

export default Project;
