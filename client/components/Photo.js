import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import CSSTransitionGroup from 'react-addons-css-transition-group';

class Photo extends React.Component {
    render () {
        console.log('xxx' ,this.props);
        const {post, i, comments} = this.props;
        return (
            <figure className="grid-figure">
                <div className="grid-photo-wrap">
                    <Link to={`/view/${post.code}`}>
                        <img src={post.display_src} alt={post.caption} 
                        className="grid-photo" />
                    </Link>

                    <CSSTransitionGroup transitionName="like"
                    transitionEnterTimeOut={500}
                    transitionLeaveTimeOut={500}>
                    <span key={post.likes} className="likes-heart">
                    {post.likes}
                    </span>
                    </CSSTransitionGroup>

                </div>

                <figcaption>
                    <p>{post.caption}</p>
                </figcaption>

            </figure>
        )
    }

}

function mapStateToProps(state) {
    console.log(state);
    return {
        posts: state.posts,
        comments: state.comments
    }
}

// const App = connect(mapStateToProps, mapDispatchToProps)(Main);
const connector = connect(mapStateToProps, null);

export default connector(Photo);