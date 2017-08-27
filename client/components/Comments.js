import React from 'react';

class Comments extends React.Component {
   
    constructor(){
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.renderComment = this.renderComment.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
    }

    
    renderComment(comment, i) {
        
        return (
            <div className="comment" key={i}>
                <p>
                    <strong>{comment.user}</strong>
                    {comment.text}
                    <button className="remove-comment"
                    onClick={() => this.handleRemove(i)}
                    >&times;
                    </button>
                </p>
            </div>
        )
    }

    handleRemove (i) {
        console.log(i); //how to get by props??
        const { postId } = this.props.params;
        this.props.removeComment(postId, i);
       
    }


    
    handleSubmit (e) {
        e.preventDefault();
        const {postId} = this.props.params;
        const author = this.refs.author.value;
        const comment = this.refs.comment.value;
        this.props.addComment(postId, author, comment);
        this.refs.commentForm.reset();
        
    }

    
    render() {
        return(
            <div className="comment">
                {this.props.postComments.map(this.renderComment)}
                <form ref="commentForm" className="comment-form" onSubmit={this.handleSubmit}>
                    <input type="text" ref="author" placeholder="author"/>
                    <input type="text" ref="comment" placeholder="comment"/>
                    <input type="submit" hidden />
                </form>
            </div>
        )
    }

}

export default Comments;