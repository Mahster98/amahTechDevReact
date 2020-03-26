import React from 'react'

const Project = (props) => {
        return (
            <div>
            <h1>{props.projectTitle}</h1>
            <br/>
            <p>Created using: {props.tech}</p>
            <br/>
            <p>{props.projectDescription}</p>
            </div>
        )
}

export default Project;

{/* <div id = "FirstProjectTextTitle" class="startState s-component-content s-font-body">
                                      <p> Created with <strong> HTML </strong> and <strong> CSS </strong> using a
                                        <strong>Linux</strong> server with a connected <strong> GitHub</strong> repository</p>
                                      <p>&nbsp;</p>
                                      <p id = "FirstProjectText" class = "startState">
                                        I decided to start a project to create a website, just for fun really. It has taught me alot about
                                        how to register a domain, host it and get an actual website out into the real world! I have used HTML and CSS in my courses,
                                        but this website has definitely pushed me to focus alot on the user interface and front end design! I am using a
                                        Linux server running Ubuntu to host my website, so I have gotten familiar with command line very quickly.
                                      </p>
                                    </div> */}