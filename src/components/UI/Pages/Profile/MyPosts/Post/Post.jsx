import React from 'react';
import s from './Post.module.css';


const Post = ({message, likesCount, avatarUrl}) => {
  return (
    <div className={s.post}>
      <div className={s.avatar}>
        <img src={avatarUrl} alt=""/>
      </div>
      <div>
        <p className={s.text}>{message}</p>
        <span className={s.likes}>{likesCount} likes</span>
      </div>
    </div>

  );
};

export default Post;
