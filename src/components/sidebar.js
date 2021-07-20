import * as React from "react"
import { StaticQuery, graphql, Link } from "gatsby"

//convert query result to dictionary object
const CategoriesToDict = (obj) => {
  let result = {}
  obj.forEach(category => {
    result[category.node.id] = {
      name: category.node.internal.contentDigest,
      children: category.node.children.length ? category.node.children : null,
      parent: category.node.parent
    }
  });
  return result
}

const SidebarPostList = ({data, ...props}) => {
  let useUlTag = props.withUlTag || true
  if(data.length && useUlTag){
    return (<ul>
      {data.map(post=> <li key={post.fields.slug}>
            <Link to={post.fields.slug}>{post.frontmatter.title}</Link>
          </li>)}
    </ul>)
  }else if(data.length){
    return (<>
      {data.map(post=> <li key={post.fields.slug}>
            <Link to={post.fields.slug}>{post.frontmatter.title}</Link>
          </li>)}
    </>)
  }else{
    return (<></>)
  }
}

const SidebarContent = ({data}) => {
  let categories = CategoriesToDict(data.allCategory.edges)
  let posts = data.allMarkdownRemark.nodes

  //category renderer using recursive method
  const CreateCategoryElement = ({childId, ...props}) => {
    let c = categories[childId]
    let filteredPost = posts.filter(post => post.frontmatter.category===c.name)
    if(c.children !== null){      
      return (<li>{c.name}
        <ul>
          {c.children.map(child => <CreateCategoryElement key={child.id} childId={child.id} />)}
          <SidebarPostList withUlTag={false} data={filteredPost} />
        </ul>
      </li>)
    }else{
      return (<li>{c.name}<SidebarPostList data={filteredPost} /></li>)
    }
  }

  return (
    <div className="sidebar-wrapper" >
      <ul>
        {Object.keys(categories).map(id => !categories[id].parent ? <CreateCategoryElement key={id} childId={id} /> : '' )}
      </ul>
    </div>
  )
}

const Sidebar = ( props ) => {
  // Get all markdown blog posts sorted by date
  return (
    <StaticQuery
      query={graphql`
        query {
          allCategory(sort: {fields: name}){
            edges {
              node {
                id
                children {
                  id
                }
                parent {
                  id
                }
                internal {
                  contentDigest
                }
              }
            }
          }
          allMarkdownRemark {
            nodes {
              id
              fields {
                slug
              }
              frontmatter {
                title
                category
              }
            }
          }
        }
      `}
      render={data => <SidebarContent data={data} {...props} />}
    />
  )
}

export default Sidebar