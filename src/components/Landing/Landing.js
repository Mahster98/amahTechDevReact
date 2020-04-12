import React from 'react'
import classes from './Landing.module.css' 
import 'animate.css/animate.min.css'
import ScrollAnimation from 'react-animate-on-scroll'


const Landing = () => {

    return <div className={classes.Landing}>
        <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
        <h1 className={classes.intro}>Hello! I'm</h1>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
        <h2 className={classes.name}>Alexander Mah</h2>
        </ScrollAnimation>


        </div>
}


export default Landing;