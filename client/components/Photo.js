import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import CSSTransitionGroup from 'react-addons-css-transition-group';

class Photo extends React.Component {

    constructor() {
        super();
        this.handleOnClick = this.handleOnClick.bind(this);
    }

    handleOnClick () {
        this.props.increment(this.props.i);
    }

    //

    render () {
        const {post, i, comments} = this.props;
        return (
            <figure className="grid-figure">
                <div className="grid-photo-wrap">
                    <Link to={`/view/${post.code}`}>
                        <img src={post.display_src} alt={post.caption} 
                        className="grid-photo" />
                    </Link>

                    <CSSTransitionGroup 
                    transitionName="like"
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={500}>
                    <span key={post.likes} className="likes-heart">
                        {post.likes}
                    </span>
                    </CSSTransitionGroup>

                </div>

                <figcaption>
                    <p>{post.caption}</p>
                    <div className="control-buttons">
                        <button onClick={this.handleOnClick} className="likes">
                            ❤ {post.likes}
                        </button>
                        <Link className="button" to={`/view/${post.code}`}> 
                            <span className="comment-count">
                                <span className="speech-bubble"></span>
                                {comments[post.code] ? comments[post.code].length : 0}
                            </span>
                        </Link>
                    </div>
                </figcaption>

            </figure>
        )
    }

}

function mapStateToProps(state) {
    return {
        posts: state.posts,
        comments: state.comments
    }
}

// const App = connect(mapStateToProps, mapDispatchToProps)(Main);
const connector = connect(mapStateToProps, null);

export default connector(Photo);