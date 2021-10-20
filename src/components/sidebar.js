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

//category renderer using recursive method
const CreateCategoryElement = ({posts, categories, childId, ...props}) => {
  let [show, setShow] = React.useState(false);

  let c = categories[childId]
  let filteredPost = posts.filter(post => post.frontmatter.category===c.name)
  if(c.children !== null){      
    return (<>
      <Link to="#" className="item" onClick={()=>setShow(!show)}><i className={"angle icon " + (show?"down":"left")  }></i>{c.name}</Link>
      <div className={show ? "ui my-collapsible show" : "ui my-collapsible"}>
        {c.children.map(child => <CreateCategoryElement categories={categories} posts={posts} key={child.id} childId={child.id} />)}
        <SidebarPostList withUlTag={false} data={filteredPost} />
      </div>
    </>)
  }else{
    return (<><Link to="#" className="item">{c.name}</Link><SidebarPostList data={filteredPost} /></>)
  }
}

const SidebarContent = ({data}) => {
  let categories = CategoriesToDict(data.allCategory.edges)
  let posts = data.allMarkdownRemark.nodes

  return (
    <div className="left fixed vertical menu ui large">
      <div className="ui dividing large header my-primary" style={{padding: '14px 17px'}}>Siannas Blog</div>
      <div >
        {Object.keys(categories).map(id => !categories[id].parent ? <CreateCategoryElement categories={categories} posts={posts} key={id} childId={id} /> : '' )}
      </div>
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