import React, { Component } from 'react';
import moment from 'moment';

import avatar from '../../theme/assets/lisa.png';

class Post extends Component {
    render () {
        return (
            <section>
                <img alt = '' src = { avatar } />
                <a href = '#'>Lisa Simpson</a>
                <time>Today</time>
                <p>{moment().format('MMMM D h:mm:ss a')}</p>
            </section>
        );
    }
}

export default Post;
