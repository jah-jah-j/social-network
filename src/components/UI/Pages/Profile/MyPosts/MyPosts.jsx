import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post'
import TextForm from '../../../TextForm/TextForm'


const MyPosts = (props) => {

  const postsItems = props.posts.map(p =>
    <Post key={p.id} message={p.message} likesCount={p.likes} avatarUrl={p.avatar}/>)

  const updateNewPost = (newText) => {
    props.onPostChange(newText)
  }

  return (
    <div>
      <div className={s.posts}>
        <h2 className={s.postsTitle}>My posts</h2>
        <TextForm newText={props.newPostText} updateNewTextValue={updateNewPost} addNew={props.onAddPost}
                  placeholder="Write your post" btnName="Add post"/>
        <div className={s.postsBlock}>
          {postsItems}
        </div>
      </div>
    </div>
  );
};

export default MyPosts;
