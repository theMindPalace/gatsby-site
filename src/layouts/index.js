import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import './index.css'


const navbarStyle = {
  ul:{
    listStyle:'none',
    padding:'0',
    margin:'0'
  },
  li:{
    display:'inline-block',
    marginRight:'2em'
  }
}
const Header = () => (
  <div
    style={{
      background: '#f56',
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          Gatsby
        </Link>
      </h1>
      <ul className="main-nav" style={navbarStyle.ul}>
        <li style={navbarStyle.li}><Link to="/">Home</Link></li>
        <li style={navbarStyle.li}><Link to="/page-2">Page 2</Link></li>
        <li style={navbarStyle.li}><Link to="/page-3">Page 3</Link></li>
      </ul>
    </div>
  </div>
)



const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Gatsby site"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header />
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
      }}
    >
      {children()}
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
