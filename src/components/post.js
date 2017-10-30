import React from 'react'

const postStyle = {
    rootDiv: {
        margin:"10px 0"
    },
    h1:{

    },
    span:{
        fontSize:'12px',
        color:"#cecece"
    }
}
export default ( { post } ) => (
    <div style={postStyle.rootDiv}>
        <h1>{ post.frontmatter.title } <span style={ postStyle.span }> - { post.frontmatter.date } </span></h1>
        <div>
            { post.excerpt }
        </div>
    </div>
)