import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"
import parse, {domToReact, attributesToProps } from "html-react-parser"
import { CopyBlock, atomOneLight, atomOneDark, Code } from "react-code-blocks"
import { GatsbyImage, getSrc } from "gatsby-plugin-image"
import Zoom from 'react-medium-image-zoom'
import { Disqus, CommentCount } from 'gatsby-plugin-disqus'

import { useGlobalState } from  '../utils/global-context'

import styles from '../custom.scss';
import 'react-medium-image-zoom/dist/styles.css'

// We're using Gutenberg so we need the block styles
// import "@wordpress/block-library/build-style/style.css"
// import "@wordpress/block-library/build-style/theme.css"

import Bio from "../components/bio"
import Layout from "../components/wp-layout"
import Seo from "../components/seo"

const CodeSection = (props) => {
  const [state, dispatch] = useGlobalState()

  if(state.theme == 'dark')
  {
    return (<div className="ui segment my-code-font">
      <CopyBlock
        language={"typescript"}
        showLineNumbers={true}
        startingLineNumber={1}
        theme={atomOneDark}
        // highlight={"1,2,3"}
        customStyle={{
          fontSize: '1rem',
          fontFamily: 'monospace',
          // borderRadius: '5px',
          // boxShadow: '1px 2px 3px rgba(0,0,0,0.35)',
        }}
  
        codeBlock
        {...props}
      />
    </div>)
  }

  return (<div className="ui segment my-code-font">
      <CopyBlock
        language={"typescript"}
        showLineNumbers={true}
        startingLineNumber={1}
        theme={atomOneLight}
        // highlight={"1,2,3"}
        customStyle={{
          fontSize: '1rem',
          fontFamily: 'monospace',
          // borderRadius: '5px',
          // boxShadow: '1px 2px 3px rgba(0,0,0,0.35)',
        }}
  
        codeBlock
        {...props}
      />
  </div>)
}


const options = {
  replace: (domNode) => {
    const { name, attribs, children, parent} = domNode;
    const props = attributesToProps(attribs);
    
    if (!attribs) {
      return;
    }
    else if(name === 'figcaption')
    {
      return(
        <figcaption>
          {children[0].children[0].data}
        </figcaption>
      )
    }
    else if(name === 'picture')
    {
      return (
        <Zoom>
          {domToReact(children)}
        </Zoom>
      );
    }
    else if(name === 'img' && props.loading && props.loading=='lazy')
    {
      

      // delete props.sizes

      console.log(props);

      // const image = getSrc(props.src)

      // console.log(image);

      return (
        <>
          <div style={{
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
            }}>
          <div style={{
              maxWidth: '100%', 
              width: props.width+'px', 
              height: 'auto',
              position: 'relative',
              aspectRatio: 'auto '+props.width+' / '+props.height,
            }}>
          <Zoom>
            <img {...props} />
          </Zoom>
          </div>
          </div>
        </>
      );
      //   {/* <GatsbyImage image={image} alt={props.alt} /> */}
      //   {/* <Image {...props}  /> */}
      //   // </GatsbyImage>
    }
    // else if (attribs.class === 'wp-block-code') {
    //   return domToReact(children, options)
    //   // const props = attributesToProps(domNode.attribs);
    //   // return <div {...props} />;
    // }
    else if (name === 'code') {
      return ( <CodeSection text={children[0].data} /> )
    }
  }
};

const BlogPostTemplate = ({ data: { previous, next, post, site } }) => {
  const featuredImage = {
    fluid: post.featuredImage?.node?.localFile?.childImageSharp?.fluid,
    alt: post.featuredImage?.node?.altText || ``,
  }
  
  let disqusConfig = {
    url: `${site.siteMetadata.siteUrl+post.uri}`,
    identifier: post.id,
    title: post.title,
  }

  return (
    <Layout>
      <Seo title={post.title} description={post.excerpt} />

      <article
        className="blog-post"
        itemScope
        itemType="http://schema.org/Article"
      >
        <header>
          {featuredImage?.fluid && (
            <div className="my-image-container">
            <Image
              fluid={featuredImage.fluid}
              alt={featuredImage.alt}
              style={{ marginBottom: 50 }}
            />
            </div>
          )}
          <h1 itemProp="headline">{parse(post.title)}</h1>

          <p>{post.date}</p>

          {/* if we have a featured image for this post let's display it */}
        </header>

        {!!post.content && (
          <section itemProp="articleBody">{parse(post.content, options)}</section>
        )}

        <CommentCount config={disqusConfig} placeholder={'...'} />          
        <Disqus config={disqusConfig} />

        <hr />

        <footer>
          <Bio />
        </footer>
      </article>

      <nav className="blog-post-nav">
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.uri} rel="prev">
                ← {parse(previous.title)}
              </Link>
            )}
          </li>

          <li>
            {next && (
              <Link to={next.uri} rel="next">
                {parse(next.title)} →
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostById(
    # these variables are passed in via createPage.pageContext in gatsby-node.js
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    # selecting the current post by id
    post: wpPost(id: { eq: $id }) {
      id
      excerpt
      content
      title
      uri
      date(formatString: "MMMM DD, YYYY")
      featuredImage {
        node {
          altText
          localFile {
            childImageSharp {
              fluid(maxWidth: 1000, quality: 100) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
        }
      }
    }
    # this gets us the previous post by id (if it exists)
    previous: wpPost(id: { eq: $previousPostId }) {
      uri
      title
    }
    # this gets us the next post by id (if it exists)
    next: wpPost(id: { eq: $nextPostId }) {
      uri
      title
    }
    site {
      siteMetadata{
        siteUrl
      }
    }
  }
`