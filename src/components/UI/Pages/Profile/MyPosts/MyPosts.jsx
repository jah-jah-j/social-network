import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post'
import TextForm from '../../../../UI-commons/TextForm/TextForm'


const MyPosts = ({posts, newPostText, onUpdateNewPost, onPostAdd}) => {

  const postsItems = posts.map(p =>
    <Post key={p.id} message={p.message} likesCount={p.likes} avatarUrl={p.avatar}/>)

  const updateNewPost = (newText) => onUpdateNewPost(newText)


  return (
    <div>
      <div className={s.posts}>
        <h2 className={s.postsTitle}>My posts</h2>
        <TextForm newText={newPostText} updateNewTextValue={updateNewPost} addNew={onPostAdd}
                  placeholder="Write your post" btnName="Add post"/>
        <div className={s.postsBlock}>
          {postsItems}
        </div>
      </div>
    </div>
  );
};

export default MyPosts;
