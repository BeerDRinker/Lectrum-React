import React, { Component } from 'react';

import Composer from '../Composer';
import Post from '../Post';
import StatusBar from '../StatusBar';

import Styles from './styles.m.css';

class Feed extends Component {
    render () {
        const { avatar, currentUserFirstName } = this.props;

        return (
            <section className = { Styles.feed }>
                <StatusBar { ...this.props } />
                <Composer
                    avatar = { avatar }
                    currentUserFirstName = { currentUserFirstName }
                />
                <Post { ...this.props } />
            </section>
        );
    }
}

export default Feed;
