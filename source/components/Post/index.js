import React, { Component } from 'react';
import moment from 'moment';

import avatar from '../../theme/assets/lisa.png';

import Styles from './styles.m.css';

class Post extends Component {
    render () {
        return (
            <section className = { Styles.post }>
                <img alt = '' src = { avatar } />
                <a href = '#'>Lisa Simpson</a>
                <p>Howady!</p>
                <time>{moment().format('MMMM D h:mm:ss a')}</time>
            </section>
        );
    }
}

export default Post;
