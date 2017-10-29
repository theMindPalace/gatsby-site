import React from 'react'
import Link from 'gatsby-link'

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
  const Header = ({ title }) => (
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
            {title}
          </Link>
        </h1>
        <ul className="main-nav" style={navbarStyle.ul}>
          <li style={navbarStyle.li}><Link to="/">Home</Link></li>
          <li style={navbarStyle.li}><Link to="/page-2">Page 2</Link></li>
          <li style={navbarStyle.li}><Link to="/page-3">Page 3</Link></li>
          <li style={navbarStyle.li}><Link to="/my-files">My Files</Link></li>
        </ul>
      </div>
    </div>
  )

  export default Header