import * as React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/wp-layout"
import Sidebar from "../components/sidebar"
import Seo from "../components/seo"
// import "semantic-ui-less/semantic.less"
import "../custom.scss"

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
        }
        next {
          id
        }
      }
    }
  }
`