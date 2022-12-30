import * as React from "react"
import { Link, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Bio from "../components/bio"
import Layout from "../components/wp-layout"
import Sidebar from "../components/sidebar"
import Seo from "../components/seo"
// import "semantic-ui-less/semantic.less"
import "../custom.scss"

import FlagIcon from "../svg-components/flag"

const tags_data = {
  "Tuts": {
    "color" : "--color-tag-orange",
    "icon" : (<FlagIcon/>),
  }
}

const BlogIndex = ({ data, location }) => {
  const siteTitle = `Title`
  // const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allWpPost.edges
  
  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <Seo title="All posts" />
        <Bio />
        <p>
          No blog posts found. Add markdown posts to "content/blog" (or the
          directory you specified for the "gatsby-source-filesystem" plugin in
          gatsby-config.js).
        </p>
      </Layout>
    )
  }

  return (
    <>
    <Layout location={location} title={siteTitle}>
      {/* <Sidebar/>     */}
      <Seo title="All posts" />
      {/* <Bio /> */}
      <ol style={{ listStyle: `none` }}>
        {posts.map(({ previous, post, next }) => {
          const title = post.title

          /// note: Create featured image banner 
          var featuredImage = null
          if(post.featuredImage)
          {
            const image = getImage(post.featuredImage.node.localFile)
            featuredImage = (<div className="featured-image">
                              <GatsbyImage image={image} alt={post.featuredImage.node.altText}/>
                            </div>)
          }

          /// note: Create tags
          var tagsSection = null
          
          if(post.tags.nodes.length > 0)
          {
            var tags = post.tags.nodes.map( t => {
              var backgroundColor = (tags_data[t.name]) ? tags_data[t.name].color : '--color-primary'
              var tagIcon = (tags_data[t.name] && tags_data[t.name].icon) ? tags_data[t.name].icon : ''
              return (<li key={t.name}><span className="tag" style={{backgroundColor: 'var('+backgroundColor+')'}}>{tagIcon}{t.name}</span></li>)
            })
            tagsSection = (<ul className="tag-list">{tags}</ul>) 
          }

          return (
            <li key={post.uri}>
              <article
                className="post-list-item"
                itemScope
                itemType="http://schema.org/Article"
              >
                <header>
                  <h2>
                    <Link to={post.uri} itemProp="url">
                      <span itemProp="headline">{title}</span>
                    </Link>
                  </h2>
                  <small>{post.date}</small>
                  <>{ tagsSection }</>
                  <>{ featuredImage }</>
                </header>
                <section>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: post.excerpt,
                    }}
                    itemProp="description"
                  />
                </section>
              </article>
            </li>
          )
        })}
      </ol>
    </Layout>
    </>
  )
}

export default BlogIndex

// export const pageQuery = graphql`
//   query {
//     site {
//       siteMetadata {
//         title
//       }
//     }
//     allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
//       nodes {
//         excerpt
//         fields {
//           slug
//         }
//         frontmatter {
//           date(formatString: "MMMM DD, YYYY")
//           title
//           description
//         }
//       }
//     }
//   }
// `

export const pageQuery = graphql`
  query {
    # Query all WordPress blog posts sorted by date
    allWpPost(sort: { fields: [date], order: DESC }) {
      edges {
        previous {
          id
        }
        # note: this is a GraphQL alias. It renames "node" to "post" for this query
        # We're doing this because this "node" is a post! It makes our code more readable further down the line.
        post: node {
          __typename
          excerpt
          title
          date(formatString: "MMMM DD, YYYY")
          id
          uri
          tags {
            nodes {
              id
              name
            }
          }
          featuredImage {
            node {
              altText
              localFile{
                childImageSharp {
                  gatsbyImageData(
                    placeholder: BLURRED
                    formats: [AUTO]
                  )
                }       
              }
            }
          }
        }
        next {
          id
        }
      }
    }
  }
`