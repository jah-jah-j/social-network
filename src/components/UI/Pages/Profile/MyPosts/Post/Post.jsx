import React from 'react';
import s from './Post.module.css';


const Post = (props) => {
  return (
    <div className={s.post}>
      <div className={s.avatar}>
        <img src={props.avatarUrl} alt=""/>
      </div>
      <div>
        <p className={s.text}>{props.message}</p>
        <span className={s.likes}>{props.likesCount} likes</span>
      </div>
    </div>

  );
};

export default Post;
