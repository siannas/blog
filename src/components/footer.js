import React from "react"
import { Link } from "gatsby"
import "./footer.scss"
import { SocialIcon } from "react-social-icons"

const Footer = () => {
return (
<>
<hr/>
<footer>
<span>
© {new Date().getFullYear()}, Built with
{` `}
<Link to="https://www.gatsbyjs.com">Gatsby</Link>
</span>
<div className="social-media">
    <SocialIcon url="https://twitter.com/siannasGG1999" target={"_blank"} network="twitter" bgColor={"var(--social-media-bg)"} fgColor={"var(--social-media-fg)"} />
    <SocialIcon url="https://www.instagram.com/annasinuril/" target={"_blank"} network="instagram" bgColor={"var(--social-media-bg)"} fgColor={"var(--social-media-fg)"} />
    <SocialIcon url="https://telegram.me/siannas" target={"_blank"} network="telegram" bgColor={"var(--social-media-bg)"} fgColor={"var(--social-media-fg)"} />
    <SocialIcon url="https://www.linkedin.com/in/annas-nuril-iman/?locale=en_US" target={"_blank"} network="linkedin" bgColor={"var(--social-media-bg)"} fgColor={"var(--social-media-fg)"} />
</div>
</footer>
</>
)
}

export default Footer