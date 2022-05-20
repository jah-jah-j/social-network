import React, {useMemo} from 'react';
import {useDispatch} from 'react-redux'
import {bindActionCreators} from 'redux'

export function useActions(actions) {
  const dispatch = useDispatch()

  const boundActions = useMemo(() => {
    return bindActionCreators(actions, dispatch)
  }, [actions, dispatch])

  return boundActions
}

export default useActions;
