import React from 'react'
import Link from 'gatsby-link'

const IndexPage = ({ data }) => {
  console.log(data)

  let { allMarkdownRemark } = data;
  return(<div>
    <h1>Posts</h1>

    {
      allMarkdownRemark.edges.map(({node},i) => {

        return (
          <div key={i}>
              <h1>{node.frontmatter.title}{" "}</h1>
              <p>{node.frontmatter.date}</p>
              <div>
                {node.excerpt}
              </div>
          </div>
        )
      })
    }
    
  </div>
)
}

export default IndexPage

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          excerpt
        }
      }
    }
  }`