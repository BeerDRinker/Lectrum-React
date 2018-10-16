import React, { Component } from 'react';

import Composer from '../Composer';
import Post from '../Post';
import StatusBar from '../StatusBar'

import Styles from './styles.m.css';

class Feed extends Component {
    render () {
        return (
            <section className = { Styles.feed }>
                <StatusBar />
                <Composer />
                <Post />
            </section>
        );
    }
}

export default Feed;
