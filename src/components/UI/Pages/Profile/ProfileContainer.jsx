import React, {useEffect} from 'react';
import {useSelector} from 'react-redux';
import Profile from './Profile';
import {profileActions, profileSelectors} from '../../../../redux/reducers/profile';
import useActions from '../../../../Hooks/useActions';
import Loader from '../../../UI-commons/Loader/Loader';
import {useParams} from 'react-router-dom';
import {authSelectors} from '../../../../redux/reducers/auth';

const ProfileContainer = () => {
  const profile = useSelector(profileSelectors.profile)
  const profileID = useSelector(authSelectors.myID)
  const {setProfile} = useActions(profileActions)
  const {userId} = useParams();

  useEffect(() => {
    !userId
      ? setProfile(profileID ? profileID : 2)
      : setProfile(userId)
  }, [userId])

  return (
    <>
      {profile
        ? <Profile profile={profile}/>
        : <Loader/>}
    </>
  );
};

export default ProfileContainer;
