import React from 'react'
import ExperienceInfo from '../../data/content/ExperienceContent.js'
import ExperienceItem from './ExperienceItem/ExperienceItem'


const Experience = () => (

ExperienceInfo.map( (experience) => {
    
    return <ExperienceItem
    experienceTitle={experience.experienceTitle}
    experienceDescription={experience.experienceDescription} 
    date={experience.date}
    img={experience.image}/>
})

);

export default Experience;