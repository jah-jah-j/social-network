import React from 'react';
import {addPostActionCreator, updateNewPostActionCreator} from '../../../../../redux/reducers/profileReducer'
import MyPosts from './MyPosts'


const MyPostsContainer = (props) => {

  const state = props.store.getState()

  const updateNewPost = (newText) => {
    props.store.dispatch(updateNewPostActionCreator(newText))
  }

  const addPost = () => {
    props.store.dispatch(addPostActionCreator())
  }

  return <MyPosts onAddPost={addPost}
                  onPostChange={updateNewPost}
                  posts={state.profilePage.posts}
                  newPostText={state.profilePage.newPostText}
  />
};

export default MyPostsContainer;
