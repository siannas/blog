import React from "react"
import Flag from '../images/flag-icon.svg'

const FlagIcon = ({style}) => {
return (
<>
    <span className="icon flag" alt="flag-icon"
        style={{
            WebkitMaskImage: `url(${Flag})`,
            maskImage: `url(${Flag})`,
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

export default FlagIcon