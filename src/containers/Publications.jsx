import React from 'react';
import '../components/styles/document.css';
import Post from './Post.jsx'

class Publication extends React.Component {
  render() {
    return (
        <div className="Wrapper__Container">
          <div className="Post__Container">
            <Post />
            <Post />
          </div>
        </div>
    )
  }
}


export default Publication;