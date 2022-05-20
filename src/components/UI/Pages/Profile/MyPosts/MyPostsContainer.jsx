import React from 'react';
import {useSelector} from 'react-redux'
import MyPosts from './MyPosts'
import {profileActions, profileSelectors} from '../../../../../redux/reducers/profile'
import useActions from '../../../../../Hooks/useActions'

const MyPostsContainer = () => {
  const myPostsState = useSelector(profileSelectors.myPosts);

  const {onPostAdd, onUpdateNewPost} = useActions(profileActions)

  return <MyPosts posts={myPostsState.posts}
                  newPostText={myPostsState.newPostText}
                  onUpdateNewPost={onUpdateNewPost}
                  onPostAdd={onPostAdd}
  />
}

export default MyPostsContainer;
