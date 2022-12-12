import React from "react"
import { Link } from "gatsby"
import "./navbar.scss"
import { SocialIcon } from "react-social-icons"

const Navbar = () => {
const navs = [
    {
        name: 'Blog',
        path: '/',
    },
    {
        name: 'About',
        path: '/about',
    },
]

return (
<nav className="navbar">
<Link to="/" itemProp="url">
    Sianas
</Link>
<div>
{navs.map(({name, path})=> (
    <Link to={path} itemProp="url">
        <span itemProp="nav">{name}</span>
    </Link>)
)}
</div>
</nav>
)
}

export default Navbar