import React, { Component } from 'react';

import Composer from '../Composer';
import Post from '../Post';

import Styles from './styles.m.css';

class Feed extends Component {
    render () {
        return (
            <section className = { Styles.feed }>
                <Post />
                <Composer />
            </section>
        );
    }
}

export default Feed;
