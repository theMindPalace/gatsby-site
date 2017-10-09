import React from 'react';
import Link from 'gatsby-link';
import Conuter from '../components/conuter'


const ThirdPage = ({data}) => (
    <div>
        This is the third page of { data.site.siteMetadata.title }
        <Conuter/>
        <Link to="/">Home</Link>
    </div>
)

export default ThirdPage;

export const query = graphql`
  query ThirdPageQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`