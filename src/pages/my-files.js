import React, { Component } from 'react';

export default class  extends Component {

    constructor(props) {
        super(props);

        this.renderFileList = this.renderFileList.bind(this);
    }
    componentDidMount() {

        //console.log(this.props);

    }

    renderFileList() {

        let { data } = this.props;
        console.log(data)
        if( data ) {
            let files = data.allFile.edges;

            return files.map((file,i) => {

                return <p key={i}>File  <span style={{'backgroundColor':'#f56',padding:'5px'}}>{file.node.relativePath}</span> , {file.node.birthTime}</p>
            })
        }

    }
    render () {
        return (
            <div>
                { this.renderFileList() }
            </div>
        );
    }
}

export const query = graphql`
  query MyFilesQuery {
    allFile {
      edges {
        node {
          relativePath
          prettySize
          extension
          birthTime(fromNow: true)
        }
      }
    }
  }
`