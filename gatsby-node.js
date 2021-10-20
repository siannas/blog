const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
const fetch = require(`node-fetch`)

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  // Define a template for blog post
  const blogPost = path.resolve(`./src/templates/blog-post.js`)

  // Get all markdown blog posts sorted by date
  const result = await graphql(
    `
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: ASC }
          limit: 1000
        ) {
          nodes {
            id
            fields {
              slug
              dir
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    reporter.panicOnBuild(
      `There was an error loading your blog posts`,
      result.errors
    )
    return
  }

  const posts = result.data.allMarkdownRemark.nodes

  // Create blog posts pages
  // But only if there's at least one markdown file found at "content/blog" (defined in gatsby-config.js)
  // `context` is available in the template as a prop and as a variable in GraphQL

  if (posts.length > 0) {
    posts.forEach((post, index) => {
      const previousPostId = index === 0 ? null : posts[index - 1].id
      const nextPostId = index === posts.length - 1 ? null : posts[index + 1].id

      createPage({
        path: post.fields.slug,
        component: blogPost,
        context: {
          id: post.id,
          previousPostId,
          nextPostId,
          dir: post.fields.dir
        },
      })
    })
  }
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    // menentukan path directory markdown berasal
    const slug = createFilePath({ node, getNode })
    const pattern = /([^-\/]+)-([^-]+)-([^-]+)-([^\r\n]*)?/
    const match = slug.match(pattern)
    const dir = slug.replace(/\//g,"")
    if (match !== null) {
      const year = match[1]
      const month = match[2]
      const day = match[3]
      const filename = match[4]
      const date = new Date(year, month - 1, day)
      var dateStr =date.toJSON()
      
      createNodeField({
        name: `date`,
        node,
        value: dateStr,
      })

      createNodeField({
        name: `slug`,
        node,
        value: `/blog/${filename}`,
      })

      createNodeField({
        name: `dir`,
        node,
        value: dir,
      })

    } else {
      createNodeField({
        name: `slug`,
        node,
        value: slug,
      })
    }
  }
}

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions

  // Explicitly define the siteMetadata {} object
  // This way those will always be defined even if removed from gatsby-config.js

  // Also explicitly define the Markdown frontmatter
  // This way the "MarkdownRemark" queries will return `null` even when no
  // blog posts are stored inside "content/blog" instead of returning an error
  createTypes(`
    type SiteSiteMetadata {
      author: Author
      siteUrl: String
      social: Social
    }

    type Author {
      name: String
      summary: String
    }

    type Social {
      twitter: String
    }

    type MarkdownRemark implements Node {
      frontmatter: Frontmatter
      fields: Fields
    }

    type Frontmatter {
      title: String
      description: String
      date: Date @dateformat
      category: String
      tags: [String]
    }

    type Fields {
      slug: String
    }

    type Category implements Node {
      name: String
      pagechildren: [MarkdownRemark]
    }
  `)
}

const categories = require(`./src/categories.json`)

exports.sourceNodes = async ({ actions, createNodeId, createContentDigest }) => {
  const { createNode, createParentChildLink } = actions

  //Create All Categories
  //iterate over categories array
  let level=0, x = 0
  let x2 = [], temparr = [], nodeStack = []
  let curNode = null
  let currarr = categories
  while(level>=0){
    if(typeof currarr[x] === 'undefined'){
        level--
        x = x2.pop()+1
        currarr=temparr.pop()
        nodeStack.pop()
        continue
    }
    if(Array.isArray(currarr[x])){
        level++
        temparr.push(currarr)
        currarr=currarr[x]
        x2.push(x)
        nodeStack.push(curNode)
        x=0
    }
    let nodeObj = {
      // Data for the category node.
      id: createNodeId(`category-`+String(level)+`-`+String(x)) ,
      name: currarr[x],
      parent: !level ? null : nodeStack[nodeStack.length-1].id,
      internal: {
        type: `Category`,
        contentDigest: currarr[x]
      }
    }
    createNode(nodeObj)
    if(level) createParentChildLink({ parent: nodeStack[nodeStack.length-1], child: nodeObj }) 
    curNode = nodeObj   
    x++
  }

}

exports.onCreateWebpackConfig = ({ actions }) => {   
  actions.setWebpackConfig({
    resolve: {
      alias: { "../../theme.config$": path.join(__dirname,  "src/semantic/theme.config")}
    }
  });
 };

// exports.createResolvers = ({ createResolvers }) => {
//   // const resolvers = {
//   //   Query: {
//   //     allTags: {
//   //       type: [`Category`],
//   //       resolve: (source, args, context, info) => {
//   //         const posts = context.nodeModel.getAllNodes({ type: `Category` })
//   //         // const recentPosts = posts.filter(
//   //         //   post => post.publishedAt > Date.UTC(2018, 0, 1)
//   //         // )
//   //         return posts
//   //       }
//   //     }
//   //   }
//   // }
//   const resolvers = {
//     Query: {
//       // getMarkdownRemarkByCategory: {
//       //   type: [`MarkdownRemark`],
//       //   args: {
//       //     name: {
//       //       type: "String!",
//       //       defaultValue: "uncategorized",
//       //     }
//       //   },
//       //   resolve: (source, args, context, info) => {
//       //     const posts = context.nodeModel.getAllNodes({ type: `MarkdownRemark` })
//       //     const relatedPosts = posts.filter(
//       //       post => post.frontmatter.category == args.name
//       //     )
//       //     return relatedPosts
//       //   }
//       // }
//       getAllMarkdownRemark: {
//         type: [`MarkdownRemark`],
//         resolve: (source, args, context, info) => {
//           const posts = context.nodeModel.getAllNodes({ type: `MarkdownRemark` })
//           return posts
//         }
//       }
//     }
//   }
//   createResolvers(resolvers)
// }

// exports.sourceNodes = async ({ actions, createNodeId, createContentDigest }) => {
//   const { createNode } = actions

//   // get data from GitHub API at build time
//   const result = await fetch(`https://api.github.com/users/siannas/repos`)
//   const resultData = await result.json()
//   // create node for build time data example in the docs
  
//   // https://api.github.com/repos/siannas/nama_repo/contents/README.md

//   resultData.forEach(res => {
//     let content = null;
//     try {
//       content_raw = await fetch(res.url+`/contents/README.md`)
//       content = atob(content_raw.content)               //decode base64 conten
//     } catch (error) {
//       // if (error.name === 'AbortError') {
//       // 	console.log('request was aborted');
//       // }
//     }
    
//     createNode({
//       // nameWithOwner and url are arbitrary fields from the data
//       nameWithOwner: res.full_name,
//       // url: resultData.html_url,
//       url: res[`html_url`],
//       content: content,
//       // required fields
//       id: `my-repo-`+res.id,
//       parent: null,
//       children: [],
//       internal: {
//         type: `repos`,
//         contentDigest: createContentDigest(resultData),
//       },
//     })
//   });
// }