import React, { Component } from 'react';
import moment from 'moment';

import Styles from './styles.m.css';

import { Consumer } from '../HOC/withProfile';

class Post extends Component {
    render () {
        return (
            <Consumer>
                {(context) => (
                    <section className = { Styles.post }>
                        <img alt = '' src = { context.avatar } />
                        <a href = '#'>{`${context.currentUserFirstName} ${context.currentUserLastName}`} </a>
                        <p>Howady!</p>
                        <time>{moment().format('MMMM D h:mm:ss a')}</time>
                    </section>
                )}
            </Consumer>
        );
    }
}

export default Post;
