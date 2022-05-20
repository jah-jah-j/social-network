import React from 'react';
import Users from './Users';
import * as axios from 'axios';
import Loader from '../../../UI-commons/Loader/Loader'
import {useSelector} from 'react-redux'
import {usersActions, usersSelectors} from '../../../../redux/reducers/users'
import useActions from '../../../../Hooks/useActions'

export class UsersAPI extends React.Component {

  componentDidMount() {
    this.props.setIsFetching(true);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.state.currentPage}&count=${this.props.state.pageSize}`)
      .then(res => {
        this.props.setIsFetching(false);
        this.props.setUsers(res.data.items);
        this.props.setTotalCount(res.data.totalCount);
      })
  }

  setCurrentPage = (p) => {
    this.props.setIsFetching(true);
    this.props.setCurrentPage(p);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.state.pageSize}`)
      .then(res => {
        this.props.setIsFetching(false);
        this.props.setUsers(res.data.items);
      })
  }

  totalPageCounter = () => {
    const totalPages = Math.ceil(this.props.state.totalPages / this.props.state.pageSize);
    const pages = [];

    for (let i = 1; i <= totalPages; i++) {
      if (i < 10) {
        pages.push(i);
      } else {
        pages.push('...');
        pages.push(totalPages);
        break;
      }
    }
    return pages;
  }

  render() {
    return <>
      {this.props.state.isFetching
        ? <Loader/>
        : <Users follow={this.props.follow}
                 unfollow={this.props.unfollow}
                 state={this.props.state}
                 setCurrentPage={this.setCurrentPage}
                 pages={this.totalPageCounter()}
        />
      }
    </>
  }
}


const UsersContainer = () => {
  const users = useSelector(usersSelectors.users);
  const
    {follow, unfollow, setUsers, setCurrentPage, setTotalCount, setIsFetching} = useActions(usersActions)


  return <UsersAPI follow={follow}
                   unfollow={unfollow}
                   state={users}
                   setUsers={setUsers}
                   setCurrentPage={setCurrentPage}
                   setTotalCount={setTotalCount}
                   setIsFetching={setIsFetching}
  />
};

export default UsersContainer;
