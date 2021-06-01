import amahTechPic from "../img/tempWebProjPic.JPG";
import blockworkCircuits from "../img/blockworkCircuits.png";
import ABIOT from "../img/ANTBlazeLogo.PNG";
import WE from "../img/WorldExpedition.PNG";

export default [
  {
    projectTitle: "ANT BLAZE Wildfire Detection",
    date: "September 2020 - April 2021",
    tech: [
      "HTML",
      "CSS",
      "React",
      "Node.JS",
      "React Bootstrap",
      "React Native",
      "Mongo DB",
    ],
    projectDescription:
      "For my final year of my Software Engineering undergraduate degree, I helped build a net work of sensors to help detect wildfires in the Kananaskis area in Alberta. The system consisted of small sensors that were connected to each other via the ANT Blaze wireless protocol. If the sensors detected temperatures or gas levels above the threshold, it would send an alarm across the network to a gateway device. This gateway device would then send the alarm information up to cloud, where then dashboard clients would then be updated. \n I worked in the frontend dashboards of the project, which consisting of a browser desktop dashboard as well as a mobile phone application. I also developed the website design and project video. It was an amazing experience working across a multidisciplinary team consisting of mechanical, electrical and software disciplines. We ended up winning first place in the Multidisciplinary category as well!",
    image: ABIOT,
    link: "https://engineeringdesignfair.ucalgary.ca/multidisciplinary/ant-blaze-iot-wildfire-detection/",
  },
  {
    projectTitle: "World Exploration",
    date: "September 2020 - December 2020",
    tech: ["HTML", "CSS", "React", "Node.JS", "Mongo DB", "Google Maps API"],
    projectDescription:
      "World Exploration is a full stack application game that I created for my Web Technologies course. The aim of the game is to correctly guess where in the world you are looking at! We use Google Map API to show locations in StreetView, and the closer you guess to the location that is shown to you the more points that you will receive. There is a single player mode, or several multiplayer modes to play as well. You can challenge your friends head on with a competitive mode or play co-operatively where everyone guesses based on the same location. Finally, there is a one-on-one mode where instead of automatically generated location, each player can choose where to drop the other on the planet! It was fun to come up with a game based on travelling, especially as the world was in lockdown during this time.",
    image: WE,
    link: "https://www.world-exploration-deploy.ca/",
  },
  {
    projectTitle: "Amahtech.dev",
    date: "Deployed on February 28th, 2019",
    tech: ["HTML", "CSS", "React", "Node.JS"],
    projectDescription:
      "I decided to start a project to create a website, just for fun! As an added bonus, it has also taught me quite a bit about web technologies! It’s a great opportunity for me to practice my HTML and CSS skills, as well as my front-end design (this is built using React as a framework with Bootstrap). I aim to continually update, redesign and improve, not only the content, but the user experience of this site as well. Stay tuned for changes!",
    image: amahTechPic,
    link: null,
  },
  {
    projectTitle: "Blockwork Circuits",
    date: "Developed Summer 2017",
    tech: ["Java", "Android Studio"],
    projectDescription:
      "This was a small game that I created under a NSERC (Natural Sciences and Engineering Research Council) grant. The aim of the game is to draw paths to lead the black square to the red squares, which helps visualize problems that can happen when trying to optimize the clock in modern circuits. I enjoyed this project because it was a great experience to develop designs and ideas independently and end up with a final project that I could show on my phone!",
    image: blockworkCircuits,
    link: null,
  },
];
