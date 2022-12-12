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
<a href="https://www.gatsbyjs.com">Gatsby</a>
</span>
<div className="social-media">
    <SocialIcon url="https://twitter.com/siannasGG1999" target={"_blank"} network="twitter" bgColor="#ffffff" fgColor="#005b99" />
    <SocialIcon url="https://www.facebook.com/annas.nuriliman" target={"_blank"} network="facebook" bgColor="#ffffff" fgColor="#005b99" />
    <SocialIcon url="https://www.instagram.com/annasinuril/" target={"_blank"} network="instagram" bgColor="#ffffff" fgColor="#005b99" />
    <SocialIcon url="https://telegram.me/siannas" target={"_blank"} network="telegram" bgColor="#ffffff" fgColor="#005b99" />
</div>
</footer>
</>
)
}

export default Footer