import React from "react"
import { Link } from "gatsby"
import "./navbar.scss"
import { ThemeToggler } from 'gatsby-plugin-dark-mode'

const Navbar = () => {
const navs = [
    {
        name: 'Blog',
        path: '/',
    },
    {
        name: 'Portfolio',
        path: '/portfolio',
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
<ThemeToggler>
{({ theme, toggleTheme }) => (
    <label>
    <input
        type="checkbox"
        onChange={e => toggleTheme(e.target.checked ? 'dark' : 'light')}
        checked={theme === 'dark'}
    />
    </label>
)}
</ThemeToggler>
</div>
</nav>
)
}

export default Navbar