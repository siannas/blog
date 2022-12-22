import React from "react"
import Sun from '../images/sun-icon.svg'

const SunIcon = ({style}) => {
return (
<>
    <span className="icon sun" alt="sun-icon"
        style={{
            WebkitMaskImage: `url(${Sun})`,
            maskImage: `url(${Sun})`,
            backgroundColor: 'white',
            position: 'relative',
            width: '16px',
            height: '16px',
            display: 'inline-block',
            cursor: 'pointer',
            ...style
        }}
    ></span>
</>
)}

export default SunIcon