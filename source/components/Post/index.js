import React, { Component } from 'react';
import { func, string, number, array } from 'prop-types';
import moment from 'moment';

import Styles from './styles.m.css';

import Like from '../Like';
import { withProfile } from 'components/HOC/withProfile';

@withProfile
class Post extends Component {
  static propTypes = {
      _likePost:   func.isRequired,
      _removePost: func.isRequired,
      comment:     string.isRequired,
      created:     number.isRequired,
      id:          string.isRequired,
      likes:       array.isRequired,
  };

  _removePost = () => {
      const { _removePost, id } = this.props;

      _removePost(id);
  }

  _getCross = () => {
      const { firstName, lastName, currentUserFirstName, currentUserLastName } = this.props;

      return `${firstName} ${lastName}` === `${currentUserFirstName} ${currentUserLastName}`
          ? <span className = { Styles.cross } onClick = { this._removePost } /> : null;
  }

  render () {

      const { comment,
          created,
          _likePost,
          id,
          likes,
          _removePost,
          avatar,
          firstName,
          lastName,
          currentUserFirstName,
          currentUserLastName,
      } = this.props;

      const cross = this._getCross();

      return (
          <section className = { Styles.post }>
              { cross }
              <img alt = '' src = { avatar } />
              <a href = '#'>{`${firstName} ${lastName}`} </a>
              <time>
                  {moment.unix(created).format('MMMM D h:mm:ss a')}
              </time>
              <p>{comment}</p>
              <Like _likePost = { _likePost } id = { id } likes = { likes } />
          </section>
      );
  }
}

export default Post;
