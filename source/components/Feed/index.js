import React, { Component } from 'react';
import moment from 'moment';

import StatusBar from '../StatusBar';
import Composer from '../Composer';
import Post from '../Post';
import Spinner from '../Spinner';

import Styles from './styles.m.css';
import { getUniqueID, delay } from '../../instruments';

class Feed extends Component {

    state = {
        posts: [
            {
                id:      '123',
                comment: 'Hi there',
                created: 15400266980,
                likes:   [],
            },
            {
                id:      '122',
                comment: 'Hello React!',
                created: 1540026698,
                likes:   [],

            }
        ],
        isPostFetching: false,
    }

    _setPostFetchingState = (state) => {
        this.setState({
            isPostFetching: state,
        });
    }

    _createPost = async (comment) => {

        this._setPostFetchingState(true);

        const post = {
            id:      getUniqueID(),
            created: moment().utc().valueOf(),
            comment,
            likes:   [],
        };

        await delay(1200);

        this.setState(({ posts }) => ({
            posts:          [post, ...posts],
            isPostFetching: false,
        }));
    }

    _likePost = async (id) => {
        const { currentUserFirstName, currentUserLastName } = this.props;

        this._setPostFetchingState(true);

        await delay(500);

        const newPosts = this.state.posts.map((post) => {
            if (post.id === id) {
                return {
                    ...post,
                    likes: [
                        {
                            id:        getUniqueID(),
                            firstName: currentUserFirstName,
                            lastName:  currentUserLastName,
                        }
                    ],
                };
            }

            return post;
        });

        this.setState({
            posts:          newPosts,
            isPostFetching: false,
        });
    }

    _deletePost = (id) => {
        const newPosts = this.state.posts.filter((post) => post.id !== id);

        this.setState({
            posts: newPosts,
        });
    }

    render () {

        const { posts, isPostFetching } = this.state;

        const postJSX = posts.map((post) => <Post key = { post.id } { ...post } _deletePost = { this._deletePost } _likePost = { this._likePost } />);

        return (
            <section className = { Styles.feed }>
                <Spinner isSpinning = { isPostFetching } />
                <StatusBar />
                <Composer _createPost = { this._createPost } />
                { postJSX }
            </section>
        );
    }
}

export default Feed;
