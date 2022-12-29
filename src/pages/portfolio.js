import * as React from "react"
import { Link } from "gatsby"
import Zoom from 'react-medium-image-zoom'
import Layout from "../components/wp-layout"
import Seo from "../components/seo"

import IsolatedForestGIF from "../images/work_IsolatedForest.gif"
import HeistersGIF from "../images/work_Heisters.gif"
import SleepGravityGIF from "../images/work_SleepGravity.gif"

const Portfolio = ({location}) => {
return(
<Layout location={location} title={"Portfolio"}>
    <Seo title="Portfolio" />
    <h2>Portfolio</h2>

    <p>These are some of the projects I was involved in.</p>
    
    <h3>1. Isolated Forest</h3>

    <p>A survival game on a deserted island inspired by Don't Starve and fighting demons in the night. I was responsible to organize the world-generation system and finite state machine for living creatures.
       &nbsp;<Link to={"https://unixcorpgamedev.id/games/isolated-forest"} itemProp="url" target={"_blank"}>[Link]</Link>
    </p>

    <Zoom>
    <img src={IsolatedForestGIF} style={{width: "100%"}} alt="IsolatedForestGIF"></img>
    </Zoom>
    
    <h3>2. Sleep Gravity</h3>

    <p>A game for game jam event, where players use cards to help sleeping characters get to the finish point. I was in charge of implementing the multiplayer mode using the free version of Photon Engine.
        &nbsp;<Link to={"https://unixcorp.itch.io/sleep-gravity"} itemProp="url" target={"_blank"}>[Link]</Link>
    </p>

    <Zoom>
    <img src={SleepGravityGIF} style={{width: "100%"}} alt="SleepGravityGIF"></img>
    </Zoom>
    
    <h3>3. Heisters: heisters vs heisters</h3>

    <p>A game where players play as a thief to steal other thieves' treasures. I was in charge to direct the AI logic using a Hierarchical Finite State Machine and here was the first time I learned the Unity Job System. In this project, I had the task of doing concept-and-art-validation using Google forms and Facebook ads.
        &nbsp;<Link to={"https://play.google.com/store/apps/details?id=com.uniXcorp.Heisters"} itemProp="url" target={"_blank"}>[Link]</Link>
    </p>

    <Zoom>
    <img src={HeistersGIF} style={{width: "100%"}} alt="HeistersGIF"></img>
    </Zoom>

    <p>&nbsp;</p>
    <hr/>
    <p>Apparently, that was some projects I did. I need to learn more by doing several game projects with great game studios out there.</p>
    <p>&nbsp;</p>

</Layout>
)}

export default Portfolio