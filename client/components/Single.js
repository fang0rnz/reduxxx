import React from 'react';
import Photo from './Photo';
import Comments from './Comments'

class Single extends React.Component {
    render() {
        const { postId } = this.props.params;
        //index of the post
        const i = this.props.posts.findIndex( (post) => post.code === postId );
        const post = this.props.posts[i];
        const postComments = this.props.comments[postId] || [];
        //get us the post
        
        return (
            <div className="single-photo">
                <Photo i={i} post={post} {...this.props}/>
                <Comments postComments={postComments}/>
            </div>
        )
    }
}

export default Single;
