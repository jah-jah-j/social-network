import axios from 'axios'

export const getProfile = (profileID) => axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${profileID}`)
