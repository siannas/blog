import * as React from "react"
import { Link, graphql } from "gatsby"

import BlogPostTemplate from "../templates/blog-post"

const RepoPostTemplate = ({ data, location }) => {
    return (<BlogPostTemplate data={data} location={location}></BlogPostTemplate>)
}

export default RepoPostTemplate
