import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/wp-layout"
import Seo from "../components/seo"

const About = ({location}) => {
return(
<Layout location={location} title={"About Me"}>
    <Seo title="About Me" />
    <h2>About Me</h2>
    
    <p>Passionate programmer relates to gaming, coding, and visual arts with 2+ years of game development experience and enjoys blogging to share knowledge. Strive to become a mobile game development specialist and am willing to learn everything from others.</p>    

    <p>Learn about HLSL shader programming, 3D modeling, and animation right now.</p>

    <p>Founded the UniXcorp Studio with friends and has been doing several B2B projects, participating in competitions and exhibitions. Passed in the curation of Baparekraf Game Prime 2021 (08/2021), Best Audio in Indie game Ignite Compfest 12, University of Indonesia (09/2020), and took 2nd place in Cipta Game Vocational Training Education by Indonesia Ministry of Manpower (07/2022). See more at <Link to="https://unixcorpgamedev.id/" target={"_blank"}>unixcorpgamedev.id</Link>.</p>

    <p>Had the chance to take part in an Indigo Game Startup Incubation, or IGSI. Gain a lot of knowledge about resource management, emotional intelligence, game design, and product management. Had connections to other game development studios.</p>

    <h4>Misc</h4>

    <p>Currently love to play:
    <ol>
        <li>Minecraft</li>
        <li>Roblox</li>
        <li>Kingdom Two Crowns</li>
        <li>Deep Rock Galactic</li>
        <li>Dead a Head: Zombie Warfare (Mobile)</li>
        <li>Demon Hunter: Shadow World (Mobile)</li>
        <li>Gold and Goblins (Mobile)</li>
    </ol>
    </p>

    <p>My favorite bands:
    <ol>
        <li><Link to={"https://www.youtube.com/channel/UCKudwfXQgNM7Gkjv95qRI9w"} target={"_blank"}>Sekai No Owari 「セカオワ」</Link></li>
        <li><Link to={"https://www.youtube.com/channel/UCZ9DY_FlqUYh45R0uSmOIgA"} target={"_blank"}>Polkadot Stringray</Link></li>
        <li><Link to={"https://www.youtube.com/channel/UCbsA9PHG3sPgY5rAjMtBTJg"} target={"_blank"}>Habib Syech</Link></li>
    </ol>
    </p>

    <p>Love to morning run, Join me on Strava! we can follow each other's activities. Check it out <Link to="https://strava.app.link/M0zWgGQEGvb" target={"_blank"}>[Here]</Link></p>
    

</Layout>
)}

export default About