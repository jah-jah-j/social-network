import React from 'react';
import s from './MyPosts.module.css';


const MyPosts = () => {
  return (
    <div>
      <div className={s.posts}>
        <h2 className={s.postsTitle}>My posts</h2>
        <div className={s.postsForm}>New posts</div>
        <div className={s.postsBlock}>
          <div className={s.post}>post-1</div>
        </div>
      </div>
    </div>
  );
};

export default MyPosts;
