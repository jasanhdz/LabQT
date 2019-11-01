import React from 'react';
import '../components/styles/document.css';
import Post from './Post.jsx'
import { connect } from 'react-redux';

class Publication extends React.Component {

  render() {
    return (
        <div className="Wrapper__Container">
          <div className="Post__Container">
          <Post
            posts={this.props.postList}
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