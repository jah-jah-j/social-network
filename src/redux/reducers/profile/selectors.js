export const profilePage = state => state.profilePage;

export const myPosts = state => ({
  posts: state.profilePage.posts,
  newPostText: state.profilePage.newPostText
})

export const profile = state => state.profilePage.profile
