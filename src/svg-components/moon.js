import React from "react"
import Moon from '../images/moon-night-stars-icon.svg'

const MoonIcon = ({style}) => {
return (
<>
    <span className="icon moon" alt="moon-icon"
        style={{
            WebkitMaskImage: `url(${Moon})`,
            maskImage: `url(${Moon})`,
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

export default MoonIcon