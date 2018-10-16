import React, { Component } from 'react';

import avatar from '../../theme/assets/lisa.png';

class Composer extends Component {
    render () {
        return (
            <section>
                <img alt = '' src = { avatar } />
                <form>
                    <textarea placeholder = { `What's on your mind, LIsa` } />
                    <input type = 'submit' value = 'Post' />
                </form>
            </section>
        );
    }
}

export default Composer;
