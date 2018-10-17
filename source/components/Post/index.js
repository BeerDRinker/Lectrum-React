import React, { Component } from 'react';
import moment from 'moment';

import Styles from './styles.m.css';

class Post extends Component {
    render () {
        const { avatar, currentUserFirstName, currentUserLastName } = this.props;

        return (
            <section className = { Styles.post }>
                <img alt = '' src = { avatar } />
                <a href = '#'>{`${currentUserFirstName} ${currentUserLastName}`} </a>
                <p>Howady!</p>
                <time>{moment().format('MMMM D h:mm:ss a')}</time>
            </section>
        );
    }
}

export default Post;
