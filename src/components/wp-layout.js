import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import parse from "html-react-parser"
import Tes from "./tes"
import { Sidebar, Segment } from 'semantic-ui-react'
import Navbar from "./navbar"
import Footer from "./footer"

import GlobalStateProvider from '../utils/global-context'

const Layout = ({ isHomePage, children }) => {
  const {
    wp: {
      generalSettings: { title },
    },
  } = useStaticQuery(graphql`
    query LayoutQuery {
      wp {
        generalSettings {
          title
          description
        }
      }
    }
  `)

  return (
    <GlobalStateProvider>
    {/* <Script
      src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GTAG}`}
      strategy="off-main-thread"
    />
    <Script id="gtag-config" strategy="off-main-thread" forward={[`gtag`]}>
      {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments)};
        gtag('js', new Date());
        gtag('config', ${process.env.GTAG}, { page_path: location ? location.pathname + location.search + location.hash : undefined })
      `}
    </Script> */}
    <Navbar/>
    {/* <div className="r-0 t-0 si fixed" style={{zIndex:99}}>
      <button className="big compact primary icon ui left attached button"
        onClick={()=>setVisible(!visible)}>
        <i className="content  icon ui"></i>
      </button>
    </div> */}
    {/* <Tes visible={visible} setVisible={setVisible} /> */}
    {/* <Sidebar.Pushable as={Segment} style={{marginTop:0}}>
    <Sidebar
      animation={'push'}
      direction={'right'}
      visible={visible}
      vertical />
    <Sidebar.Pusher dimmed={visible}  data-is-root-path={isHomePage}> */}
      {/* <Segment basic > */}
        <div className="global-wrapper">
        <header className="global-header">
          {isHomePage ? (
            <h1 className="main-heading">
              <Link to="/">{parse(title)}</Link>
            </h1>
          ) : (
            <></>
            // <Link className="header-link-home" to="/">
            //   {title}
            // </Link>
          )}
        </header>

        <main>{children}</main>

        <Footer/>
        </div>
      {/* </Segment> */}
    {/* </Sidebar.Pusher >
    </Sidebar.Pushable> */}
    </GlobalStateProvider>
  )
}

export default Layout