import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

export const pageQuery = graphql`
  query BlogIndexQuery {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            author
            date
            path
            title
          }
        }
      }
    }
  }
`

const BlogPage = ({ data }) => (
  <Layout>
    <h1>Latests Posts</h1>
    {data.allMarkdownRemark.edges.map(post => (
      <div key={post.node.id}>
        <h3>{post.node.frontmatter.title}</h3>
        <small>
          Post by {post.node.frontmatter.author} on {post.node.frontmatter.date}
        </small>
        <br />
        <br />
        <Link to={post.node.frontmatter.path}>Read More</Link>
        <br />
        <br />
        <hr />
      </div>
    ))}
  </Layout>
)

export default BlogPage
