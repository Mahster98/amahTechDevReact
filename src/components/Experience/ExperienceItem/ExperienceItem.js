import React from 'react'
import classes from './ExperienceItem.module.css'


const ExperienceItem = (props) => {

        return (
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
        )
}

export default ExperienceItem;