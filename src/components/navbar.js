import React from "react"
import { Link } from "gatsby"
import "./navbar.scss"
import { ThemeToggler } from 'gatsby-plugin-dark-mode'

import { useGlobalState } from  '../utils/global-context'

import SunIcon from '../svg-components/sun'
import MoonIcon from '../svg-components/moon'

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

const [state, dispatch] = useGlobalState()

React.useEffect(() => {
    var cur_theme = localStorage.getItem('theme')
    if(!cur_theme) cur_theme = 'dark'
    dispatch({theme: cur_theme})
}, []);

return (
<nav className="navbar">
<Link to="/" itemProp="url" key={"home"}>
    Sianas
</Link>
<div>
{navs.map(({name, path})=> (
    <Link to={path} itemProp="url" key={name}>
        <span itemProp="nav">{name}</span>
    </Link>)
)}
<ThemeToggler>
{({ toggleTheme }) => (
    <label>
    <input
        type="checkbox"
        onChange={e => {
            var newtheme = e.target.checked ? 'dark' : 'light'
            toggleTheme(newtheme)
            dispatch({theme: newtheme})
        }}
        defaultChecked={state.theme === 'dark'}
        style={{display: 'none'}}
    />
    {
        state.theme === 'dark' ? 
            <MoonIcon style={{width: '21px', height: '21px', verticalAlign: 'middle', backgroundColor: 'var(--color-primary)'}}/>
            : <SunIcon style={{width: '24px', height: '24px', verticalAlign: 'middle', backgroundColor: 'var(--color-primary)'}}/>
    }
    </label>
)}
</ThemeToggler>
</div>
</nav>
)
}

export default Navbar