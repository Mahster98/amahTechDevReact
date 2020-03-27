import React from 'react'
import classes from './Project.module.css'

const Project = (props) => {

        return (
            <div className={classes.Project}>
            <p className={classes.title}>{props.projectTitle}</p>
            <div className={classes.contentFlexbox}>
            <img className={classes.img} src={props.img} alt="ProjectPicture" />
            
            <div className={classes.textDiv}>
            <p className={classes.techText}>Created using: <b>{props.tech.join(", ")}</b></p>
            <p className={classes.projectDescription}>{props.projectDescription}</p>
            </div>
            
            </div>
            
            </div>
        )
}

export default Project;
