import React, {useEffect} from 'react';
import Header from './Header'
import {useSelector} from 'react-redux'
import useActions from '../../../Hooks/useActions'
import {authActions, authSelectors} from '../../../redux/reducers/auth'

const HeaderContainer = () => {
  let auth = useSelector(authSelectors.auth)
  const {setAuthData} = useActions(authActions)

  useEffect(() => {
    setAuthData()
  }, [])

  return <Header auth={auth}/>
};
export default HeaderContainer;
