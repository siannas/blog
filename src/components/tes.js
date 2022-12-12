import * as React from "react"
import { Header, Icon, Image, Menu, Segment, Sidebar } from 'semantic-ui-react'

const Tes = ({visible,setVisible})=>{
    return (
        <Sidebar
            animation={'push'}
            direction={'right'}
            visible={visible}
            vertical
            className="si bg-primary vertical menu"
        >
            <div className="si text-r p-12">
            <a href="#" className="icon ui si white right" style={{fontSize:28}}
                onClick={()=>setVisible(!visible)}>
                <i className="remove  icon ui"></i>
            </a>
            </div>
            <div className="si kanit-font">
            <a className="item si white font-18 font-bold ls-2">
                <i className="home icon"></i>
                Home
            </a>
            <a className="item si white font-18 font-bold ls-2">
                Twitter
            </a>
            <a className="item si white font-18 font-bold ls-2">
                Soon
            </a>
            <a className="item si white font-18 font-bold ls-2">
                Soon
            </a>
            </div>
        </Sidebar>
        )
}

export default Tes