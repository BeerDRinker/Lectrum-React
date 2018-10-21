import React, { Component } from 'react';
import { func, string, number, array } from 'prop-types';
import moment from 'moment';

import Styles from './styles.m.css';

import Like from '../Like';
import { Consumer } from '../HOC/withProfile';

class Post extends Component {
    static propTypes = {
        _deletePost: func.isRequired,
        _likePost:   func.isRequired,
        comment:     string.isRequired,
        created:     number.isRequired,
        id:          string.isRequired,
        likes:       array.isRequired,
    };

    render () {

        const { comment, created, _likePost, id, likes, _deletePost } = this.props;

        return (
            <Consumer>
                {(context) => (
                    <section className = { Styles.post }>
                        <span className = { Styles.cross } onClick = { () => _deletePost(id) } />
                        <img alt = '' src = { context.avatar } />
                        <a href = '#'>{`${context.currentUserFirstName} ${context.currentUserLastName}`} </a>
                        <time>
                            {moment.unix(created).format('MMMM D h:mm:ss a')}
                        </time>
                        <p>{comment}</p>
                        <Like _likePost = { _likePost } id = { id } likes = { likes } { ...context } />
                    </section>
                )}
            </Consumer>
        );
    }
}

export default Post;
