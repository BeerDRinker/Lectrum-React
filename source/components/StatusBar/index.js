import React, { Component } from 'react';
import cx from 'classnames';
import { Transition } from 'react-transition-group';
import { fromTo } from 'gsap';

import Styles from './styles.m.css';

import { Consumer } from '../HOC/withProfile';
import { socket } from '../../socket/init';

class StatusBar extends Component {

    state = {
        online: false,
    }

    componentDidMount () {
        socket.on('connect', () => {
            this.setState({
                online: true,
            });
        });

        socket.on('disconnect', () => {
            this.setState({
                online: false,
            });
        });
    }

    componentWillUnmount () {
        socket.removeListener('connect');
        socket.removeListener('disconnect');
    }

    _anomateStatusBarEnter (statusBar) {
        fromTo(statusBar, 1, { opacity: 0, y: -50 }, { opacity: 1, y: 5 });
    }

    render () {
        const { avatar, currentUserFirstName, currentUserLastName } = this.props;
        const { online } = this.state;

        const statusStyle = cx(Styles.status, {
            [Styles.online]:  online,
            [Styles.offline]: !online,
        });

        const statusMessage = online ? 'Online' : 'Offline';

        return (
            <Transition
                appear
                in
                timeout = { 5000 }
                onEnter = { this._anomateStatusBarEnter }>
                <section className = { Styles.statusBar } >
                    <div className = { statusStyle }>
                        <div>{statusMessage}</div>
                        <span />
                    </div>
                    <button>
                        <img alt = { currentUserFirstName } src = { avatar } />
                        <span>{currentUserFirstName}</span>
                        &nbsp;
                        <span>{currentUserLastName}</span>
                    </button>
                </section>
            </Transition>
        );
    }
}

export default StatusBar;
