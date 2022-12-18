import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/wp-layout"
import Seo from "../components/seo"

const About = ({location}) => {
return(
<Layout location={location} title={"About Me"}>
    <Seo title="About Me" />
    <h2>About Me</h2>
    <p>I was previously working as a web developer and game development hobbyist. I decided to pivot my role as an 80% game developer and still 20% as a web developer. I did this after realizing that the game industry is currently having significant growth and I myself do not only like to play but also enjoy developing games. That is why I like to dive into this industry.</p>

    <p>Together with my friends, we founded the uniXcorp Studio. This team has been doing several B2B projects and participated in competitions and exhibitions. The most memorable ones such as passing the curation of Baparekraf Game Prime 2021 (08/2021), Best Audio in Indie game Ignite Compfest 12, University of Indonesia (09/2020), and took 2nd place in Cipta Game Vocational Training Education by Indonesia Ministry of Manpower (07/2022). See more at <Link to="https://unixcorpgamedev.id/" target={"_blank"}>[Link]</Link>.</p>

    <p>Luckily, we had the opportunity to participate in a startup game incubation held by Indigo Game Startup Incubation, often called IGSI. There, I got a lot of new knowledge, not only about programming but also about game design, product management, emotional intelligence, and resource management. The game we made was titled Heisters: heister vs heister. Moreover, we have relations with other Game Developer studios.</p>

    <p>I'm used to working on the backend in game development. Love to use the Model-Controller principle to separate data from the logic controller hence the program is easier to maintain. Even so, I also learned about 3D modeling and animation to make it easier for me to work on 3D games. I'm also learning HLSL shader programming in Unity which turn the games more interesting with manipulative visuals.</p>

    <p>I personally feel that I have the urge to learn a lot from experienced studios in the game industry. I hope that in the future I can be involved in several game projects with great game studios out there. I wish years later, many local Indonesian talents will help contribute to the game industry in this beloved country.</p>

    <h4>Misc</h4>

    <p>Currently love to play:
    <ol>
        <li>Minecraft</li>
        <li>Roblox</li>
        <li>Deep Rock Galactic</li>
        <li>Dead a Head: Zombie Warfare (Mobile)</li>
        <li>Demon Hunter: Shadow World (Mobile)</li>
    </ol>
    </p>

    <p>Love to morning run, Join me on Strava! we can follow each other's activities. Check it out <Link to="https://strava.app.link/M0zWgGQEGvb" target={"_blank"}>[Here]</Link></p>
    

</Layout>
)}

export default About