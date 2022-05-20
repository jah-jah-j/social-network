import React from 'react';
import styles from './UsersNav.module.css'
import MyButton from '../../../../UI-commons/MyButton/MyButton'

const UsersNav = ({currentPage, pages, setCurrentPage}) => {
  return (
    <div>
      <div className={styles.usersNav}>
        <nav>
          <span>All users</span>
          <span>Users Online</span>
        </nav>
        <nav>
          <span>Search users</span>
          <span>Filter</span>
        </nav>
      </div>
      <div className={styles.pagination}>
        {
          pages.map(p => {
            return (
              <div key={p} className={currentPage === p ? styles.currentPage : ''}>
                <MyButton onClick={() => setCurrentPage(p)} text={p}></MyButton>
              </div>
            )
          })
        }
      </div>
    </div>
  )
};

export default UsersNav;
