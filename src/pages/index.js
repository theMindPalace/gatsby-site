import React from 'react'
import Link from 'gatsby-link'
import Post from '../components/post'

const IndexPage = ({ data }) => {
  console.log(data)

  let { allMarkdownRemark } = data;
  return(<div>
    <h1>Posts</h1>

    {
      allMarkdownRemark.edges.map(({node},i) => {

        return (
          <Post key={i} post={node} />
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