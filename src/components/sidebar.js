import * as React from "react"
import { StaticQuery, graphql } from "gatsby"

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

const SidebarContent = ({data}) => {
  let categories = CategoriesToDict(data.allCategory.edges)

  //category renderer using recursive method
  const CreateCategoryElement = ({childId}) => {
    let c = categories[childId]
    if(c.children !== null){      
      return (<li>{c.name}
        <ul>
          {c.children.map(child => <CreateCategoryElement key={child.id} childId={child.id} />)}
        </ul>
      </li>)
    }else{
      return (<li>{c.name}</li>)
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
          allCategory {
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
        }
      `}
      render={data => <SidebarContent data={data} {...props} />}
    />
  )
}

export default Sidebar