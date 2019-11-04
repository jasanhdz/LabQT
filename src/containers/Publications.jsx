import React from 'react';
import '../components/styles/document.css';
import Post from './Post.jsx';
import { connect } from 'react-redux';

class Publication extends React.Component {
  deletePost = id => {
    return () => {
      console.log(id)
    }
  }
  render() {
    return (
        <div className="Wrapper__Container">
        <div className="Post__Container">
          <Post
            posts={this.props.postList}
            deletePost={this.deletePost}
          />
          </div>
        </div>
    )
  }
}

function mapStateToProps(state, props) {
  return {
    postList: state.get('data').get('posts')  
  }
}

export default connect(mapStateToProps)(Publication);