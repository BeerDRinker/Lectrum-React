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
                <time>Today</time>
                <p>{moment().format('MMMM D h:mm:ss a')}</p>
            </section>
        );
    }
}

export default Post;
